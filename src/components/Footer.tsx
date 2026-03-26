import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PolicyModal, { type Policy } from "../components/PolicyModal";
import policiesData from "../data/policies.json";

const Footer = () => {
  const policies = policiesData as Policy[];

  const [openPolicyId, setOpenPolicyId] = useState<string | null>(null);
  const selectedPolicy = policies.find((p) => p.id === openPolicyId);

  return (
    <footer className="w-full bg-black pt-20 pb-12 px-6 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">

        {/* ----------------------------------------------------------
            1) LEFT COLUMN — LOGO + COMPANY INFO
        ---------------------------------------------------------- */}
        <div className="flex flex-col gap-6">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img
              src="/geceroglu.png"
              className="h-10 object-contain opacity-90"
            />
          </div>

          {/* COMPANY INFO */}
         
        </div>

        {/* ----------------------------------------------------------
            2) CENTER COLUMN — COMPANY LINKS + POLICIES
        ---------------------------------------------------------- */}
        <div className="flex justify-between md:justify-start md:gap-24">

          {/* COMPANY LINKS */}
         

          {/* POLICIES (MODAL TRIGGER) */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold tracking-wide">
              Politikalar
            </h4>

            <ul className="flex flex-col gap-2 text-white/60 text-sm">
              {policies.map((p) => (
                <li
                  key={p.id}
                  onClick={() => setOpenPolicyId(p.id)}
                  className="hover:text-white transition cursor-pointer"
                >
                  {p.title}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ----------------------------------------------------------
            3) RIGHT COLUMN — APP STORE / PLAY STORE / GALLERY
        ---------------------------------------------------------- */}
       <div className="flex flex-col gap-4">
  <div className="flex flex-col gap-4">
    <h4 className="text-white text-sm font-semibold tracking-wide">
      Hızlı Bağlantılar
    </h4>

    <ul className="flex flex-col gap-2 text-white/60 text-sm">
      <li>
        <a 
          href="/hakkimizda" 
          className="hover:text-white transition"
        >
          Hakkımızda
        </a>
      </li>

      <li>
        <a 
          href="/hizmetlerimiz" 
          className="hover:text-white transition"
        >
          Hizmetlerimiz
        </a>
      </li>

      <li>
        <a 
          href="/iletisim" 
          className="hover:text-white transition"
        >
          İletişim
        </a>
      </li>
    </ul>
  </div>
</div>
      </div>

      {/* ------------------ COPYRIGHT ------------------ */}
      <div className="mt-16 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} GEÇEROĞLU ENERJİ İNŞAAT
SAN. VE TİC. LTD. ŞTİ.
      </div>
      <div className="mt-16 text-center text-white/40 text-xs">
  <a 
    href="https://terrasoftware.co" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block opacity-60 hover:opacity-100 transition"
  >
    <img 
      src="/terrayazilim.png"   // public klasörüne koy
      alt="Terra Yazılım"
      className="w-13 h-auto mx-auto"
    />
  </a>
</div>

      {/* ------------------ MODAL ------------------ */}
      <PolicyModal
        open={openPolicyId !== null}
        onClose={() => setOpenPolicyId(null)}
        policy={selectedPolicy}
      />

    </footer>
  );
};

export default Footer;
