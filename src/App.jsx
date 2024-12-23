import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramInfo from './components/ProgramInfo';
import Benefits from './components/Benefits';
import CareerSection from './components/CareerSection';
import EnquirySection from './components/enquiry/EnquirySection';
import  Footer  from "./components/Footer"

function App() {
  return (

    <div className="min-h-screen   bg-[#c4d7ff]"
    
    >
      <div className=' p-4 md:p-16'>
      <Navbar />
      <Hero />
      <ProgramInfo />
      <Benefits />
      <CareerSection/>
      </div>
      <EnquirySection/>
      <Footer/>
    </div>
  );
}

export default App;