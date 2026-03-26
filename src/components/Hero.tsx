import { motion } from "framer-motion";
import BlurText from "./BlurText";
import { ArrowUpRight } from "lucide-react";

import HeroInfoRotator from "./HeroInfoRotator";
import LightPillar from "./Dither"; // ⭐ DITHER IMPORT
const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">

      {/* ⭐ DITHER BACKGROUND (FULLSCREEN) ⭐ */}
     <div className="absolute inset-0 z-10">
  <div className="absolute inset-0">
     <LightPillar
    topColor="#002cdb"
    bottomColor="#938ac1"
    intensity={1}
    rotationSpeed={0.7}
    glowAmount={0.002}
    pillarWidth={3}
    pillarHeight={0.4}
    noiseIntensity={0.5}
    pillarRotation={25}
    interactive={false}
    mixBlendMode="screen"
    quality="high"
/>
  </div>

  {/* ⭐ Aşağıdan yukarı gradient shadow overlay ⭐ */}
  <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
</div>


      {/* İstersen bu eski background efektini silebilirsin */}
      <div className="background absolute inset-0 -z-10">
        {[...Array(31)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

    <BlurText
  text="Enerjinin Geleceğini İnşa Ediyoruz"
  delay={500}
  animateBy="words"
  direction="top"
  className="text-4xl md:text-6xl font-semibold text-center text-white tracking-tight mb-4 px-4 relative z-10 max-w-2xl mx-auto"
/>

      <motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.9 }}
  className="
    text-white/60 text-sm md:text-base 
    max-w-[500px] text-center relative z-10
    px-4 mx-auto mt-2
  "
>
Üretimden dağıtıma kadar uzanan tüm süreçlerde, ileri mühendislik çözümlerimizle sürdürülebilir ve güvenilir enerji altyapıları kuruyoruz.</motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.9 }}
        className="flex items-center justify-center gap-4 mt-8 relative z-10"
      >
       <a href="/hizmetlerimiz">
  <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition shadow-lg flex items-center gap-2">
    Hizmetlerimiz
    <ArrowUpRight className="w-4 h-4" />
  </button>
</a>

<a href="/iletisim">
  <button className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-white text-sm font-medium hover:bg-white/20 transition shadow-lg">
    İletişim
  </button>
</a>

      </motion.div>

      {/* CARD */}
      <HeroInfoRotator />

      
    </section>
  );
};

export default Hero;
