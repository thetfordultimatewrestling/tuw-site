"use client";

import { useState } from "react";

export default function DevenirPartenaire() {
  const [menuOpen, setMenuOpen] = useState(false);

  const images = [
    "sponsor-cover.png",
    "Doc_Commandites_Sommaire.png",
    "Doc_Commandites_2.png",
    "Doc_Commandites_3.png",
    "Doc_Commandites_4.png",
    "Doc_Commandites_5(Avec-$).png",
    "Doc_Commandites_6.png",
    "Doc_Commandites_7.png"
  ];

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/Images/website-backgroundd.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="fixed inset-0 bg-black/70 -z-10" />

      <div className="relative z-10">

        {/* ================= NAVBAR ================= */}
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/60 border-b border-zinc-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <a href="/">
              <img
                src="/Images/tuw-logo.png"
                alt="TUW Logo"
                className="h-14 w-auto hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">

              <div className="flex space-x-8 text-sm tracking-wide">
                <a href="/#events" className="hover:text-red-400 transition">Spectacles</a>
                <a href="/#calendrier" className="hover:text-red-400 transition">Calendrier</a>
                <a href="/#media" className="hover:text-red-400 transition">Media</a>
                <a href="/#roster" className="hover:text-red-400 transition">Roster</a>
                <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
                <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
                <a href="/#contact" className="hover:text-red-400 transition">Contact</a>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 items-center">
                <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank">
                  <img src="/Images/facebook.png" className="h-6 hover:scale-110 transition"/>
                </a>
                <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank">
                  <img src="/Images/instagram.png" className="h-6 hover:scale-110 transition"/>
                </a>
                <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank">
                  <img src="/Images/youtube.png" className="h-6 hover:scale-110 transition"/>
                </a>
                <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank">
                  <img src="/Images/spotify.png" className="h-6 hover:scale-110 transition"/>
                </a>
                <a href="https://independentwrestling.tv/promotion/thetford-ultimate-wrestling" target="_blank">
                  <img src="/Images/iwtv.png" className="h-6 hover:scale-110 transition"/>
                </a>
              </div>

            </div>

            {/* Hamburger */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-zinc-800">
              <div className="flex flex-col items-center space-y-6 py-8 text-lg">
                <a href="/#events" onClick={() => setMenuOpen(false)}>Spectacles</a>
                <a href="/#calendrier" onClick={() => setMenuOpen(false)}>Calendrier</a>
                <a href="/#media" onClick={() => setMenuOpen(false)}>Media</a>
                <a href="/#roster" onClick={() => setMenuOpen(false)}>Roster</a>
                <a href="/partenaires" onClick={() => setMenuOpen(false)}>Partenaires</a>
                <a href="/apropos" onClick={() => setMenuOpen(false)}>À Propos</a>
                <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>

                <div className="flex justify-center space-x-6 pt-4">
                  <img src="/Images/facebook.png" className="h-6"/>
                  <img src="/Images/instagram.png" className="h-6"/>
                  <img src="/Images/youtube.png" className="h-6"/>
                  <img src="/Images/spotify.png" className="h-6"/>
                  <img src="/Images/iwtv.png" className="h-6"/>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* ================= PAGE CONTENT ================= */}
        <div className="relative z-10 pt-32 pb-24 px-6">

          <h1 className="text-5xl font-bold text-center mb-6">
            Devenir Partenaire
          </h1>

          {/* Download Button under the heading */}
          <div className="text-center mb-20">
            <a
              href="/Images/Document_de_partenaria_TUW.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:scale-105"
            >
              ⬇ Télécharger le document de commandite
            </a>
          </div>

          {/* Images */}
          <div className="max-w-5xl mx-auto space-y-24">
            {images.map((img, index) => (
              <div
                key={img}
                className="opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "forwards"
                }}
              >
                <img
                  src={`/Images/${img}`}
                  alt={img}
                  className="w-full rounded-xl shadow-2xl opacity-90 hover:opacity-100 transition duration-500 transform hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ================= ANIMATION ================= */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>

    </div>
  );
}