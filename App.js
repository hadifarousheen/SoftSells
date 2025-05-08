import React from "react";
import ReactDOM from "react-dom/client";
import HeroSection from "./src/components/HeroSection";
import Work from "./src/components/Work";
import Choose from "./src/components/Choose";
import Testimonals from "./src/components/Testimonals";
import Contact from "./src/components/Contact";

const root=ReactDOM.createRoot(document.getElementById('root'));

const App=()=>{
    return(
        <div>
      <HeroSection/>
      <Work/>
      <Choose/>
      <Testimonals/>
      <Contact/>
        </div>
    )
}

root.render(<App/>);