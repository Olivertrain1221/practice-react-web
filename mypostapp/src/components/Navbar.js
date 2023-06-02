import React, { useState } from 'react';
import '../maincss/Nav.css'
import '../maincss/tailwind.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-[#131313] h-full">
      <nav className="nav-backing top-2 md:top-[2rem] mx-auto left-1/2 bg-[#131313] sm:max-w-[90rem] sm:px-20">
        <div className="mx-auto  ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 sm:items-stretch justify-around sm:justify-end w-full m-0">
              <div className="flex-shrink-0 items-center mr-auto sm:flex hidden">
                <a href="/">
                  <img className="block h-4 w-auto"
                    src="https://www.goodwood.com/resources/assets/dist/img/logo-x2.png"
                    alt="Goodwood Logo" title="Back to Goodwood.com"></img>
                </a>
              </div>
              <div className="absolute items-center top-[18px] left-[28px] sm:hidden">
                <button type="button" id="mobile-burger" onClick={mobileToggler}
                  className="inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none"
                  aria-controls="mobile-menu" aria-expanded={isMenuOpen ? "true" : "false"}>
                  <span className="sr-only">Open main menu</span>
                  <svg className={`block h-8 w-8 ${isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <svg className={`h-6 w-6 ${isMenuOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 items-center sm:hidden absolute">
                <a href="/">
                  <img className="block h-4 w-auto"
                    src="https://www.goodwood.com/resources/assets/dist/img/logo-x2.png"
                    alt="Goodwood Logo" title="Back to Goodwood.com"></img>
                </a>
              </div>
              <div className="gap-8 flex flex-nowrap">
                <div className={`hidden sm:block ${isMenuOpen ? 'hidden' : ''}`}>
                  <div className="flex space-x-1">
                    <a href="./BrandGuidelines"
                      className="text-white hover:text-gray-300 py-2 pt-3 rounded-md text-sm font-normal uppercase tracking-widest">Brand Guidelines</a>
                  </div>
                </div>
                <div className={`hidden sm:block ${isMenuOpen ? 'hidden' : ''}`}>
                  <div className="flex space-x-1">
                    <a href="./ToneOfVoice"
                      className="text-white hover:text-gray-300 py-2 pt-3 rounded-md text-sm font-normal uppercase tracking-widest">Tone
                      of Voice</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
            <div className={`menu-mb_className bg-[#131313] ${isMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <div className="flex flex-col">
                  <a href="./BrandGuidelines"
                    className="text-white hover:text-gray-300 px-3 py-2 pt-3 text-xs font-semibold uppercase tracking-wider">Brand Guidelines</a>
                  <a href="./ToneOfVoice"
                    className="text-white hover:text-gray-300 px-3 py-2 pt-3 text-xs font-semibold uppercase tracking-wider">Tone
                    of Voice</a>
                </div>
              </div>
            </div>
    </section>
  )
}

export default Navbar;
