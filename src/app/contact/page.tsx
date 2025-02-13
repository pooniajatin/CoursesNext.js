"use client";
import React, { useState } from "react";
import { AuroraBackground } from "../../components/ui/aurora-background";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <AuroraBackground className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-white mb-12">Contact Us</h1>
        <div className="bg-gray-800 text-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuroraBackground>
  );
}

export default ContactPage;