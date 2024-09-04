import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import About from './components/section/About';
import Banner from './components/section/Banner';
import Contact from './components/section/Contact';
import Experiences from './components/section/Experiences';
import Work from './components/section/Work';
const App = () => {
   return (
      <div className="min-h-screen overflow-clip relative">
         <Header />
         <main>
            <Banner />
            <About />
            <Experiences />
            <Work />
            <Contact />
         </main>
         <Footer />
      </div>
   );
};

export default App;
