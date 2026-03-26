
import Hero from "../components/Hero";
import H1 from "../components/rcom";
import Fet from "../components/cards";
import Fot from "../components/fot.tsx";

import Gallery from '../components/gallery.tsx';
import FAQ from "../components/FAQ";
import Loop from "../components/Loop";



export default function Home() {
  return (
    <div className="bg-black">
      
      <Hero />

       <Loop />
     

      <H1/>
         <Fet />


<div className="w-full flex justify-center items-center ">
  <div className="w-full  h-[500px]">
    <Gallery
      fit={0.6}
      minRadius={300}
      
      maxVerticalRotationDeg={0}
      segments={18}
      dragDampening={3}
        grayscale={false}
    />
  </div>
</div>

     
      
      <FAQ />
            <Fot />
    </div>
  );
}
