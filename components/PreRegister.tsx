import React, { useState } from "react";
import {
  CircleNotchIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
const PreRegister = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    const formData = new URLSearchParams();
    formData.append("pre-register-mail", email);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycb.../exec",
        {
          method: "POST",
          body: formData.toString(),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        }
      );

      if (response.ok) {
        console.log("Success!");
        setSuccess(true);
        setShowToast(true);
        localStorage.setItem("MHNEmailFormSubmitted", "true");

        setTimeout(() => {
          setEmail("");
          setShowToast(false);
          setSuccess(false);
        }, 3000);
      } else {
        console.error("Submission failed");
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <label htmlFor="home-mail" className="text-sm text-gray-700">
        Subscribe to our Newsletter
      </label>
      <form
        onSubmit={handleEmailSubmit}
        className="relative w-full max-w-xs mb-6"
      >
        <input
          autoComplete="off"
          id="home-mail"
          name="home-mail"
          type="email"
          placeholder="Enter your email"
          className="border-2 border-gray-500 rounded px-4 py-2 w-full pr-10 text-sm"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black"
          aria-label="Submit email"
          disabled={loading}
        >
          {loading ? (
            <CircleNotchIcon size={20} weight="bold" className="animate-spin" />
          ) : success ? (
            <CheckIcon size={20} weight="bold" />
          ) : (
            <ArrowRightIcon size={20} weight="bold" />
          )}
        </button>
      </form>
    </div>
  );
};

export default PreRegister;
