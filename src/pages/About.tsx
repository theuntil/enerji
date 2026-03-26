import { Briefcase, Rocket, Users, Target, Globe2 } from "lucide-react";
import DomeGallery from "../components/gallery";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white px-6 py-24 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-24">
<div className="w-full flex justify-center items-center ">
  <div className="w-full max-w-3xl h-[400px]">
    <DomeGallery
      fit={0.6}
      minRadius={300}
      
      maxVerticalRotationDeg={0}
      segments={18}
      dragDampening={3}
        grayscale={false}
    />
  </div>
</div>
        {/* -------------------------------------------------
                HERO — INTRO
        -------------------------------------------------- */}
        <div className="text-center flex flex-col items-center  gap-6">
          <h1 className="text-4xl tracking-tight">
            Hakkımızda
          </h1>

          <p className="text-white/60 mdtext-md max-w-2xl leading-relaxed">
            İnsanların ihtiyaçlarına yönelik hizmetler sunan, yaşam kalitesini arttırmayı hedefleyen 
            GEÇEROĞLU ENERJİ, yenilikçi ve sorumluluk sahibi vizyoner yaklaşımıyla 2023 yılında kurulmuştur. 
            Kısa sürede Türkiye’nin farklı şehirlerinde faaliyet gösteren güçlü bir mühendislik firması haline gelmiştir.
          </p>
        </div>

        {/* -------------------------------------------------
                COMPANY INFO
        -------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-6 border border-white/10 rounded-3xl">
            <h3 className="text-sm text-white/40 mb-2">Firma Sahibi</h3>
            <p className="text-white text-lg">Yalçın GEÇEROĞLU</p>
          </div>

          <div className="p-6 border border-white/10 rounded-3xl">
            <h3 className="text-sm text-white/40 mb-2">Merkez</h3>
            <p className="text-white text-sm">
              Ankara, Türkiye
            </p>
          </div>

          <div className="p-6 border border-white/10 rounded-3xl">
            <h3 className="text-sm text-white/40 mb-2">İletişim</h3>
            <p className="text-white text-sm">
             iletisim@gecerogluenerji.com <br />
              0532 499 26 47
            </p>
          </div>

        </div>

        {/* -------------------------------------------------
                MISSION + VISION
        -------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-black border border-white/10 p-8 rounded-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-400" />
              <h2 className="text-xl font-semibold">Misyonumuz</h2>
            </div>
            <p className="text-white/60 text-sm">
              Enerji üretimi ve dağıtımı alanında kaliteli, güvenilir ve sürdürülebilir çözümler sunarak 
              müşterilerimize değer katmak ve projeleri yüksek standartlarda tamamlamak.
            </p>
          </div>

          <div className="bg-black border border-white/10 p-8 rounded-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-blue-400" />
              <h2 className="text-xl font-semibold">Vizyonumuz</h2>
            </div>
            <p className="text-white/60 text-sm">
              Sürekli gelişen yapımızla enerji sektöründe yenilikçi ve güvenilir çözümler sunan, 
              ulusal ve uluslararası alanda tercih edilen bir mühendislik firması olmak.
            </p>
          </div>

        </div>

        {/* -------------------------------------------------
                WHAT WE DO
        -------------------------------------------------- */}
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl font-semibold">Faaliyet Alanlarımız</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-7 border border-white/10 rounded-3xl hover:bg-white/5 transition">
              <Briefcase className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="font-semibold mb-2">Enerji Projeleri</h3>
              <p className="text-white/60 text-sm">
                Güneş enerji santralleri ve enerji altyapı projelerinde anahtar teslim çözümler sunuyoruz.
              </p>
            </div>

            <div className="p-7 border border-white/10 rounded-3xl hover:bg-white/5 transition">
              <Users className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="font-semibold mb-2">Mühendislik Hizmetleri</h3>
              <p className="text-white/60 text-sm">
                Projelendirme, keşif ve uygulama süreçlerinde uzman mühendis kadromuzla hizmet veriyoruz.
              </p>
            </div>

            <div className="p-7 border border-white/10 rounded-3xl hover:bg-white/5 transition">
              <Globe2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="font-semibold mb-2">Altyapı Çözümleri</h3>
              <p className="text-white/60 text-sm">
                Enerji nakil hatları, trafo merkezleri ve aydınlatma sistemlerinde modern çözümler sunuyoruz.
              </p>
            </div>

          </div>
        </div>

        {/* -------------------------------------------------
                TIMELINE
        -------------------------------------------------- */}
        <div className="flex flex-col gap-10 mt-4">
          <h2 className="text-3xl font-semibold">Gelişim Sürecimiz</h2>

          <div className="border-l border-white/10 pl-6 flex flex-col gap-10">

            <div className="relative">
              <span className="absolute -left-[13px] w-3 h-3 bg-green-400 rounded-full"></span>
              <p className="text-white/40 text-xs">2025</p>
              <h3 className="text-lg font-semibold">Kuruluş</h3>
              <p className="text-white/60 text-sm">
                GEÇEROĞLU ENERJİ Ankara merkezli olarak kuruldu.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[13px] w-3 h-3 bg-blue-400 rounded-full"></span>
              <p className="text-white/40 text-xs">2025</p>
              <h3 className="text-lg font-semibold">Hızlı Büyüme</h3>
              <p className="text-white/60 text-sm">
                Türkiye’nin farklı şehirlerinde projeler gerçekleştirilerek hızlı bir büyüme sağlandı.
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-[13px] w-3 h-3 bg-purple-400 rounded-full"></span>
              <p className="text-white/40 text-xs">2025 - Günümüz</p>
              <h3 className="text-lg font-semibold">Güvenilir Marka</h3>
              <p className="text-white/60 text-sm">
                Kaliteli hizmet anlayışı ile sektörde güvenilir ve saygın bir konuma ulaşıldı.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;