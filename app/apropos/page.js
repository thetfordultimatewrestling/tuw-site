"use client";

import { useState } from "react";

export default function Apropos() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/Images/website-backgroundb.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10" />

      {/* ================= SITE CONTENT ================= */}
      <div className="relative z-10">

        {/* NAVBAR */}
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
                <a href="/media" className="hover:text-red-400 transition">Media</a>
                <a href="/roster" className="hover:text-red-400 transition">Roster</a>
                <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
                <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
                <a href="/recrutement" className="hover:text-red-400 transition">Recrutement</a>
                <a href="/contact" className="hover:text-red-400 transition">Contact</a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 items-center">

                <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/facebook.png" alt="Facebook" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/instagram.png" alt="Instagram" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/youtube.png" alt="YouTube" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/spotify.png" alt="Spotify" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://independentwrestling.tv/promotion/thetford-ultimate-wrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/iwtv.png" alt="IWTV" className="h-6 hover:scale-110 transition"/>
                </a>

              </div>

            </div>

            {/* Hamburger Button */}
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
                <a href="/media" onClick={() => setMenuOpen(false)}>Media</a>
                <a href="/roster" onClick={() => setMenuOpen(false)}>Roster</a>
                <a href="/partenaires" onClick={() => setMenuOpen(false)}>Partenaires</a>
                <a href="/apropos" onClick={() => setMenuOpen(false)}>À Propos</a>
                <a href="/recrutement" onClick={() => setMenuOpen(false)}>Recrutement</a>
                <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>

                {/* Mobile Socials */}
                <div className="flex justify-center space-x-6 pt-4">

                  <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/facebook.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/instagram.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/youtube.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/spotify.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://independentwrestling.tv/promotion/thetford-ultimate-wrestling" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/iwtv.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                </div>

              </div>

            </div>
          )}

        </nav>

        {/* PAGE CONTENT */}
        <section className="pt-40 pb-24 px-6 text-center">
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-zinc-900/60 p-10 rounded-3xl border border-zinc-800 shadow-2xl">

            <h1 className="text-5xl font-bold mb-10 tracking-wide">
              À Propos
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              La Thetford Ultimate Wrestling (TUW) est une promotion de lutte professionnelle originaire de Thetford Mines qui présente des spectacles depuis plus de 20 ans. Reconnue pour la qualité de sa production visuelle et le calibre de ses spectacles, elle est aujourd’hui considérée comme l’une des promotions de lutte les plus prestigieuses au Québec.

              Fondée en 2001 par Pierre Bouffard, la TUW met fin à ses activités en 2015 avant de renaître en 2022 grâce à Anthony Bouffard, accompagné de trois membres de l’équipe originale. Son retour officiel a lieu le 4 février 2023 au Cégep de Thetford, dans la salle Promutuel, reconnue comme l’une des plus belles salles de spectacle de la province.

              La promotion met en lumière plusieurs talents québécois, dont Franky The Mobster, Marko Estrada, Dreya Mitchell, Kristara, Mitch Thompson, DGenerate, TDT, SeXXXy Eddy, Carloss Gonzalez et bien d’autres.

              Avec plusieurs événements chaque année et une nouvelle équipe créative œuvrant en audiovisuel, en opérations et en création, la TUW poursuit son évolution vers un niveau supérieur. Fait unique au Québec : la promotion produit elle-même toutes les chansons thèmes de ses lutteurs et de ses événements, disponibles sur les plateformes numériques, en collaboration avec Dual Shadow Studio.

              Notre devise : la passion, l’implication et le dépassement!            </p>

          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400 backdrop-blur-xl bg-black/40">
          © 2001 - 2026 CLUB DE LUTTE TUW INC. TOUS DROITS RÉSERVÉS.
        </footer>

      </div>
    </div>
  );
}