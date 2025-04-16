import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '@/components/Context/ThemeContext';
import { debounce } from 'lodash';

const AiAgent = ({ formData }) => {
  const { theme } = useTheme();
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load API key from environment variables (Next.js)
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  // Theme-based styling
  const cardBg = theme === 'light' ? 'bg-[#FEDBFF]' : 'bg-[#1E2939]';
  const textColor = theme === 'light' ? 'text-[#181A1B]' : 'text-[#E4E6E7]';
  const buttonBg = 'bg-[#F9F51A] hover:bg-[#E8E41A]';
  const buttonText = 'text-[#181A1B]';
  const accentColor = theme === 'light' ? 'text-[#20252D]' : 'text-[#D2D7DF]';

  // Sanitize formData to prevent JSON issues
  const sanitizeData = (data) => {
    if (typeof data === 'string') {
      return data
        .replace(/[\n\r\t]/g, ' ') // Remove newlines and tabs
        .replace(/"/g, '\\"') // Escape quotes
        .trim();
    }
    if (Array.isArray(data)) {
      return data.map(sanitizeData);
    }
    if (typeof data === 'object' && data !== null) {
      const sanitized = {};
      for (const [key, value] of Object.entries(data)) {
        sanitized[key] = sanitizeData(value);
      }
      return sanitized;
    }
    return data;
  };

  const generateFeedback = useCallback(async () => {
    setLoading(true);
    setError('');
    setFeedback(null);

    try {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: 'gemini-1.5-flash',
        generationConfig: { responseMimeType: 'application/json' },
      });

      const sanitizedFormData = sanitizeData(formData);
      const prompt = `
        Analyze the following resume data for completeness, quality, correctness, and optimization. Ensure the response is valid JSON with properly escaped characters. Provide:
        1. A list of missing or incomplete fields (e.g., empty firstName, email).
        2. Any typos, grammatical errors, or awkward phrasing in text fields (e.g., careerObjective, workHistory descriptions).
        3. Suggestions for improvement, grouped by resume section (Personal Information, Career Objective, Education, Work History, Skills, Courses, Projects, Languages, Social Links). Include:
           - Completeness (e.g., missing fields).
           - Content quality (e.g., clarity, professionalism).
           - Formatting (e.g., consistent dates).
           - Optimization (e.g., job-specific keywords, quantifiable achievements).
           - Mark critical suggestions with "[Critical]".
        4. A rewritten careerObjective if weak, missing, or could be improved.
        5. A score from 0 to 10 (integer) evaluating the resume's overall quality, considering:
           - Completeness: Are all key sections filled?
           - Content Quality: Is the text clear, professional, and specific?
           - Optimization: Are keywords and achievements used effectively?
           - Formatting: Is the structure consistent and clean?
           Higher scores (8–10) indicate a polished, job-ready resume; lower scores (0–4) indicate significant gaps or issues.
        6. Return a JSON object with keys: missingFields, qualityIssues, suggestionsBySection, improvedCareerObjective, score. Limit each section to 10 items max to avoid oversized responses.

        Resume Data:
        ${JSON.stringify(sanitizedFormData, null, 2)}
      `;

      const result = await model.generateContent(prompt);
      const responseText = await result.response.text();
      console.log('Raw API Response:', responseText); // Debug log

      // Validate JSON before parsing
      let aiFeedback;
      try {
        aiFeedback = JSON.parse(responseText);
      } catch (parseErr) {
        console.error('JSON Parse Error:', parseErr.message, responseText);
        throw new Error(`Invalid JSON response from API: ${parseErr.message}`);
      }

      // Validate structure and score
      if (!aiFeedback || typeof aiFeedback !== 'object') {
        throw new Error('Invalid feedback format received');
      }
      if (typeof aiFeedback.score !== 'number' || aiFeedback.score < 0 || aiFeedback.score > 10) {
        console.warn('Invalid score received:', aiFeedback.score);
        aiFeedback.score = 0; // Fallback
      }

      setFeedback(aiFeedback);
      setScore(aiFeedback.score);
    } catch (err) {
      console.error('Feedback Error:', err);
      setError(`Error generating feedback: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }, [formData, apiKey]);

  // Debounce generateFeedback to avoid quota limits
  const debouncedGenerateFeedback = useCallback(
    debounce(generateFeedback, 5000), // 5-second delay
    [generateFeedback]
  );

  useEffect(() => {
    if (!apiKey) {
      setError('Google API key is missing. Please configure NEXT_PUBLIC_GOOGLE_API_KEY in .env.local.');
      return;
    }
    if (Object.values(formData).some((value) => value?.length > 0 || value)) {
      debouncedGenerateFeedback();
    }
    return () => debouncedGenerateFeedback.cancel();
  }, [formData, apiKey, debouncedGenerateFeedback]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Convert score (0-10) to percentage for display
  const scorePercentage = score * 10;

  return (
    <div>
      {/* Feedback Button */}
      <button
        onClick={toggleDrawer}
        className={`px-3 py-2 ${buttonBg} ${buttonText} rounded-full text-sm font-medium flex items-center gap-2 transition`}
        title="View AI Resume Feedback"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        AI Feedback
      </button>

      {/* Right-Side Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 ${cardBg} ${textColor} shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className={`text-2xl font-bold ${textColor}`}>
              AI Resume Feedback
            </h1>
          </div>

          {/* Score Circle */}
          <div className="flex items-center mb-6">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke={theme === 'light' ? '#e5e7eb' : '#4b5563'}
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeDasharray={`${scorePercentage}, 100`}
                />
              </svg>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className={`text-2xl font-bold ${textColor}`}>
                  {scorePercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Feedback Details */}
          <div>
            {loading && (
              <div className="p-3 bg-blue-100 text-blue-700 rounded-md mb-4">
                Generating feedback...
              </div>
            )}
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md mb-4">
                {error}
              </div>
            )}
            {feedback && (
              <>
                <div className="mb-6">
                  <h3 className={`text-lg font-medium ${textColor}`}>
                    Quality Issues
                  </h3>
                  {feedback.qualityIssues?.length > 0 ? (
                    <ul className="list-disc pl-5 mt-2">
                      {feedback.qualityIssues.map((issue, index) => (
                        <li key={index} className={accentColor}>
                          {issue}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`mt-2 ${accentColor}`}>
                      No quality issues detected.
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <h3 className={`text-lg font-medium ${textColor}`}>
                    Suggestions for Improvement
                  </h3>
                  {feedback.suggestionsBySection && Object.keys(feedback.suggestionsBySection).length > 0 ? (
                    Object.entries(feedback.suggestionsBySection).map(([section, suggestions]) => (
                      <div key={section} className="mt-4">
                        <h4 className={`text-md font-semibold ${textColor}`}>
                          {section}
                        </h4>
                        {suggestions.length > 0 ? (
                          <ul className="list-disc pl-5 mt-2">
                            {suggestions.map((suggestion, index) => (
                              <li key={index} className={accentColor}>
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className={`mt-2 ${accentColor}`}>
                            No suggestions for this section.
                          </p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className={`mt-2 ${accentColor}`}>
                      Great job! Your resume is well-structured.
                    </p>
                  )}
                </div>
                {feedback.improvedCareerObjective && (
                  <div className="mb-6">
                    <h3 className={`text-lg font-medium ${textColor}`}>
                      Improved Career Objective
                    </h3>
                    <p className={`mt-2 ${accentColor}`}>
                      {feedback.improvedCareerObjective}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-2">
            <button
              onClick={debouncedGenerateFeedback}
              disabled={loading || !apiKey}
              className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                loading || !apiKey
                  ? 'bg-gray-300 cursor-not-allowed'
                  : `${buttonBg} ${buttonText} transition`
              }`}
            >
              {loading ? 'Generating...' : 'Refresh Feedback'}
            </button>
            <button
              onClick={toggleDrawer}
              className={`w-full px-4 py-2 ${buttonBg} ${buttonText} rounded-md font-medium transition`}
              title="Close AI Feedback Drawer"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"></div>
      )}
    </div>
  );
};

export default AiAgent;