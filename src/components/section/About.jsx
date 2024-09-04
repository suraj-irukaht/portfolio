import { about } from '../../data';
import { FaRegCircleDot } from 'react-icons/fa6';
const About = () => {
   const { title, description, imageUrl, tools } = about;
   return (
      <section id="About">
         <div className="container">
            <h2 className="text-3xl lg:text-4xl">{title}</h2>
            <div className="grid md:grid-cols-2">
               <div className="lg:text-lg mb-10 md:mb-0">
                  {description?.map((data, index) => (
                     <p className="mb-5" key={index}>
                        {data}
                     </p>
                  ))}
                  <p>
                     Here are a few technologies I’ve been working with
                     recently:
                  </p>
                  <ul className="grid grid-cols-2 mt-5 max-w-[400px] text-base">
                     {tools?.map((data, index) => (
                        <li className="flex text-base mb-2" key={index}>
                           <FaRegCircleDot className="text-primary text-sm mr-2 shrink-0 mt-1" />
                           {data}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="max-w-[400px] px-8 md:px-0 md:max-w-none mx-auto md:pl-16 md:pr-6">
                  <div className="relative aspect-square rounded-[15px] md:rounded-[30px] before:content-[''] before:absolute before:w-full before:h-full before:border-2 before:border-primary before:rounded-[15px] before:md:rounded-[30px] before:left-6 before:top-6">
                     <img
                        src={imageUrl}
                        alt="image"
                        className="h-full w-full object-cover object-center rounded-[15px] md:rounded-[30px] relative z-10"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
