import Card from '../UI/Card';
import { cards } from '../../data';
const Work = () => {
   return (
      <section id="Work">
         <div className="container">
            <h2>Things I’ve build</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
               {cards.map(
                  ({ id, title, description, gitHub, tools, liveUrl }) => (
                     <Card
                        key={id}
                        title={title}
                        description={description}
                        tools={tools}
                        liveUrl={liveUrl}
                        gitHub={gitHub}
                     />
                  )
               )}
            </div>
         </div>
      </section>
   );
};

export default Work;
