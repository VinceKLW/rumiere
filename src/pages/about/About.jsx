import React, { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import atifa from '../../assets/atifa_headshot.jpeg'
import dropdown from '../../assets/dropdown.png'
const SlimmerBox = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-customColor rounded-2xl shadow-lg w-full py-5 px-10 mt-5 cursor-pointer transition-all duration-300"
    >
      <div className="flex justify-between items-center mb-3">
        <p className="text-xl font-light text-left">{question}</p>
        <img
          src={dropdown}
          alt="dropdown icon"
          className={`w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Animated answer section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-base text-gray-600 pt-2">
          {answer}
        </p>
      </div>
    </div>
  );
};


function About() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-12 px-6 py-10 pt-15 transition-all duration-500">
      {/* Left - Headshot */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center h-full">
          <img
            src={atifa}
            className="rounded-full border-white border-10 drop-shadow-2xl h-125 w-125  object-cover mr-0 lg:mr-20"
            alt="Atifa headshot"
          />
          <div className='mt-5 mr-0 lg:mr-20'>
            <p className='mt-4 text-center text-lg font-medium'>Atifa Barat</p>
            <p className='text-center text-lg font-light mt-'>- hey guys!</p>
          </div>
        </div>


      {/* Right - Content */}
      <div className="max-w-[700px] w-full">
        {/* About box */}
        <div className="bg-customColor rounded-2xl shadow-lg w-full p-10 mb-5">
          <p className="text-4xl font-medium text-left mb-4">
            A bit about myself!
          </p>
          <p className="whitespace-pre-line">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco 
            
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ineprehenderit in voluptate velit esse cillum dolore
             
            eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </p>
        </div>

        {/* Slimmer boxes */}
        <SlimmerBox
          question="What inspired me to pursue this career?"
          answer="I've always had a passion for problem-solving and creativity. That naturally led me toward this field."
        />

        <SlimmerBox
          question="Where am I from?"
          answer="I'm originally from [Your City or Country], and my background has strongly shaped who I am today."
        />

        <SlimmerBox
          question="What are my next steps?"
          answer="I'm focused on growing my skills, taking on meaningful projects, and continuing to learn every day."
        />
      </div>
    </div>
  )
}

export default About
