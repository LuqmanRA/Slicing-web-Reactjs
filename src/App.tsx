import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Getintouch from "./pages/Getintouch";
import Thanks from "./pages/Thanks";
import Works from "./pages/Works";
import About from "./pages/About";
import Conceptzilla from "./pages/Сonceptzilla";
import Blog from "./pages/Blog";
import WorksWeb from "./pages/WorksWeb";
import WorksMobile from "./pages/WorksMobile";
import WorksBranding from "./pages/WorksBranding";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-in-touch" element={<Getintouch />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/conceptzilla" element={<Conceptzilla />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works/web" element={<WorksWeb />} />
          <Route path="/works/mobile" element={<WorksMobile />} />
          <Route path="/works/branding" element={<WorksBranding />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
