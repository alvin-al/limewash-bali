import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import backgroundImage from "./assets/limewash-bg.png";
import limewashLogo from "./assets/limewash-logo.svg";
import { FaInstagramSquare } from "react-icons/fa";
import Form from "./component/Form.jsx";
import BenefitList from "./component/BenefitList.jsx";

function App() {
  return (
    <div>
      {/* Section 1 */}
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className='pb-6 lg:h-screen bg-cover '
      >
        {/* Navbar */}
        <div className='flex justify-between w-full p-4 lg:px-24'>
          {/* Logo */}
          <div>
            <img src={limewashLogo} alt='' className='' />
          </div>
          <div>
            <a
              href='
https://www.instagram.com/limewashbali/'
            >
              <FaInstagramSquare className='w-10 h-10 fill-white' />
            </a>
          </div>
        </div>

        <div className='w-full flex flex-col items-center px-6 lg:flex-row lg:px-24 lg:py-0 lg:items-center h-full'>
          {/* Teks */}
          <div className='flex text-center py-24 w-full lg:text-left md:mx-32 lg:mx-0 lg::w-1/2'>
            <p className='text-3xl font-light italic text-[#3A3A3A] xl:pr-32 lg:leading-tight lg:w-3/4 lg:text-4xl'>
              Looking for eco-friendly, easy to apply paint for domestic or
              commercial application that also offers a unique aesthetic finish?
            </p>
          </div>
          {/* Form */}
          <Form />
        </div>
      </div>
      {/* Section 2 */}
      <div className='py-6'>
        <h2 className='text-4xl font-bold text-center text-[#3A3A3A] mb-12'>
          Why Limewash?
        </h2>
        <div className='flex  items-center lg:px-24'>
          <BenefitList />
        </div>
      </div>
    </div>
  );
}

export default App;
