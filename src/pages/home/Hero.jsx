import React, { useEffect, useState } from 'react';
import atifa from '../../assets/atifa_headshot.jpeg';
import background from '../../assets/hero_background.png';
import experience from '../../assets/experience.png';
import { Link } from 'react-router-dom';

function Hero() {
  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth >= 1024);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="bg-customColor min-h-screen flex flex-col justify-start px-4 lg:px-6 py-12 lg:py-16"
      style={
        isLargeScreen
          ? {
              backgroundImage: `url(${background})`,
              backgroundPosition: 'center -440px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
          : {}
      }
    >
      {/* Top Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
        {/* Text */}
        <div className="text-center lg:text-left max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg leading-tight text-[color:#4E3B2D] lg:text-white">
            PERSONAL BLOG &<br /> SKINCARE JOURNEY.
          </h1>

          <p className="whitespace-pre-line custom-font custom-fontColor2 drop-shadow-lg text-base sm:text-lg md:text-xl">
            {'Follow along as I share my journey, expert tips, and everything \nI’m learning about skincare, beauty, and self-care.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <Link to="/aboutme">
              <button className="bg-customColor2 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 cursor-pointer w-full sm:w-auto">
                Read About Me
              </button>
            </Link>

            <Link to="/contact">
              <button className="bg-customColor custom-fontColor2 font-semibold py-3 px-10 rounded-full shadow-md transition duration-300 cursor-pointer w-full sm:w-auto">
                Contact Me!
              </button>
            </Link>
          </div>
        </div>

        {/* Headshot */}
        <img
          src={atifa}
          alt="Atifa headshot"
          className="rounded-full border-white border-8 drop-shadow-2xl w-48 h-48 sm:w-90 sm:h-90 lg:w-80 lg:h-80 object-cover"
        />
      </div>

      {/* Experience Image – Now closer */}
      <div className="flex items-center justify-center mt-15 lg:mt-40 px-4">
        <img
          src={experience}
          alt="Experience timeline"
          className="w-full max-w-3xl object-contain"
        />
      </div>
    </div>
  );
}

export default Hero;
