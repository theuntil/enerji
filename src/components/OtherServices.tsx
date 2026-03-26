import { Link } from "react-router-dom";
import { services } from "../data/services";

interface Props {
  currentId: string;
}

const OtherServices: React.FC<Props> = ({ currentId }) => {
  const filtered = services.filter(s => s.id !== currentId).slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Diğer Hizmetlerimiz
        </h2>

        {/* 🔥 TÜM HİZMETLER BUTONU */}
        <Link
          to="/hizmetler"
          className="hidden md:inline-block px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
        >
          Tüm Hizmetler
        </Link>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {filtered.map(service => (
          <Link
            key={service.id}
            to={`/hizmetlerimiz/${service.id}`}
            className="group"
          >
            <div className="relative h-40 md:h-56 rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src={service.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
            </div>

            <h3 className="mt-3 text-sm md:text-lg font-medium text-white group-hover:text-blue-400 transition leading-tight">
              {service.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* 🔥 MOBİL BUTON */}
      <div className="mt-10 flex justify-center md:hidden">
        <Link
          to="/hizmetlerimiz"
          className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
        >
          Tüm Hizmetler
        </Link>
      </div>

    </div>
  );
};

export default OtherServices;