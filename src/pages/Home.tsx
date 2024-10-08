import HeroSection from "../components/home/HeroSection";
import ParallaxVideoSection from "../components/ParallaxVideoSection";
import Solutions from "../components/home/SolutionsSection";
import Header from "../components/Header/Header";
import WorkSection from "../components/home/WorkSection";
import SkillsSection from "../components/home/SkillsSection";
import ClientsSection from "../components/home/ClientsSection";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.6 });

  return (
    <>
      <Header
        position="fixed"
        classname={
          section1InView || section2InView ? "text-white" : "text-black "
        }
        color={
          section1InView || section2InView
            ? "group-hover:text-black"
            : "group-hover:text-white"
        }
        bg={section1InView || section2InView ? "bg-white" : "bg-black"}
      />
      <main>
        <HeroSection />
        <ParallaxVideoSection image="https://cms.shakuro.com/media/Shakuro Home Page Video_mp4.mp4" />
        <Solutions />
        <WorkSection />
        <div ref={section1Ref}>
          <SkillsSection />
        </div>
        <ClientsSection />
      </main>
      <div ref={section2Ref}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
