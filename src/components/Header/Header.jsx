import React, { useState } from 'react'
import logo from '../../assets/rumiere.png'
import linkedin from '../../assets/linkedin_logo.png'
import instagram from '../../assets/instagram_logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 custom-header flex justify-center items-center text-black md:px-32 drop-shadow-lg h-30 bg-white z-40">
      {/* Wrapper for logo and nav */}
      <div className="flex items-center gap-16">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="logo" className="w-50 hover:scale-110 transition-transform pt-5" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden xl:flex items-center gap-10 font-semibold text-base">
          <li className="group p-3 transition-all cursor-pointer hover:scale-110">
            <Link to="/" className="custom-color custom-font relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:left-0">
              HOME
            </Link>
          </li>
          <li className="group p-3 transition-all cursor-pointer hover:scale-110">
            <Link to="/aboutme" className="custom-color custom-font relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:left-0">
              ABOUT ME
            </Link>
          </li>
          <li className="group p-3 transition-all cursor-pointer hover:scale-110">
            <Link to="/myproducts" className="custom-color custom-font relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:left-0">
              MY PRODUCTS
            </Link>
          </li>
          <li className="group p-3 transition-all cursor-pointer hover:scale-110">
            <Link to="/contact" className="custom-color custom-font relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full group-hover:after:left-0">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile menu icon */}
      <div className="xl:hidden absolute right-8">
        <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-5xl cursor-pointer`} onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-2 font-semibold text-lg shadow-md xl:hidden z-50 border-t border-gray-200">
          <Link to="/" className="w-full" onClick={() => setIsMenuOpen(false)}>
            <li className="list-none custom-color custom-font group p-3 transition-all cursor-pointer hover:scale-110 text-center">HOME</li>
          </Link>
          <Link to="/aboutme" className="w-full" onClick={() => setIsMenuOpen(false)}>
            <li className="list-none custom-color custom-font group p-3 transition-all cursor-pointer hover:scale-110 text-center">ABOUT ME</li>
          </Link>
          <Link to="/myproducts" className="w-full" onClick={() => setIsMenuOpen(false)}>
            <li className="list-none custom-color custom-font group p-3 transition-all cursor-pointer hover:scale-110 text-center">MY PRODUCTS</li>
          </Link>
          <Link to="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
            <li className="list-none custom-color custom-font group p-3 transition-all cursor-pointer hover:scale-110 text-center">CONTACT</li>
          </Link>
        </div>
      )}
      <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADvORZgBUi9ed_rqbCA4OGWz9tcayhD17ik&keywords=atifa%20barat&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=27abcf58-4903-40f7-86cb-f9e0cedadc18&sid=q%2Cr&spellCorrectionEnabled=true"
        className="hidden sm:inline-block"
      >
        <img src={linkedin} alt="linkedin" className="w-12 h-8 ml-18" />
      </a>

      <a href="https://www.instagram.com/atifaabaratt/" className="hidden sm:inline-block">
        <img src={instagram} alt="instagram" className="w-12 h-8" />
      </a>
    </header>
  )
}

export default Header