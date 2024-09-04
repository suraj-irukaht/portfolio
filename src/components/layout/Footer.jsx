import { IoLogoBehance } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
   return (
      <footer className="py-12">
         <div className="container">
            <span className="text-center block">
               Designed and developed by Suraj Shahi
            </span>
            <ul className="flex gap-4 items-center justify-center mt-6 text-xl text-dark">
               <li>
                  <a
                     className="hover:text-primary"
                     href="https://www.behance.net/surajshahi1"
                     target="_blank"
                  >
                     <IoLogoBehance />
                  </a>
               </li>
               <li>
                  <a
                     className="hover:text-primary"
                     href="https://github.com/suraj-irukaht"
                     target="_blank"
                  >
                     <FaGithub />
                  </a>
               </li>
               <li>
                  <a
                     className="hover:text-primary"
                     href="mailto:&#115;&#117;&#114;&#097;&#106;&#115;&#104;&#097;&#104;&#105;&#051;&#051;&#049;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                  >
                     <IoMail />
                  </a>
               </li>
               <li>
                  <a
                     className="hover:text-primary"
                     href="https://www.linkedin.com/in/suraj-shahi-455b7a206/"
                  >
                     <FaLinkedin />
                  </a>
               </li>
            </ul>
         </div>
      </footer>
   );
};

export default Footer;
