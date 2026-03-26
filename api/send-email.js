import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Sadece POST isteği kabul edilir." });
  }

  const { name, email, topic, message } = req.body;

  if (!name || !email || !topic || !message) {
    return res.status(400).json({ error: "Eksik alanlar mevcut." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    const htmlContent = `
    <div style="background:#000; padding:50px 0; font-family:Arial, sans-serif;">
      <div style="max-width:620px; margin:auto; padding:35px;
        background:#0d0d0d; border-radius:18px; 
        border:1px solid #1b1b1b; color:#fff;">

        <!-- Logo -->
        <div style="text-align:center; margin-bottom:25px;">
          <h2 style="margin:0; font-weight:600;">GEÇEROĞLU ENERJİ</h2>
          <p style="margin:0; font-size:12px; color:#888;">
            Enerji & Mühendislik Çözümleri
          </p>
        </div>

        <h2 style="font-size:22px; margin-bottom:10px; font-weight:600;">
          📩 Yeni İletişim Formu Talebi
        </h2>

        <p style="color:#888; font-size:14px; margin-bottom:25px;">
          gecerogluenerji.com
        </p>

        <div style="font-size:15px; line-height:1.7;">
          <p><strong style="color:#bbb;">Ad Soyad:</strong> ${name}</p>
          <p><strong style="color:#bbb;">E-Posta:</strong> ${email}</p>
          <p><strong style="color:#bbb;">Konu:</strong> ${topic}</p>
        </div>

        <div style="margin-top:25px; padding:20px;
          background:#000; border-radius:12px; border:1px solid #222;">
          <strong style="color:#bbb;">Mesaj:</strong>
          <p style="color:#ccc; margin-top:10px; line-height:1.7; white-space:pre-line;">
            ${message}
          </p>
        </div>

        <div style="margin-top:30px; padding-top:20px; border-top:1px solid #222; font-size:13px; color:#777;">
          <p><strong>İletişim:</strong> info@gecerogluenerji.com</p>
          <p><strong>Telefon:</strong> 0532 499 26 47</p>
          <p><strong>Adres:</strong> Ahi Mesut Mahallesi 1783 Sok. No:10/A İç Kapı No:3 Etimesgut / Ankara</p>
        </div>

        <p style="margin-top:25px; text-align:center; color:#555; font-size:12px;">
          © ${new Date().getFullYear()} GEÇEROĞLU ENERJİ · Tüm hakları saklıdır.
        </p>

      </div>
    </div>
    `;

    await transporter.sendMail({
      from: `"Geçeroğlu Enerji İletişim" <${process.env.EMAIL_USER}>`,
      to: "iletisim@gecerogluenerji.com",
      subject: `GEÇEROĞLU ENERJİ • ${topic}`,
      html: htmlContent,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return res.status(500).json({ error: "Mail gönderilemedi" });
  }
}