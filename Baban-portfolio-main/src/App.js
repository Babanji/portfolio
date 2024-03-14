import './App.css';
import About from './components/About';
import Certification from './components/Certification';
import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
      <div id="home" className="container flex items-center  max-w-screen-2xl h-screen">
        <div className="home text-slate-50	 flex flex-col justify-center items-center h-full">
          <div className="text-center lg:text-4xl sm:text-3xl font-normal  p-2 ">
            Hello I'm Baban Mulchandani <br />a full stack developer</div>
          <a href="#navbar" className="ml-1 mt-3  lg:text-xl sm:text-sm cursor-pointer group relative flex gap-1.5 px-4 py-2 border text-white border-white rounded-3xl hover:bg-opacity-70 hover:text-gray-300 transition duration-200 ease-in-out font-semibold shadow-md">View My Work &nbsp;
            <img className="transition-transform duration-200 transform group-hover:rotate-90 Home_glow__CrkWz" height={10} width={20} src="/icons8-right-arrow-50.png" alt="arrow" />
          </a>
        </div>
      </div>
      
      <Navbar/>
      <About/>
      <TechStack/>
      <Projects/>
      <Experience/>
      <Certification/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
