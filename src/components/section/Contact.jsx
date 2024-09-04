import { contact } from '../../data';
const Contact = () => {
   const { title, description } = contact;
   return (
      <section id="Contact">
         <div className="container">
            <div className="text-center max-w-[500px] mx-auto">
               <h2 className="no-decor">{title}</h2>
               <p className="mb-10">{description}</p>
               <a
                  href="mailto:&#115;&#117;&#114;&#097;&#106;&#115;&#104;&#097;&#104;&#105;&#051;&#051;&#049;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
                  className="btn"
               >
                  Contact Me
               </a>
            </div>
         </div>
      </section>
   );
};

export default Contact;
