"use client";

import { useState } from "react";

export default function Home() {

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
    <img
      src="/Images/tuw-logo.png"
      alt="TUW Logo"
      className="h-14 w-auto hover:scale-105 transition"
    />

    {/* Desktop Menu */}
    <div className="hidden md:flex items-center space-x-8">

      <div className="flex space-x-8 text-sm tracking-wide">
        <a href="#events" className="hover:text-red-400 transition">Spectacles</a>
        <a href="#calendrier" className="hover:text-red-400 transition">Calendrier</a>
        <a href="/media" className="hover:text-red-400 transition">Media</a>
        <a href="/roster" className="hover:text-red-400 transition">Roster</a>
        <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
        <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
        <a href="/recrutement" className="hover:text-red-400 transition">Recrutement</a>
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
      
      <a href="/recrutement" onClick={() => setMenuOpen(false)} className="block text-lg hover:text-red-400">
        Recrutement
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
        {/* ================= HERO ================= */}
        <section className="pt-40 pb-28 text-center">
          <div className="max-w-6xl mx-auto px-6">

            <img
              src="/Images/tuw-logo.png"
              className="mx-auto w-full max-w-4xl object-contain mb-10"
            />

            <p className="text-gray-300 tracking-widest mb-10">
              LA PASSION, L'IMPLICATION, LE DÉPASSEMENT
            </p>

            <a
              href="https://lepointdevente.com/tuw"
              target="_blank"
              className="inline-block bg-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-105 transition shadow-xl"
            >
              Billetterie
            </a>

          </div>
        </section>
        
                {/* ================= EVENT SECTION ================= */}
        <section id="events" className="py-24 max-w-5xl mx-auto px-6 text-center">

          <div className="bg-black/60 border border-red-600/40 backdrop-blur-md p-8 rounded-2xl shadow-xl">

            <img
              src="/Images/Affiche-Officielle-UR2026.png"
              alt="Ultimate Revolution III Event Poster"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-2xl object-cover mb-8"
            />

            <h2 className="text-4xl font-bold mb-6 tracking-wide">
              Ultimate Revolution III
            </h2>

            <p className="mb-2 text-lg">
              April 25, 2026 – 7:00 PM
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Centre Récréatif de Robertsonville<br />
              5885 Avenue du Collège<br />
              Thetford Mines, QC
            </p>

            <a
              href="https://lepointdevente.com/tickets/tuwultimaterevolution2026"
              target="_blank"
              className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-xl"
            >
              Achetez Vos Billets
            </a>

          </div>

        </section>


        {/* ================= CALENDRIER ================= */}
        <section id="calendrier" className="py-24 px-6 text-center">

          <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h2 className="text-4xl font-bold mb-12 tracking-wide">
              Calendrier TUW 2026
            </h2>

            <img
              src="/Images/calendrier-2026.png"
              alt="Calendrier TUW 2026"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />

          </div>

        </section>
                
            {/* ================= CONTACT ================= */}
            <section id="contact" className="py-24 text-center px-6">
            <h2 className="text-4xl font-bold mb-8 tracking-wide">Contact TUW</h2>

            <p className="text-gray-300 text-lg mb-2">
             📧 Courriel: luttetuw@gmail.com
            </p>

            <p className="text-gray-300 text-lg">
             📞 Téléphone: 418-814-3900
            </p>
         </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400 backdrop-blur-xl bg-black/40">
          © 2001 - 2026 CLUB DE LUTTE TUW INC. TOUS DROITS RÉSERVÉS.
        </footer>

      </div>
    </div>
  );
}