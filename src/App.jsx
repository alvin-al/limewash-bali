import { useState } from "react";
import "./App.css";
import instagram from "/src/assets/icons/instagram.svg";
import BenefitList from "./component/BenefitList.jsx";
import Form from "./component/Form.jsx";

function App() {
  return (
    <div>
      {/* Section 1 */}
      <div className='pb-6 lg:h-screen bg-cover bg-top'>
        {/* Navbar */}
        <div className='flex justify-between w-full p-4 lg:px-24'>
          {/* Logo */}
          <div>
            <a href='http://limewashbali.com'>
              <img src='http://limewashbali.com/wp-content/uploads/2024/10/limewash-logo.svg' />
            </a>
          </div>
          <div>
            <a
              href='
https://www.instagram.com/limewashbali/'
              target='_blank'
            >
              <img src={instagram} alt='' className='w-10 h-10 fill-white' />
            </a>
          </div>
        </div>

        <div className='w-full flex flex-col items-center px-6 lg:flex-row lg:px-24 lg:py-0 lg:items-center h-full'>
          {/* Teks */}
          <div className='flex text-center py-24 w-full lg:text-left md:mx-32 lg:mx-0 lg::w-1/2'>
            <p className='text-3xl inter font-light italic text-[#3A3A3A] xl:pr-12 lg:leading-normal lg:w-3/4 lg:text-4xl'>
              Looking for eco-friendly, easy to apply paint for domestic or
              commercial application that also offers a unique aesthetic finish?
            </p>
          </div>
          {/* Form */}
          <Form />
        </div>
      </div>
      {/* Section 2 */}
      <div className='py-6 xl:py-24 bg-cover bg-bot'>
        <h2 className='text-4xl font-bold text-center text-[#3A3A3A] mb-12 xl:mb-24 inter'>
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
