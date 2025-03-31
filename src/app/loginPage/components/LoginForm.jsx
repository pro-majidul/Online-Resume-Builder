"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaLockOpen } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useTheme } from "@/components/Context/ThemeContext";
import clsx from "clsx";
import { checkLockoutStatus } from "@/utils/api";

export default function LoginForm() {
  const { theme } = useTheme();
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [remainingAttempts, setRemainingAttempts] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTime, setLockoutTime] = useState(null);
  const [countdown, setCountdown] = useState(null);

  const textColor = theme === "light" ? "text-[#181A1B]" : "text-[#E4E6E7]";
  const secondaryColor = theme === "light" ? "bg-[#FEDBFF]" : "bg-[#230024]";
  const accentColor = theme === "light" ? "border-[#20252D]" : "border-[#D2D7DF]";
  const bgInput = theme === "light" ? "bg-[#FFFFFF]/50" : "bg-[#000000]/50";
  const errorColor = theme === "light" ? "text-red-600" : "text-red-400";

  // Watch email input to check lockout status dynamically
  const email = watch("email");

  // Fetch lockout status when email changes
  useEffect(() => {
    const fetchLockoutStatus = async () => {
      if (email) {
        try {
          const status = await checkLockoutStatus(email);
          setRemainingAttempts(status.remainingAttempts);
          setIsLocked(status.isLocked);
          setLockoutTime(status.lockUntil ? new Date(status.lockUntil) : null);
        } catch (error) {
          console.error("Failed to fetch lockout status:", error);
        }
      }
    };
    fetchLockoutStatus();
  }, [email]);

  // Update countdown timer for lockout
  useEffect(() => {
    if (isLocked && lockoutTime) {
      const interval = setInterval(() => {
        const now = new Date();
        const timeLeft = Math.ceil((lockoutTime - now) / 1000); // Seconds
        setCountdown(timeLeft > 0 ? timeLeft : 0);

        if (timeLeft <= 0) {
          setIsLocked(false);
          setLockoutTime(null);
          setRemainingAttempts(3); // Reset to max attempts
          clearInterval(interval);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isLocked, lockoutTime]);

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (result?.ok) {
        Swal.fire({
          title: "Successfully Logged In!",
          icon: "success",
          timer: 2000,
        });
        router.push("/");
        reset();
        setRemainingAttempts(null);
        setLockoutTime(null);
        setIsLocked(false);
      } else {
        // Fetch updated lockout status after failed attempt
        const status = await checkLockoutStatus(email);
        setRemainingAttempts(status.remainingAttempts);
        setIsLocked(status.isLocked);
        setLockoutTime(status.lockUntil ? new Date(status.lockUntil) : null);

        Swal.fire({
          title: status.isLocked ? "Account Locked" : "Authentication Failed!",
          icon: "error",
          text: status.isLocked
            ? "Too many failed attempts. Please wait."
            : `Invalid credentials. ${status.remainingAttempts} attempts remaining.`,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Authentication Failed!",
        icon: "error",
        text: "Something went wrong",
      });
    }
  };

  // Format countdown timer
  const formatCountdown = () => {
    if (!countdown) return null;
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Lockout Alert */}
      {isLocked && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`p-3 rounded-lg ${theme === "light" ? "bg-red-100" : "bg-red-900/30"} border ${
            theme === "light" ? "border-red-200" : "border-red-700"
          } flex items-start gap-3`}
        >
          <FaLock className={`mt-1 flex-shrink-0 ${errorColor}`} />
          <div>
            <p className={`font-medium ${errorColor}`}>Account Locked</p>
            <p className={`text-sm ${theme === "light" ? "text-red-600" : "text-red-300"}`}>
              Try again in {formatCountdown()}.
            </p>
          </div>
        </motion.div>
      )}

      {/* Remaining Attempts Alert */}
      {remainingAttempts !== null && remainingAttempts > 0 && !isLocked && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`p-3 rounded-lg ${theme === "light" ? "bg-amber-100" : "bg-amber-900/30"} border ${
            theme === "light" ? "border-amber-200" : "border-amber-700"
          } flex items-start gap-3`}
        >
          <FaLockOpen
            className={`mt-1 flex-shrink-0 ${theme === "light" ? "text-amber-600" : "text-amber-400"}`}
          />
          <div>
            <p
              className={`font-medium ${theme === "light" ? "text-amber-700" : "text-amber-300"}`}
            >
              {remainingAttempts} attempt{remainingAttempts !== 1 ? "s" : ""} remaining
            </p>
            <div className="bg-gray-200 mt-2 rounded-full w-full h-1.5">
              <div
                className={`h-1.5 rounded-full ${theme === "light" ? "bg-amber-500" : "bg-amber-400"}`}
                style={{ width: `${(remainingAttempts / 3) * 100}%` }} // Assuming max is 3
              ></div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Email Field */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="group relative"
      >
        <FaEnvelope className="top-1/2 left-4 absolute text-[#F9F51A] -translate-y-1/2" />
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
          className={clsx(
            "py-3 pr-4 pl-12 rounded-xl focus:outline-none w-full transition-all duration-300 placeholder-gray-500",
            textColor,
            bgInput,
            accentColor
          )}
          placeholder="Enter Email"
          disabled={isLocked}
        />
        {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email?.message}</p>}
      </motion.div>

      {/* Password Field */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        className="group relative"
      >
        <FaLock className="top-1/2 left-4 absolute text-[#F9F51A] -translate-y-1/2" />
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          className={clsx(
            "py-3 pr-4 pl-12 rounded-xl focus:outline-none w-full transition-all duration-300 placeholder-gray-500",
            textColor,
            bgInput,
            accentColor
          )}
          placeholder="Enter Password"
          disabled={isLocked}
        />
        {errors.password && <p className="mt-1 text-red-500 text-xs">{errors.password?.message}</p>}
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={
          !isLocked
            ? {
                scale: 1.05,
                boxShadow: "0 0 25px rgba(249, 245, 26, 0.8)",
              }
            : {}
        }
        className={clsx(
          "py-3 rounded-xl w-full font-bold transition-all duration-300",
          isLocked
            ? "bg-gray-400 text-gray-600 cursor-not-allowed"
            : "bg-[#F9F51A] text-black hover:text-[#8d8d7b]"
        )}
        disabled={isLocked}
      >
        {isLocked ? `Locked (${formatCountdown()})` : "Log In Now"}
      </motion.button>
    </form>
  );
}