import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import backgroundImage from './assets/limewash-bg.png'
import limewashLogo from './assets/limewash-logo.svg'
import { FaInstagramSquare } from "react-icons/fa";
import Form from './component/Form.jsx'
import BenefitList from './component/BenefitList.jsx'

function App() {

  return (
    <div>
      {/* Section 1 */}
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className='pb-6'>
        <div className='flex justify-between w-full p-4 '>
          {/* Logo */}
          <div>
            <img src={limewashLogo} alt="" className='' />
          </div>
          <div>
            <a href="/"><FaInstagramSquare className='w-9 h-9 fill-white' /></a>
          </div>
        </div>
        {/* Teks */}
        <div className='flex text-center my-24 mx-6' >
          <p className='text-2xl'>Looking for eco-friendly, easy to apply paint for domestic or commercial application that also offers a unique aesthetic finish?</p>
        </div>
        <Form />
      </div>
      {/* Section 2 */}
      <div className='py-6'>
        <h2 className='text-4xl font-bold text-center text-[#3A3A3A] mb-12'>Why Limewash?</h2>
        <div className=''>
          <BenefitList />
        </div>
      </div>
    </div>
  )
}

export default App
