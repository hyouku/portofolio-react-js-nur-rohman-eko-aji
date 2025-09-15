import DataImage from "./data"
import {listTools,listProyek} from "./data"
import { useState } from "react"

function App() {
  const itemsPerPage = 6 // 2 kolom × 3 baris
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(listProyek.length / itemsPerPage)

  // ambil item sesuai halaman
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = listProyek.slice(startIndex, startIndex + itemsPerPage)
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-centers pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
            <q>Di balik setiap bug, ada peluang untuk belajar hal baru.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, saya Nur Rohman Eko Aji</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya memiliki ketertarikan dalam bidang Programming dan Desain, khususnya pada pembuatan video, website, game serta desain visual seperti poster, pamflet, dan banner. Ketertarikan ini saya kembangkan melalui pembelajaran mandiri dan berbagai proyek pribadi.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            {/* <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a> */}
            <a href="#proyek" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Lihat Karya Digital <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Nur Rohman Eko Aji, seorang fresh graduate dengan ketertarikan pada bidang Video Editor, Web Development, Game Development, dan Desain UI/UX. Saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap karya yang saya kembangkan tidak hanya menarik secara visual tetapi juga memberikan pengalaman pengguna yang optimal. Meskipun belum memiliki pengalaman kerja formal, saya terus mengasah keterampilan melalui pembelajaran mandiri dan proyek pribadi.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  {listProyek.length}
                  <span className="text-violet-500"></span>
                </h1>
                <p>Karya Digital</p>
              </div>
              {/* <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>tahun pengalaman</p>
              </div> */}
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang biasa saya pakai untuk membuat website, video, game, design ataupun dokumentasi</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            
            {listTools.map((tool) => (
              <div className="flex items-center gap-2 border border-zinc-600 rounded-md hover:bg-zinc-800 group p-3" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Karya Digital
        </h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Berikut ini beberapa karya digital yang telah saya buat.
        </p>
      </div>
      
      <div className="proyek-box mt-14 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {currentItems.map((proyek) => (
          <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
            <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
            <p className="text-base/loose mb-4">{proyek.desk}</p>
            <div className="flex flex-wrap gap-2">
              {proyek.tools.map((tool, index) => (
                <p key={index} className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600 hover:bg-zinc-800">
                  {tool}
                </p>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={proyek.link} target="_blank" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                Lihat Karya
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Number */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md font-semibold ${
              currentPage === i + 1
                ? "bg-violet-700 text-white"
                : "bg-zinc-700 text-gray-300 hover:bg-zinc-600"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="Kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
        Mari terhubung dengan saya
        </p>
        <form action="https://formsubmit.co/nurohmanekoaji1@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md"required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." className="border border-zinc-500 p-2 rounded-md"required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  )
}

export default App
