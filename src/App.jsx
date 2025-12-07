import DataImage from "./data";

function App() {

  return (
    <>
    <div className="hero pt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 items-center xl:gap-0 gap-6">

          <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src={DataImage.HeroImage} className="w-10 rounded-md" />
              <q>Better than yesterday.😊</q>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Hi, Saya Gabriel Imanullah Putra Pribowo
            </h1>
            <p className="text-base mb-6 opacity-65">
            Seorang mahasiswa Informatika semester lima yang berfokus pada pengembangan full stack, dengan kemampuan membangun antarmuka responsif (HTML, CSS, JavaScript, React) dan back-end yang aman dan skalabel (PHP/Laravel, Node.js, SQL). Memiliki komunikasi yang baik serta pemahaman UI/UX untuk menghasilkan aplikasi web yang jelas dan berorientasi pada pengguna. Siap berkembang dan berkontribusi dalam tim yang dinamis.            
            </p>
            <div className="flex items-center sm:gap-4 gap-2">
              <a href="#" className="inline-block bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">
                Download CV <i className="ri-file-download-line ri-lg"></i>
              </a>
              <a href="#" className="inline-block bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
                Kunjungi Github <i className="ri-github-line ri-lg"></i>
              </a>
            </div>
          </div>

          <img
            src={DataImage.HeroImage}
            className="w-[500px] rounded-md md:ml-auto"
          />
      </div>
    </div>
    </>
  )
}

export default App
