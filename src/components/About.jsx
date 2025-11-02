import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="About"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">
          About{" "}
          <span className="underline underline-offset-4 decoration-blue-500 font-light">
            Our Brand
          </span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Passionate about properties, dedicated to your vision.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image */}
        <motion.img
          src={assets.brand_img}
          alt="Luxury Homes"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full sm:w-1/2 max-w-md rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-gray-700">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 w-full">
            {[
              { value: "10+", label: "Years of Excellence" },
              { value: "12+", label: "Completed Projects" },
              { value: "20+", label: "Mn. Sq. Ft. Delivered" },
              { value: "25+", label: "Ongoing Developments" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <p className="text-4xl font-semibold text-gray-900">
                  {item.value}
                </p>
                <p className="text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="my-10 max-w-lg text-center md:text-left leading-relaxed text-gray-600"
          >
            We believe a home is more than just a place to live — it’s a story
            of who you are and what you value. Over the years, we’ve built
            lasting spaces that combine elegant architecture, modern innovation,
            and timeless design.
          </motion.p>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-3 rounded-lg font-medium shadow-md hover:shadow-blue-400/50 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
