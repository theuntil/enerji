import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [lightReady, setLightReady] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPos({ x, y });
  };

  return (
    <section className="relative w-full bg-black overflow-hidden py-28 px-6">

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-4xl mx-auto text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="
            text-[50px]
            lg:text-[70px]
            leading-[1.1]
            bg-gradient-to-b
            from-white
            via-neutral-200
            to-neutral-400
            bg-clip-text
            text-transparent
          "
          style={{ fontFamily: "CTAItalic" }}
        >
         Yenilikçi Mühendislik,
          <br />
         Güvenilir Enerji
        </motion.h2>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-row gap-4 justify-center"
        >
          <a
            href="/iletisim"
            className="px-6 py-3 rounded-full bg-white text-black text-sm hover:bg-neutral-200 transition"
          >
          İletişime Geçin
          </a>

          <a
            href="/hakkimizda"
            className="px-6 py-3 rounded-full  text-white text-sm hover:scale-105 transition"
          >
            Hakkımızda
          </a>
        </motion.div>
      </motion.div>

    
    </section>
  );
}