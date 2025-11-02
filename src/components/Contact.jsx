import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "e40ceecf-0c4f-496c-8a82-6f3e2bb28152");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      toast.error(data.message || "Something went wrong!");
      setResult("");
    }
  };

  return (
    <motion.section
      id="Contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-20 lg:px-32 text-center bg-gradient-to-b from-white to-gray-50 w-full overflow-hidden"
    >
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
          Contact <span className="text-black">with us</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-lg mx-auto">
          Ready to take the next step? Let’s bring your vision to life — we’d
          love to hear from you!
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto text-gray-700 bg-white p-8 rounded-2xl shadow-md"
      >
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Name Field */}
          <div className="flex-1 text-left">
            <label className="block mb-2 font-medium text-gray-700">
              Your Name
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              name="Name"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex-1 text-left">
            <label className="block mb-2 font-medium text-gray-700">
              Your Email
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="email"
              name="Email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="text-left mb-8">
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg py-3 px-4 h-44 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            name="Message"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium px-10 py-3 rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
          {result ? result : "Send Message"}
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
