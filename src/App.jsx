import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {

  return (
    <>
    {/* Beranda */}
    <div className="hero pt-10">
      <div className="animate__animated animate__fadeInUp animate__delay-2s max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center xl:gap-0 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src={DataImage.HeroImage} className="w-10 rounded-md" loading="lazy"/>
              <q>Better than yesterday.😊</q>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Hi, Saya Gabriel Imanullah Putra Pribowo
            </h1>
            <p className="text-base mb-6 opacity-65">
            Seorang mahasiswa Informatika semester lima yang berfokus pada pengembangan full stack, dengan kemampuan membangun antarmuka responsif (HTML, CSS, JavaScript, React) dan back-end yang aman dan skalabel (PHP/Laravel, Node.js, SQL). Memiliki komunikasi yang baik serta pemahaman UI/UX untuk menghasilkan aplikasi web yang jelas dan berorientasi pada pengguna. Siap berkembang dan berkontribusi dalam tim yang dinamis.            
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="/CV_Gabriel-Imanullah.pdf" download className="inline-block bg-red-700 p-4 rounded-2xl hover:bg-red-600">
                Download CV <i className="ri-file-download-line ri-lg"></i>
              </a>
              <a href="https://github.com/gabrielipp" target="_blank" className="inline-block bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
                Kunjungi Github <i className="ri-github-line ri-lg"></i>
              </a>
            </div>
          </div>

          <img
            src={DataImage.HeroImage}
            className="animate__animated animate__fadeInUp animate__delay-3s w-[500px] rounded-md md:ml-auto"
            loading="lazy"
          />
      </div>
    </div>
    {/* Beranda */}

    {/* Tentang */}
    <div className="tentang mt-32 py-10" id="tentang">
      <div className="max-w-5xl mx-auto px-4 p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
        <p className="text-base/loose mb-10">
          Saya bersekolah di SMK Telkom Jakarta jurusan Rekayasa Perangkat Lunak (2020–2023), mempelajari dasar pemrograman dan pengembangan aplikasi, serta menjalani PKL sebagai Game Developer di PT Coursius. Saat ini saya melanjutkan studi Informatika di Universitas Multimedia Nusantara (sejak 2023) dengan fokus pada full stack development, software engineering, basis data, mobile app, cybersecurity, game development, dan machine learning.        
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} className="w-12 rounded-md sm:block hidden" />
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">10<span className="text-red-500">+</span></h1>
              <p>Proyek Selesai</p>  
            </div>
            <div>
              <h1 className="text-4xl mb-1">4<span className="text-red-500">+</span></h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    {/* Tentang */}

    {/* Tools */}
      <div className="tools mt-32 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-65" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">Berikut ini adalah berbagai tools yang mendukung saya dalam pengembangan software, desain, dan pengelolaan proyek IT.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
          <div className="flex items-center gap-2 p-3 border border-zinc-600 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt="Tools Image"  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    {/* Tools */}

    {/* Proyek */}
    <div className="proyek mt-32 py-10" id="proyek">
      <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
      <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
        Berikut ini adalah beberapa proyek yang telah saya buat
      </p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {listProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="p-4 bg-zinc-800 rounded-md shadow-md border border-zinc-700 hover:border-red-600 transition"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
            <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="w-full rounded-md mb-4" />

            <h1 className="text-2xl font-bold mb-3">{proyek.nama}</h1>
            <p className="text-base/loose opacity-80 mb-4">{proyek.desk}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {proyek.tools.map((tool, index) => (
                <p
                  key={index}
                  className="py-1 px-3 border border-zinc-500 bg-zinc-700 rounded-md text-sm font-semibold"
                >
                  {tool}
                </p>
              ))}
            </div>

            <a
              href="#"
              className="bg-red-700 p-3 rounded-lg block border border-zinc-600 hover:border-red-500 text-center font-semibold"
            >
              Lihat Website
            </a>
          </div>
        ))}
      </div>
      </div>
    </div>
    {/* Proyek */}

    {/* Kontak */}
    <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">Mari terhubung dengan saya</p>
          <form action="https://formsubmit.co/masgabs12@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukkan Nama..." className="border border-zinc-500 p-2 rounded-md" required/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input type="email" name="email" placeholder="Masukkan Email..." required className="border border-zinc-500 p-2 rounded-md"/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Pesan</label>
                <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." required className="border border-zinc-500 p-2 rounded-md"/>
              </div>
              <div className="text-center">
                <button className="bg-red-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:border-red-500 text-center font-semibold" type="submit">Kirim Pesan</button>
              </div>
            </div>
          </form>
      </div>
    </div>

    </>
  )
}

export default App
