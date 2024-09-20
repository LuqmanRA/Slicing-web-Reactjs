import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Getintouch from "./pages/Getintouch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-in-touch" element={<Getintouch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
