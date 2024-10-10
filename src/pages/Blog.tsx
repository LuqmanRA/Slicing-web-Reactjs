import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import Hiro from "../components/Blog/Hiro";
import ContentBlog from "../components/Blog/ContentBlog";
import ButtonToTop from "../components/Blog/ButtonToTop";

const Blog = () => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.6 });

  return (
    <>
      <Header
        position="absolute"
        classname={section1InView ? "text-white" : "text-black "}
        color={
          section1InView ? "group-hover:text-black" : "group-hover:text-white"
        }
        bg={section1InView ? "bg-white" : "bg-black"}
      />
      <main>
        <Hiro />
        <ContentBlog />
        <ButtonToTop />
      </main>
      <div ref={section1Ref}>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
