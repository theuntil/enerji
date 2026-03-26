import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// Hizmet konuları (PDF'ye uygun)
const subjects = [
  "Proje Talebi",
  "Teklif Talebi",
  "Teknik Destek",
  "İş Ortaklığı",
  "Genel Bilgi",
  "Diğer",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: any = {};

    if (!form.name.trim()) newErrors.name = "Ad Soyad zorunludur.";
    if (!form.email.trim()) newErrors.email = "E-posta zorunludur.";
    if (!form.topic.trim()) newErrors.topic = "Lütfen konu seçiniz.";
    if (!form.message.trim()) newErrors.message = "Mesaj boş bırakılamaz.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccessPopup(true);
        setForm({ name: "", email: "", topic: "", message: "" });
        setErrors({});
        setTimeout(() => setSuccessPopup(false), 3000);
      } else {
        alert("Mesaj gönderilirken hata oluştu.");
      }
    } catch (error) {
      alert("Bağlantı hatası.");
    }

    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen bg-black px-6 py-24 flex justify-center">

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 text-white">

          <h1 className="text-3xl md:text-4xl mt-20 tracking-tight">
            İletişim
          </h1>

          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Projeleriniz, teklif talepleriniz veya teknik destek için bizimle iletişime geçebilirsiniz.
            Uzman ekibimiz size en kısa sürede dönüş sağlayacaktır.
          </p>

          <div className="mt-4 flex flex-col gap-4 text-sm">

            <div>
              <p className="text-white/40 text-xs mb-1">E-Posta</p>
              <p className="text-white font-medium">iletisim@gecerogluenerji.com</p>
            </div>

            <div>
              <p className="text-white/40 text-xs mb-1">Telefon</p>
              <p className="text-white font-medium">0532 499 26 47</p>
            </div>

            <div>
              <p className="text-white/40 text-xs mb-1">Adres</p>
              <p className="text-white font-medium">
                Ahi Mesut Mahallesi 1783 Sok. No:10/A İç Kapı No:3 <br />
                Etimesgut / Ankara
              </p>
            </div>

            <div>
              <p className="text-white/40 text-xs mb-1">Çalışma Saatleri</p>
              <p className="text-white font-medium">
                Pazartesi – Cuma, 09:00 – 18:00
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={submitForm}
          className="bg-black border mt-10 border-white/10 rounded-2xl p-8 shadow-xl flex flex-col gap-6"
        >

          {/* NAME */}
          <div>
            <label className="text-white/80 text-sm">Ad Soyad *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Adınız Soyadınız"
              className="mt-2 w-full bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-white/80 text-sm">E-Posta *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ornek@mail.com"
              className="mt-2 w-full bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.email}
              </p>
            )}
          </div>

          {/* TOPIC */}
          <div>
            <label className="text-white/80 text-sm">Konu *</label>
            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className="mt-2 w-full bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            >
              <option value="">Konu seçiniz</option>
              {subjects.map((s) => (
                <option key={s} value={s} className="text-black">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-white/80 text-sm">Mesaj *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Size nasıl yardımcı olabiliriz?"
              className="mt-2 w-full min-h-[130px] bg-black/20 border border-white/20 text-white rounded-xl px-4 py-3 text-sm outline-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              bg-white text-black font-medium text-sm rounded-full
              py-3 px-6 hover:bg-white/90 transition
              flex items-center justify-center gap-2
            "
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Gönder <Send className="w-4 h-4" />
              </>
            )}
          </button>

        </form>
      </div>

      {/* SUCCESS */}
      {successPopup && (
        <div className="fixed bottom-10 right-10 bg-white text-black px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <p className="text-sm font-medium">Mesajınız gönderildi!</p>
        </div>
      )}
    </section>
  );
};

export default Contact;