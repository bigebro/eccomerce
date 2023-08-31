// components/Header/Header.js
import React from "react";
// import { Logo, NavigationLinks } from './'; // Import from the index.js file
import about from "../../images/svg/about.svg";
import contact from "../../images/svg/contact.svg";
import faq from "../../images/svg/faq.svg";

const Header = () => {
  return (
   
    <div className=" py-3 text-white bg-pink text-xs ">
      <div className="flex justify-between container max-w-[1300px] mx-auto">
        <div className="left px-5"><a href="tel:+01 023 345 678" className="text-[13px]"><span className="text-grayWhite mr-[7px]">HOTLINE:</span>+01 023 345 678</a></div>
        <div className="right px-5 flex">
          <div className="about-brand flex items-center mr-3">   
            <a className="mr-1" href="/"><img className="w-4 h-4" src={about}/></a>About Brand </div>
          <div className="faq flex items-center mr-3 ">   
            <a className="mr-1" href="/"><img  className="w-4 h-4" src={faq}/></a>Faq</div>
          <div className="contact flex items-center">   
            <a className="mr-1" href="/"><img  className="w-4 h-4" src={contact}/></a>Contact</div>
        </div>
     
      </div>
    </div>
   
  );
};

export default Header;
