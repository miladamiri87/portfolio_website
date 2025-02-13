import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail_project from "./pages/detail_projet";
import All_projects from "./pages/all_projects";
import Navbar from "./pages/navbar";
import About from "./pages/about";

import { useRef } from "react";
import Footer from "./pages/footer";



function App() {
  const scrollToServices = useRef(null);

  return (
    <Router>
      <Navbar scrollToServices={scrollToServices} />
      <Routes>
        <Route path="/portfolio_website" element={<Home scrollToServices={scrollToServices} />} />
        <Route path="/detail_project/:id" element={<Detail_project />} />
        <Route path="/all_projects" element={<All_projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </Router>
  );
}

export default App;
