import ContactForm from "./ContactForm";
import Experience from "./Experience";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Skills from "./Skills";

function App() {
  return (
    <div className="font-pop m-[15px] lg:m-[25px] ">
      <NavBar />
      <hr className="bg-[#ffd60a] rounded border-0  h-[1px] m-[10px] lg:m-[20px]" />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <ContactForm />
      <hr className="border-0" />
      <hr className="border-0" />
      <hr className="border-0" />
      <hr className="border-0" />
      <hr className="border-0" />
      <hr className="border-0" />
      <hr className="bg-[#ffd60a] rounded border-0  h-[0.5px] m-[10px] lg:m-[20px]" />
      <Footer />
    </div>
  );
}

export default App;
