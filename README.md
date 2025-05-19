# 📝 Online Resume Builder

The **Online Resume Builder** is a modern web application that allows users to create, customize, and export professional resumes through an intuitive interface. This document provides a high-level overview of the system architecture, core components, and key features of the application.




## Live Demo 🌐

*([visite our website ](https://online-resume-builder-omega.vercel.app/))*

---

## Overview

The Online Resume Builder allows users to build professional resumes with:

* Step-by-step form interface
* Real-time preview
* AI-powered content suggestions
* Multiple professional templates
* Export to PDF functionality
* Dark & light mode support
* Responsive design for all devices

---

## Key Features 🌟

### 🔑 Authentication

* Email/password login and registration
* Social logins (Google, GitHub) via NextAuth.js
* Role-based access control with protected routes

### 🧩 Resume Building

* Stepwise input forms for:

  * Personal Info
  * Work Experience
  * Education
  * Skills
  * Languages
  * References
* Real-time resume preview
* AI-assisted content suggestions

### 🎨 Template Management

* Browse and preview various resume templates
* Filter templates by style/category
* Seamless template selection and switching

### 📄 PDF Export

* Export finished resumes to PDF using html2canvas and jsPDF

### 🌗 Theme Support

* Toggle between light and dark themes

---

## System Architecture

The app is built with a modern Next.js React stack and includes:

* Client-side UI with React and Tailwind CSS
* State management with React Context and hooks
* Authentication via NextAuth.js with OAuth providers
* Backend API routes for user and resume data
* MongoDB database for persistent storage
* AI integration using Google Generative AI
* Deployed frontend on Vercel

---

## Technology Stack 🔨

| Layer              | Technologies                                |
| ------------------ | ------------------------------------------- |
| Frontend Framework | Next.js 15.2.2, React 19                    |
| Styling            | Tailwind CSS, tailwind-merge, Framer Motion |
| Authentication     | NextAuth.js                                 |
| State Management   | React Context API, React Hooks              |
| PDF Generation     | html2canvas, jsPDF                          |
| AI Integration     | Google Generative AI                        |
| Backend Database   | MongoDB                                     |
| Deployment         | Vercel                                      |

---

## User Flow 🚦

1. User visits landing page
2. User signs up or logs in (credentials or social login)
3. User browses resume templates and selects one
4. User fills in resume details step-by-step
5. Real-time preview updates as user types
6. User exports resume as PDF
7. Optional: Save resume for later edits

---

## API Endpoints 📡

| Endpoint             | Method | Description            |
| -------------------- | ------ | ---------------------- |
| /api/auth/signin     | PUT    | User login             |
| /api/auth/signup     | POST   | User registration      |
| /api/auth/users      | GET    | Retrieve all users     |
| /api/auth/users/\:id | GET    | Retrieve specific user |
| /api/auth/users/\:id | PATCH  | Update user data       |
| /api/auth/users/\:id | DELETE | Delete user            |

---

## Development & Deployment 🚀

### Local Setup

```bash
git clone https://github.com/pro-majidul/Online-Resume-Builder.git
cd Online-Resume-Builder
npm install
```

Create `.env.local` file with:

```env
NEXT_PUBLIC_API_BASE_URL='http://localhost:5000/api/auth'
```

Start development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Production Build

```bash
npm run build
npm start
```

---

## Configuration Files

* `next.config.mjs` - Next.js config
* `jsconfig.json` - Path aliases
* `eslint.config.mjs` - ESLint setup
* `.env.local` - Environment variables (not included in repo)

---

## Additional Tools

* ESLint for code quality
* Turbopack for fast dev server
* Path aliases for clean imports
* React-hot-toast and SweetAlert2 for notifications

---

## Sources & References

* `src/app/page.js`
* `src/components/Navbar.js`
* `package.json`
* `README.md`

---

Feel free to reach out if you want me to help you generate a full GitHub README.md file with markdown formatting or something else!

| **Deployment**      | Vercel (recommended)                                          |

> **Sources**:  
> `package.json (11–42)`  
> `README.md (1–49)`

---

## 🔐 Authentication System

The authentication system is built with **NextAuth.js**, supporting both credentials-based login and social OAuth providers.

**Components:**
- User  
- NextAuth Session Provider  
- Credentials Provider  
- Social Providers  
- API Routes  
- MongoDB  
- User Session  
- Protected Routes  

> **Sources**:  
> `src/components/Navbar.js (10–18)`  
> `package.json (29)`

---

## 🧩 Resume Builder System

The resume builder offers a **multi-step interface** where users input resume data section by section. Includes:

- BuilderPage  
- Step Navigation  
- Personal Info  
- Experience  
- Education  
- Skills  
- Languages  
- References  
- resumeData State  
- Resume Preview  
- PDF Export  
- Google Generative AI

> **Sources**:  
> `package.json (12, 24–25)`

---

## 🖼 Template Management System

Users can browse and choose from categorized templates. Features include:

- Template Gallery  
- Template Categories  
- Featured Templates  
- Template Grid  
- Template Preview  
- Template Selection  
- Resume Builder Integration  

> **Sources**:  
> `src/app/page.js (34–36)`

---

## 🧭 UI & Navigation System

Provides consistent layout, theming, and navigation. Components include:

- RootLayout  
- ThemeProvider  
- NextAuthSessionProvider  
- Application Layout  
- Navigation Bar  
- Main Content Area  
- Footer  
- Theme Context  
- User Session  
- Navigation Routes  
- Home Page  
- Resume Builder  
- Template Gallery  
- About Page  
- Contact Page  

> **Sources**:  
> `src/components/Navbar.js (11–22, 24–30)`

---

## 🔄 User Flow

1. User lands on the homepage  
2. Logs in via credentials or social login  
3. Selects a resume template  
4. Fills out resume step-by-step  
    - Personal Info  
    - Work Experience  
    - Education  
    - Skills  
    - Languages  
    - References  
5. Views live resume preview  
6. Exports resume as PDF  
7. Optionally saves resume for later editing  

> **Sources**:  
> `src/app/page.js (1–49)`  
> `src/components/Navbar.js (1–134)`

---

## 🚀 Development and Deployment

To run the project locally or deploy to production:

### 🔧 Local Development
```bash
npm run dev  # Starts development server with Turbopack
