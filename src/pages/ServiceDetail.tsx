import { useParams } from "react-router-dom";
import { services } from "../data/services";
import OtherServices from "../components/OtherServices";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();

  const service = services.find((s) => s.id === id);

  if (!service) {
    return <div className="text-white p-10">Hizmet bulunamadı</div>;
  }

  return (
    <section className="bg-black text-white min-h-screen">

      {/* HERO */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={service.image}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl leading-tight">
            {service.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20">
        <p className="text-white/70 text-base md:text-md leading-relaxed whitespace-pre-line">
          {service.description}
        </p>
      </div>

      {/* OTHER SERVICES */}
      <OtherServices currentId={service.id} />

    </section>
  );
};

export default ServiceDetail;