// components/sections/ContactForm.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  // In a real application, you would add useState for form inputs
  const [status, setStatus] = useState<string>("idle");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  // and an onSubmit handler to send the data.
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    const formData = {
        name: name,
        email: email,
        message: message,
    }
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            setStatus("success");
            setName("");
            setEmail("");
            setMessage(""); 
        } else {
            setStatus("error");
        }
    } catch (error) {
        setStatus("error");
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
      // You can add animations to the form itself
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#333]"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#333]"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-[#333]"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#333] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#444] focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Send Message
          {status === "sending" && (
            <span className="ml-2">
              <FaSpinner className="animate-spin" />
            </span>
          )}
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;