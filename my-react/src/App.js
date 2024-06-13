
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Layout from './Pages/Layout';
import Nopage from './Pages/Nopage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Home/>
    <Services/>
    <About/>
    <Contact/> */}
         <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
