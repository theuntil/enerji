// components/BrandsSection.tsx
import LogoLoop from "./LogoLoop";

export default function BrandsSection() {
  const techLogos = [
    { src: "/addidas.png", alt: "logo1", href: "https://adidas.com" },
    { src: "/nike.png", alt: "logo2", href: "https://nike.com" },
    { src: "/paribu.png", alt: "logo3", href: "https://www.paribu.com" },
   
    
    
    { src: "/sephora.png", alt: "logo4", href: "https://sephora.com" },
    { src: "/colins.png", alt: "logo5", href: "https://colins.com" },
    { src: "/dagi.png", alt: "logo6", href: "https://www.dagi.com" },


      { src: "/kigili.png", alt: "logo7", href: "https://kigili.com" },
    { src: "/levis.png", alt: "logo8", href: "https://levis.png" },
    { src: "/ramsey.png", alt: "logo9", href: "https://ramsey.com" },
   
    
  ];

  return (
    <div className="w-full flex justify-center mb-20">
      <div className="w-full md:w-[60%] flex flex-col items-center">
        <h3 className="text-white/70 text-xs mb-4 tracking-wide">
          Referanslarımız
        </h3>

        {/* YÜKSEKLİK EKLEMİYOR — sadece içerik kadar alan kaplıyor */}
        <div className="w-full relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={42}
            gap={35}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#000"
            ariaLabel="Brand logos"
          />
        </div>
      </div>
    </div>
  );
}
