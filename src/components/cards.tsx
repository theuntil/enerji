import React from "react";
import { motion } from "framer-motion";
import { Users, LineChart } from "lucide-react";
import {
  Sun,
  Zap,
  Cpu,
  TowerControl,
  Lightbulb,
  ClipboardList
} from "lucide-react";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    title: "Güneş Enerji Santralleri (GES)",
    description:
      "Çevre dostu ve düşük maliyetli enerji üretimi için anahtar teslim güneş enerji santralleri kuruyoruz. Projelendirmeden devreye almaya kadar tüm süreci yöneterek maksimum verimlilik sağlıyoruz.",
    image: "/33.jpg",
    Icon: Sun,
  },
  {
    title: "Orta Gerilim Sistemleri",
    description:
      "1 kV – 35 kV arası enerji iletim ve dağıtım sistemlerinde projelendirme, kurulum ve devreye alma hizmetleri sunarak güvenli ve kesintisiz enerji altyapıları oluşturuyoruz.",
    image: "/99.jpg",
    Icon: Zap,
  },
  {
    title: "Trafo Merkezleri",
    description:
      "Enerjinin iletim ve dağıtım süreçlerinde kritik rol oynayan trafo merkezlerini, uluslararası standartlara uygun şekilde projelendiriyor ve kurulumunu gerçekleştiriyoruz.",
    image: "/44.jpg",
    Icon: Cpu,
  },
  {
    title: "Enerji Nakil Hatları",
    description:
      "Elektrik enerjisinin uzun mesafelere güvenli şekilde taşınması için enerji nakil hatlarını projelendiriyor, malzeme temini ve kurulum dahil anahtar teslim çözümler sunuyoruz.",
    image: "/55.jpg",
    Icon: TowerControl,
  },
  {
    title: "Çevre ve Yol Aydınlatma Sistemleri",
    description:
      "Enerji verimliliğini ön planda tutarak yol, çevre ve dış mekan aydınlatma sistemlerini modern ve tasarruflu çözümlerle hayata geçiriyoruz.",
    image: "/22.jpg",
    Icon: Lightbulb,
  },
  {
    title: "Elektrik Taahhüt ve Proje Yönetimi",
    description:
      " Otel, hastane, konut ve iş merkezleri gibi projelerde elektrik altyapı sistemlerinin projelendirilmesi, kurulumu ve yönetimini profesyonel şekilde gerçekleştiriyoruz.",
    image: "/77.png",
    Icon: ClipboardList,
  }
];

export default function AnalyticsFeatureCards() {
  return (
    <section className="w-full bg-black py-16">

      {/* TRUE CENTER CONTAINER */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">

        {/* PERFECT GRID */}
        <div className="
          grid
          grid-cols-2
          lg:grid-cols-3
          gap-6 lg:gap-8
          items-stretch
        ">
          {cards.map((card, index) => {
            const Icon = card.Icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full flex"
              >
                {/* CARD */}
                <div className="
                  w-full
                  flex
                  flex-col
                  rounded-[26px]
                  sm:p-[1px]
                  bg-gradient-to-b
                  from-neutral-600/60
                  to-black
                ">
                  <div className="
                    flex
                    flex-col
                    h-full
                    bg-black
                    rounded-[26px]
                    p-4 sm:p-6 lg:p-8
                  ">

                    {/* IMAGE */}
                    <div className="
                      relative
                      w-full
                      rounded-[22px]
                      overflow-hidden
                      mb-8
                    ">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="
                          block
                          w-full
                          h-auto
                        "
                      />

                      {/* RIGHT IMAGE SURFACE SHADOW */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-y-0
                          right-0
                          w-24
                          bg-gradient-to-l
                          from-black
                          via-black/80
                          to-transparent
                        "
                      />
                    </div>
{/* CONTENT */}
<div className="flex gap-4 items-start">
  
  <div className="shrink-0">
    <Icon className="w-5 h-5 text-neutral-300" />
  </div>

  <div className="flex-1">

    <h3 className="
      text-md
      text-white
      font-light
      leading-tight
    ">
      {card.title}
    </h3>

    {/* DESCRIPTION */}
    <p className="
      mt-2
      text-neutral-400
      text-[14px]
      leading-relaxed
      w-[70%]
      lg:w-[60%]
    ">
      {card.description}
    </p>

   

  </div>
</div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
       <div className="mt-5 flex justify-center">
  <a href="/hizmetlerimiz">
    <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition shadow-lg flex items-center gap-2">
      Tüm Hizmetlerimiz
      <ArrowUpRight className="w-4 h-4" />
    </button>
  </a>
</div>
    </section>
    
  );
}