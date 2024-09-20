import Header from "../components/Header";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";

const Getintouch = () => {
  const [section1Ref, section1InView] = useInView({ threshold: 0 });
  return (
    <>
      <Header
        classname={section1InView ? "text-white" : "text-black "}
        color={
          section1InView ? "group-hover:text-black" : "group-hover:text-white"
        }
        bg={section1InView ? "bg-white" : "bg-black"}
      />
      <main ref={section1Ref}>
        <Footer />
      </main>
    </>
  );
};

export default Getintouch;
