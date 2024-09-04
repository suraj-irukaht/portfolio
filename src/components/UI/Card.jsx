import { TbBrandVite } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiNextjsLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { VscLinkExternal } from 'react-icons/vsc';
import { FaGithub } from 'react-icons/fa6';
const Card = ({ title, description, tools, liveUrl, gitHub }) => {
   const renderToolIcon = (tool) => {
      switch (tool) {
         case 'Vite':
            return <TbBrandVite />;
         case 'React':
            return <FaReact />;
         case 'TypeScript':
            return <TbBrandTypescript />;
         case 'NextJs':
            return <RiNextjsLine />;
         default:
            return null;
      }
   };
   return (
      <div className="rounded-md p-4 relative border border-secondary flex flex-col">
         <a
            href={liveUrl}
            target="_blank"
            className="absolute top-4 right-4 text-lg"
         >
            <VscLinkExternal />
         </a>
         <h3 className="text-lg mt-6 mb-4 text-secondary">{title}</h3>
         <p className="text-dark/60 mb-4">{description}</p>
         <div className="flex gap-4 justify-between mt-auto">
            <ul className="flex gap-2 flex-wrap text-dark/60">
               {tools?.map((tool, index) => (
                  <li className="text-secondary" key={index}>
                     {renderToolIcon(tool)}
                  </li>
               ))}
            </ul>
            <a href={gitHub}>
               <FaGithub />
            </a>
         </div>
      </div>
   );
};

Card.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   tools: PropTypes.arrayOf(PropTypes.string).isRequired,
   liveUrl: PropTypes.string.isRequired,
   gitHub: PropTypes.string.isRequired,
};

export default Card;
