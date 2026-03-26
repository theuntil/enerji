import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

// PDF'ye %100 sadık SSS
const faqs: FAQ[] = [
  {
    question: "Geçeroğlu Enerji hangi alanlarda hizmet vermektedir?",
    answer:
      "Firmamız; orta gerilim sistemleri, güneş enerji santralleri, trafo merkezleri, enerji nakil hatları ve çevre & yol aydınlatma sistemleri gibi alanlarda uzmanlaşmıştır.",
  },
  {
    question: "Şirket ne zaman kurulmuştur?",
    answer:
      "Geçeroğlu Enerji, 2023 yılında kurulmuş olup kısa sürede Türkiye'nin farklı şehirlerinde faaliyet gösteren bir firma haline gelmiştir.",
  },
  {
    question: "Şirketin merkezi nerededir?",
    answer:
      "Firmamız, Ankara merkezli olup Türkiye genelinde projelerini yürütmektedir.",
  },
  {
    question: "Güneş enerji santrali hizmeti veriyor musunuz?",
    answer:
      "Evet, güneş enerji santrallerinin kurulumu, projelendirilmesi ve devreye alınması dahil tüm süreçlerde anahtar teslim hizmet sunmaktayız.",
  },
  {
    question: "Projelerde hangi standartlar uygulanmaktadır?",
    answer:
      "Projelerimizde IEC standartları ve TEİAŞ teknik şartnameleri başta olmak üzere uluslararası kalite ve güvenlik standartları uygulanmaktadır.",
  },
  {
    question: "Projelerinizde iş güvenliği ve teslim süreci nasıldır?",
    answer:
      "Tüm projelerimiz iş güvenliği kurallarına uygun şekilde yürütülmekte olup, tamamlanan işler zamanında ve kazasız şekilde teslim edilmektedir.",
  },
  {
    question: "Uluslararası firmalarla çalışıyor musunuz?",
    answer:
      "Evet, uzman mühendis ve teknik kadromuz ile uluslararası firmaların elektrik uygulamalarında çözüm ortağı olarak hizmet vermekteyiz.",
  },
  {
    question: "Enerji nakil hatları hizmetiniz neleri kapsar?",
    answer:
      "Enerji nakil hatlarında projelendirme, malzeme temini, direk montajı ve hat kurulumu dahil anahtar teslim çözümler sunmaktayız.",
  },
  {
    question: "Hangi tür projelerde hizmet veriyorsunuz?",
    answer:
      "Otel, hastane, konut, iş merkezleri ve endüstriyel tesisler gibi birçok farklı projede elektrik ve enerji çözümleri sunmaktayız.",
  },
];

// Smooth height animation component
const FAQItem = ({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? `${ref.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div
      className="
        bg-black
        border border-white/10
        rounded-2xl
        px-8 py-6
        min-h-[72px]
        cursor-pointer
        transition
      "
      onClick={onToggle}
    >
      {/* Question */}
      <div className="flex items-center justify-between">
        <span className="text-white text-[14px] font-light">{q}</span>

        <ChevronDown
          size={20}
          className={`text-white/70 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Answer */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height }}
      >
        <div
          ref={ref}
          className="mt-3 text-white/60 text-[14px] leading-relaxed pb-2"
        >
          {a}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-black py-24 px-6">
      {/* TITLE */}
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-white text-3xl font-light">
          Sıkça Sorulan Sorular
        </h2>
        <p className="text-white/80 mt-2 text-[13px]">
          Hizmetlerimiz hakkında merak edilenler
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="mt-12 flex flex-col gap-4 max-w-[1000px] mx-auto">
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            q={item.question}
            a={item.answer}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;