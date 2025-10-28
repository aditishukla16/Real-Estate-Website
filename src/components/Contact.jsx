import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e40ceecf-0c4f-496c-8a82-6f3e2bb28152");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
       alert('Form Submitted Successfully')
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult('');
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact</h1>
      <span className='block text-lg mb-2'>With Us</span>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Ready to make a Move? Let's Build Your Future together
      </p>

      <form onSubmit={onSubmit} className='max-w-3xl mx-auto text-gray-600 pt-8'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex-1 text-left'>
            <label className='block mb-2 font-medium'>Your Name</label>
            <input
              className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black-400'
              type='text'
              name='Name'
              placeholder='Your Name'
              required
            />
          </div>

          <div className='flex-1 text-left'>
            <label className='block mb-2 font-medium'>Your Email</label>
            <input
              className='w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-black-400'
              type='email'
              name='Email'
              placeholder='Your Email'
              required
            />
          </div>
        </div>

        <div className='my-6 text-left'>
            Message  
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name=" Message " placeholder=' Message 'required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10'>
            {result ? result:"Send Message"}
        </button>
      </form>
    </div>
  )
}

export default Contact
