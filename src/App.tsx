import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Getintouch from "./pages/Getintouch";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-in-touch" element={<Getintouch />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
