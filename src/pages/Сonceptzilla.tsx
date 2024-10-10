import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import Hiro from "../components/Conceptzilla/Hiro";
import ParallaxVideoSection from "../components/ParallaxVideoSection";
import Time from "../components/Conceptzilla/Time";
import Results from "../components/Conceptzilla/Results";
import Timeline from "../components/Conceptzilla/Timeline";
import Addons from "../components/Conceptzilla/Addons";
import Questions from "../components/Conceptzilla/Questions";

const Conceptzilla = () => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.6 });

  return (
    <>
      <Header
        position="fixed"
        classname={section1InView ? "text-white" : "text-black "}
        color={
          section1InView ? "group-hover:text-black" : "group-hover:text-white"
        }
        bg={section1InView ? "bg-white" : "bg-black"}
      />
      <main>
        <Hiro />
        <ParallaxVideoSection image="https://cms.shakuro.com/media/CZ_Main_Compress.mp4" />
        <Time />
        <Results />
        <Timeline />
        <Addons />
        <Questions />
      </main>
      <div ref={section1Ref}>
        <Footer />
      </div>
    </>
  );
};

export default Conceptzilla;
