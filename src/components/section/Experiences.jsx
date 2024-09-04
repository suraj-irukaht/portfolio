import { experiences } from '../../data';
import { FaRegCircleDot } from 'react-icons/fa6';
const Experiences = () => {
   const { title, lists } = experiences;

   return (
      <section id="Experiences">
         <div className="container">
            <h2 className="text-3xl lg:text-4xl">{title}</h2>
            <div>
               {lists?.map(
                  ({ id, title, bullets, employee, period }, index) => (
                     <div
                        key={id}
                        className={`${
                           index === lists.length - 1 ? 'mb-0' : 'mb-12'
                        }`}
                     >
                        <h3 className="text-primary uppercase border-l-8 border-l-primary pl-5 py-3 mb-8">
                           {employee}
                        </h3>
                        <div className={`pl-6 `}>
                           <h4 className="mb-4 text-dark">{title}</h4>
                           <h5 className="font-normal text-sm mb-4">
                              {period}
                           </h5>
                           <ul className={`space-y-4 max-w-[700px] pb-4`}>
                              {bullets?.map((bullet, index) => (
                                 <li className="flex items-start" key={index}>
                                    <FaRegCircleDot className="text-primary mr-4 shrink-0 mt-[6px]" />
                                    {bullet}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  )
               )}
            </div>
         </div>
      </section>
   );
};

export default Experiences;
