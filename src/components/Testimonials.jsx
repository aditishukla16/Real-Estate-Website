import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Real Stories from Those Who Found Home with Us
      </p>

      {/* ✅ teeno block ek line me square shape me */}
      <div className='flex justify-center gap-8 flex-wrap lg:flex-nowrap'>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className='w-[300px] h-[300px] border shadow-lg rounded-2xl p-6 text-center bg-white flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300'
          >
            <img
              className='w-20 h-20 rounded-full mb-4 object-cover'
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className='font-semibold text-lg'>{testimonial.name}</h2>
            <p className='text-gray-500 text-sm mb-2'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-2'>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt='star' className='w-4 h-4' />
              ))}
            </div>
            <p className='text-gray-600 text-sm italic'>" {testimonial.text} "</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials

