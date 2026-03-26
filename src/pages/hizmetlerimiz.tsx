"use client";

import { services } from "../data/services";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HizmetlerimizPage() {
  return (
    <section className="w-full bg-black text-white px-6 py-24 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col gap-20">

        {/* HEADER */}
        <div className="text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight">
            Hizmetlerimiz
          </h1>
          <p className="text-white/60 mt-4 text-sm max-w-xl mx-auto">
            Enerji ve mühendislik alanında sunduğumuz çözümlerle projelerinizi
            güvenle hayata geçiriyoruz.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, i) => (
            <Link key={service.id} to={`/hizmetlerimiz/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  cursor-pointer
                  rounded-2xl
                  overflow-hidden
                  border border-white/10
                  hover:border-white/20
                  transition
                "
              >
                {/* IMAGE FULL */}
                <div className="w-full aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* TITLE OVER IMAGE */}
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-sm md:text-base font-light leading-snug">
                    {service.title}
                  </h3>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>

        {/* SEO SECTION */}
        <div className="mt-10 border-t border-white/10 pt-16 flex flex-col gap-8">

          <h2 className="text-2xl md:text-3xl font-light">
            Enerji Çözümleri Hakkında Bilmeniz Gerekenler
          </h2>

          <div className="text-white/60 text-sm leading-relaxed space-y-6 max-w-4xl">

            <p>
              Günümüzde enerji ihtiyacının artmasıyla birlikte sürdürülebilir ve
              verimli enerji çözümleri büyük önem kazanmıştır. Özellikle{" "}
              <strong className="text-white">güneş enerji santralleri</strong>,
              düşük işletme maliyetleri ve çevre dostu yapısı sayesinde en çok
              tercih edilen enerji üretim yöntemlerinden biri haline gelmiştir.
            </p>

            <p>
              <strong className="text-white">Orta gerilim sistemleri</strong> ve{" "}
              <strong className="text-white">trafo merkezleri</strong>, enerjinin
              güvenli ve kesintisiz şekilde dağıtılmasında kritik rol oynar.
            </p>

            <p>
              <strong className="text-white">Enerji nakil hatları</strong>,
              elektriğin uzun mesafelere taşınmasını sağlar ve güçlü altyapı
              sistemlerinin temelini oluşturur.
            </p>

            <p>
              <strong className="text-white">
                Çevre ve yol aydınlatma sistemleri
              </strong>{" "}
              ile hem güvenlik hem de enerji verimliliği sağlanır.
            </p>

            <p>
              GEÇEROĞLU ENERJİ olarak, mühendislik gücümüz ve tecrübemiz ile
              sürdürülebilir enerji projelerini en yüksek kalite standartlarında
              hayata geçiriyoruz.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}