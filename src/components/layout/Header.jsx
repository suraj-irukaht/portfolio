import { navLinks } from '../../data';
import logo from '../../assets/logo.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeFill } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [headerHeight, setHeaderHeight] = useState(0);
   const headerRef = useRef(null);

   useEffect(() => {
      if (headerRef.current) {
         setHeaderHeight(headerRef.current.offsetHeight);
      }
   }, [headerRef.current]);

   const handleClick = (e) => {
      e.preventDefault();
      const elementOffsetTop = document.querySelector(
         e.target.getAttribute('href')
      ).offsetTop;
      window.scrollTo({
         left: 0,
         top: elementOffsetTop - headerHeight,
         behavior: 'smooth',
      });
      setIsMenuOpen(false);
   };

   return (
      <header
         ref={headerRef}
         className="py-4 fixed top-0 left-0 w-full z-50 backdrop-opacity-10 bg-white/80"
      >
         <div className="px-4 xl:px-10 flex items-center justify-between gap-10">
            <a href="/" aria-label="logo">
               <img src={logo} alt="main logo" />
            </a>
            <nav
               className={`nav fixed inset-0 h-screen bg-gradient-to-b from-white to-secondary transition-transform duration-300 ease-in-out p-4 ${
                  isMenuOpen ? 'translate-x-0' : 'translate-x-full'
               } lg:static lg:bg-none lg:p-0 lg:h-auto lg:translate-x-0`}
            >
               <a
                  href="#"
                  className="text-2xl absolute right-4 top-4 lg:hidden"
                  onClick={(e) => {
                     e.preventDefault();
                     setIsMenuOpen(false);
                  }}
               >
                  <RiCloseLargeFill />
               </a>
               <ul className="lg:flex lg:items-center lg:gap-4 text-center space-y-4 pt-10 lg:space-y-0 lg:pt-0">
                  {navLinks.map(({ id, title, url }, index) => (
                     <li key={id}>
                        <a
                           href={`${
                              id === navLinks.length ? url : `#${title}`
                           }`}
                           className={`${
                              id === navLinks.length
                                 ? 'btn normal-case py-1.5 px-4 bg-primary text-white hover:bg-transparent hover:text-primary'
                                 : 'hover:text-primary'
                           }`}
                           onClick={
                              index === navLinks.length - 1
                                 ? null
                                 : (e) => handleClick(e)
                           }
                        >
                           {title}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
            <a
               href="#"
               className="lg:hidden"
               onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(true);
               }}
            >
               <RxHamburgerMenu className="text-3xl" />
            </a>
         </div>
      </header>
   );
};

export default Header;
