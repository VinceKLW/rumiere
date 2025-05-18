import React from 'react';
import linkedin from '../../assets/linkedin_logo.png';
import instagram from '../../assets/instagram_logo.png';

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 py-6 flex flex-col items-center justify-center text-black z-40 mt-10">
    <div className="flex items-center gap-4 mb-2">
      <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADvORZgBUi9ed_rqbCA4OGWz9tcayhD17ik&keywords=atifa%20barat&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=27abcf58-4903-40f7-86cb-f9e0cedadc18&sid=q%2Cr&spellCorrectionEnabled=true" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" className="w-12 h-8 hover:scale-110 transition-transform" />
      </a>
      <a href="https://www.instagram.com/atifaabaratt/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram" className="w-12 h-8 hover:scale-110 transition-transform" />
      </a>
    </div>
    <div className="text-sm custom-font text-gray-500">&copy; {new Date().getFullYear()} Rumiere. All rights reserved.</div>
  </footer>
);

export default Footer;
