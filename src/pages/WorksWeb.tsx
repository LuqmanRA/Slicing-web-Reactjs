import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import Web from "../components/Works/Web";
const WorksWeb = () => {
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
        <Web />
      </main>
      <div ref={section1Ref}>
        <Footer />
      </div>
    </>
  );
};

export default WorksWeb;
