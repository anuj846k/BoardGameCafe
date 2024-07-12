import  { useState, useEffect } from 'react';
import Logo from "../../assets/img/sip_and_play_logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`w-full fixed top-0 z-50 transition duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-transparent'} 
                   ${isScrolled ? 'text-white' : 'text-gray-800'} 
                   ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
          <img className="w-12 h-12" alt="logo" src={Logo} />
            {/* <h1 className="text-lg font-bold">Logo</h1> */}
          </div>
          <div className="hidden md:flex">
            <ul className="ml-4 flex space-x-4 font-semibold">
              <li><a href="#" className={`hover:${isScrolled ? 'text-gray-300' : 'text-gray-800'}`}>Home</a></li>
              <li><a href="#" className={`hover:${isScrolled ? 'text-gray-300' : 'text-gray-800'}`}>Events</a></li>
              <li><a href="#" className={`hover:${isScrolled ? 'text-gray-300' : 'text-gray-800'}`}>Menu</a></li>
              <li><a href="#" className={`hover:${isScrolled ? 'text-gray-300' : 'text-gray-800'}`}>Reservation</a></li>
              <li><a href="#" className={`hover:${isScrolled ? 'text-gray-300' : 'text-gray-800'}`}>Boardgames</a></li>
            </ul>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-400 hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${isScrolled ? 'bg-gray-800' : 'bg-['}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-700 hover:text-white`}>Home</a>
            <a href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-700 hover:text-white`}>Events</a>
            <a href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-700 hover:text-white`}>Menu</a>
            <a href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-700 hover:text-white`}>Reservation</a>
            <a href="#" className={`block px-3 py-2 rounded-md text-base font-medium ${isScrolled ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-700 hover:text-white`}>Boardgames</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
