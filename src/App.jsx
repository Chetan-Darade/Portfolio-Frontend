import Nav from './Sections/Nav';
import IntroSection from './Sections/IntroSection';
import About from './Sections/About';
import Skill from './Sections/Skill';
import Projects from './Sections/Projects';
import ProfessionalExp from './Sections/ProfessinalExp';
import Contact from './Sections/Contact';
import Footer from './Sections/Footer';
// import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <div className='bg-gray-900 bg-fixed min-h-screen'>
    <Nav/>
    <IntroSection/>
    <About/>
    <Skill/>
    <Projects/>
    <ProfessionalExp/>
    <Contact/>
    <Footer/>
    {/* <HeroSection/> */}
</div>
  );
}
