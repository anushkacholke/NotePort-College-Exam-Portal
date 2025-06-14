import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Notes from "./pages/Notes";
import References from "./pages/References";
import TP from "./pages/TP";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/references" element={<References />} />
          <Route path="/tp" element={<TP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
