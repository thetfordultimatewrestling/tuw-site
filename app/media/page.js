"use client";

import { useState } from "react";

export default function Media() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/Images/website-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Dark overlay */}
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

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-8">

      <div className="flex space-x-8 text-sm tracking-wide">
        <a href="#events" className="hover:text-red-400 transition">Spectacles</a>
        <a href="#calendrier" className="hover:text-red-400 transition">Calendrier</a>
        <a href="/media" className="hover:text-red-400 transition">Media</a>
        <a href="/roster" className="hover:text-red-400 transition">Roster</a>
        <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
        <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
        <a href="#contact" className="hover:text-red-400 transition">Contact</a>
      </div>

      {/* Social Icons (Desktop) */}
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

    {/* Mobile Hamburger */}
    <button
      className="md:hidden text-white text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </div>

  {/* ================= MOBILE DROPDOWN MENU ================= */}
  {menuOpen && (
    <div className="md:hidden bg-black/95 border-t border-red-600/40 backdrop-blur-md px-6 py-6 space-y-6 text-center">

      <a href="#events" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        Spectacles
      </a>

      <a href="#calendrier" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        Calendrier
      </a>

      <a href="/media" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        Media
      </a>

      <a href="/roster" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        Roster
      </a>

      <a href="/partenaires" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        Partenaires
      </a>

      <a href="/apropos" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        À Propos
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        Contact
      </a>

      {/* Mobile Social Icons */}
      <div className="flex justify-center space-x-6 pt-6 border-t border-red-600/40">

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
  )}

</nav>

        {/* ================= MEDIA ================= */}
        <section id="media" className="py-24 px-6 text-center">

          <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h2 className="text-4xl font-bold mb-8 tracking-wide">
              Media
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Découvrez le documentaire complet TUW Au-Delà du Show, réuni en une seule partie sur la page Vimeo du talentueux Dany Foster, qui a réalisé, filmé et monté cette magnifique série.
            </p>

            {/* Vimeo Video */}
            <div className="relative w-full mb-16" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://player.vimeo.com/video/1129275962"
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* YouTube Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">

              <a
                href="https://www.youtube.com/@thetfordultimatewrestling"
                target="_blank"
              >
                <img
                  src="/Images/youtube.png"
                  alt="YouTube"
                  className="w-20 hover:scale-110 transition"
                />
              </a>

              <p className="text-gray-300 max-w-xl text-lg leading-relaxed">
                Visitez notre page YouTube pour découvrir davantage de contenu multimédia, dont plusieurs de nos courts-métrages disponibles sur cette chaîne.
              </p>

            </div>

          </div>

        </section>
        {/* ================= FOOTER ================= */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400 backdrop-blur-xl bg-black/40">
          © 2001 - 2026 CLUB DE LUTTE TUW INC. TOUS DROITS RÉSERVÉS.
        </footer>

      </div>
    </div>
  );
}
