import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("mzzbpbze"); // ganti dengan endpoint Formspree lo
  if (state.succeeded) {
    return (
      <div className='w-full flex items-center justify-center p-8 backdrop-blur-2xl rounded-xl overflow-hidden md:w-[75%] xl:w-5/6'>
        <div className='w-full max-w-lg rounded h-m-52 md:h-96 text-center'>
          <h2 className='text-3xl font-bold mb-6 text-gray-800 text-center lg:text-4xl inter'>
            Thanks for contacting us!
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full flex items-center justify-center p-8 backdrop-blur-2xl rounded-xl overflow-hidden md:w-[75%] xl:w-5/6'>
      <form onSubmit={handleSubmit} className='w-full max-w-lg rounded'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800 text-center lg:text-4xl inter'>
          Contact Form
        </h2>

        {/* Name Field */}
        <div className='mb-2'>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='inter rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline'
            placeholder='Name:'
            required
          />
        </div>

        {/* Phone Field */}
        <div className='mb-2'>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className='inter rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline'
            placeholder='Phone number:'
            required
          />
        </div>

        {/* Email Field */}
        <div className='mb-2'>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='inter rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline'
            placeholder='Email:'
            required
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>

        {/* Message Field */}
        <div className='mb-6'>
          <textarea
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='inter rounded-md w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline'
            placeholder='Message:'
            required
          ></textarea>
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>

        {/* Submit Button */}
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='inter bg-[#C06044] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-md w-full'
            disabled={state.submitting}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
