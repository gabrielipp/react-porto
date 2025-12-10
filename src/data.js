import HeroImage from "/assets/fotogabs.jpg";

const Image = {
  HeroImage,
};

export default Image;

// =====================
// IMPORT IMAGES
// =====================
import Tools1 from "/assets/tools/vscode.png";       // VS Code
import Tools2 from "/assets/tools/reactjs.png";      // React
import Tools3 from "/assets/tools/nextjs.png";       // NextJS
import Tools4 from "/assets/tools/tailwind.png";     // Tailwind
import Tools5 from "/assets/tools/bootstrap.png";    // Bootstrap
import Tools6 from "/assets/tools/js.png";           // JavaScript
import Tools7 from "/assets/tools/nodejs.png";       // Node.js
import Tools8 from "/assets/tools/github.png";       // Github
import Tools10 from "/assets/tools/canva.png";       // Canva
import Tools11 from "/assets/tools/figma.png";       // Figma
import Tools12 from "/assets/tools/php.png";         // PHP
import Tools13 from "/assets/tools/laravel.png";     // Laravel
import Tools14 from "/assets/tools/mysql.png";       // MySQL
import Tools15 from "/assets/tools/xampp.png";       // XAMPP
import Tools16 from "/assets/tools/csharp.png";      // C#
import Tools17 from "/assets/tools/kotlin.png";      // Kotlin
import Tools18 from "/assets/tools/firebase.png";    // Firebase
import Tools19 from "/assets/tools/jetpack.png";     // Jetpack Compose

// =====================
// LIST TOOLS
// =====================
export const listTools = [
  // =====================
  // CODE EDITOR
  // =====================
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },

  // =====================
  // PROGRAMMING LANGUAGES
  // =====================
  {
    id: 2,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools16,
    nama: "C#",
    ket: "Programming Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools12,
    nama: "PHP",
    ket: "Backend Language",
    dad: "400",
  },

  // =====================
  // FRAMEWORKS & RUNTIME
  // =====================
  {
    id: 5,
    gambar: Tools2,
    nama: "React JS",
    ket: "Frontend Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Fullstack Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools7,
    nama: "Node.js",
    ket: "JavaScript Runtime",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools13,
    nama: "Laravel",
    ket: "Backend Framework",
    dad: "1000",
  },

  // =====================
  // BACKEND & DATABASE
  // =====================
  {
    id: 11,
    gambar: Tools14,
    nama: "MySQL",
    ket: "Database",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools18,
    nama: "Firebase",
    ket: "Backend-as-a-Service",
    dad: "1200",
  },

  // =====================
  // DEV TOOLS
  // =====================
  {
    id: 13,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools15,
    nama: "XAMPP",
    ket: "Local Server",
    dad: "1400",
  },

  // =====================
  // DESIGN TOOLS
  // =====================
  {
    id: 15,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design",
    dad: "1600",
  },

  // =====================
  // MOBILE DEVELOPMENT
  // =====================
  {
    id: 17,
    gambar: Tools17,
    nama: "Kotlin",
    ket: "Android Development",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools19,
    nama: "Jetpack Compose",
    ket: "Android UI Toolkit",
    dad: "1800",
  },
];



import Proyek1 from "/assets/proyek/proyek01.png";
import Proyek2 from "/assets/proyek/proyek02.png";
import Proyek3 from "/assets/proyek/proyek03.png";
import Proyek4 from "/assets/proyek/proyek04.png";
import Proyek5 from "/assets/proyek/proyek05.png";
import Proyek6 from "/assets/proyek/proyek06.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Game Developer Intern - PT Coursius",
    desk: "Mengembangkan game RPG 2D menggunakan Godot Engine, mencakup pembuatan mekanik gameplay, interaksi karakter, serta pembuatan map.",
    tools: ["Godot Engine", "GDScript", "Tiled Map Editor"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Visit North Sumatra",
    desk: "Visit North Sumatra adalah platform yang menghadirkan keindahan alam, kekayaan budaya, dan potensi wisata provinsi Sumatera Utara dengan cara yang menarik dan informatif",
    tools: ["ReactJS", "Javascript", "CSS", "HTML"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Panti Asuhan Al Mubarok",
    desk: "Website ini dirancang untuk memastikan bahwa setiap kegiatan yang dilakukan oleh panti asuhan dapat diakses secara terbuka oleh masyarakat luas, baik itu dalam bentuk laporan keuangan, kegiatan yang sedang atau telah dilaksanakan, maupun informasi tentang kebutuhan panti asuhan.",
    tools: ["Laravel", "PHP", "CSS", "Blade", "JavaScript", "HTML"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Desain SkillShare Menggunakan Figma",
    desk: "Proyek Software Engineering ini merancang prototype platform web SkillShare menggunakan metodologi Agile Scrum dan Figma, berfungsi sebagai marketplace jasa digital yang menghubungkan mahasiswa UMN dengan UMKM, dilengkapi integrasi AI dan pembayaran QRIS.",
    tools: ["Figma", "Trello"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Mobile App Cat Lover",
    desk: "Aplikasi ini adalah platform seluler komunitas yang dirancang untuk pecinta kucing di Indonesia, memungkinkan pengguna untuk berbagi konten, berinteraksi, dan memfasilitasi kegiatan komunitas seperti adopsi dan gathering, demi menciptakan ruang online yang edukatif dan suportif.",
    tools: ["Android Stusio", "Kotlin", "JetpackCompose", "Firebase"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Web Portofolio",
    desk: "Pengembangan Personal Portfolio Website sebagai Single Page Application (SPA) menggunakan React.js. Desain responsif dan modern diimplementasikan secara utility-first dengan Tailwind CSS, menonjolkan kemampuan saya dalam membangun antarmuka pengguna yang cepat dan modular.",
    tools: ["Vite", "ReactJS", "TailwindCSS"],
    dad: "700",
  },
];
