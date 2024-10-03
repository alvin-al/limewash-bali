import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tambahkan logika pengiriman form di sini
        console.log('Form submitted:', { name, phone, email, message });
    };

    return (
        <div className="flex items-center justify-center p-8 backdrop-blur-xl rounded-xl overflow-hidden mx-6">
            <form onSubmit={handleSubmit} className="w-full max-w-lg rounded">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center ">Contact Form</h2>

                {/* Name Field */}
                <div className="mb-2">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                        placeholder="Name:"
                        required
                    />
                </div>

                {/* Phone Field */}
                <div className="mb-2">
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                        placeholder="Phone number:"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="mb-2">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                        placeholder="Email:"
                        required
                    />
                </div>

                {/* Message Field */}
                <div className="mb-6">
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline h-32 resize-none"
                        placeholder="Message:"
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-[#C06044] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
