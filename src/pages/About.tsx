import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import AboutHero from "../components/About/AboutHero";
import CompaniesHire from "../components/About/CompaniesHire";
import Achievements from "../components/About/Achievements";
import Skills from "../components/About/Skills";
import Client from "../components/About/Clients";
import Showcase from "../components/About/Showcase";

const About = () => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.6 });

  return (
    <>
      <Header
        classname={section1InView ? "text-white" : "text-black "}
        color={
          section1InView ? "group-hover:text-black" : "group-hover:text-white"
        }
        bg={section1InView ? "bg-white" : "bg-black"}
      />
      <main className="flex flex-col gap-y-14 lg:gap-y-20 2xl:gap-y-[120px]">
        <AboutHero />
        <CompaniesHire />
        <Achievements />
        <Skills />
        <Client />
        <Showcase />
      </main>
      <div ref={section1Ref}>
        <Footer />
      </div>
    </>
  );
};

export default About;
