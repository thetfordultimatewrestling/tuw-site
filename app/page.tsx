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

            <img
              src="/Images/tuw-logo.png"
              alt="TUW Logo"
              className="h-14 w-auto hover:scale-105 transition"
            />

            <div className="hidden md:flex space-x-8 text-sm tracking-wide">

              <a href="#events" className="hover:text-red-400 transition">Spectacles</a>
              <a href="#calendrier" className="hover:text-red-400 transition">Calendrier</a>
              <a href="#media" className="hover:text-red-400 transition">Media</a>
              <a href="#roster" className="hover:text-red-400 transition">Roster</a>
              <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
              <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
              <a href="#contact" className="hover:text-red-400 transition">Contact</a>

            </div>

            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/95 border-t border-red-600/40 backdrop-blur-md px-6 py-6 space-y-6 text-center">

              <a href="#events" className="block text-lg hover:text-red-400">Spectacles</a>
              <a href="#calendrier" className="block text-lg hover:text-red-400">Calendrier</a>
              <a href="#media" className="block text-lg hover:text-red-400">Media</a>
              <a href="#roster" className="block text-lg hover:text-red-400">Roster</a>
              <a href="/partenaires" className="block text-lg hover:text-red-400">Partenaires</a>
              <a href="/apropos" className="block text-lg hover:text-red-400">À Propos</a>
              <a href="#contact" className="block text-lg hover:text-red-400">Contact</a>

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
              src="/Images/Banner_Ultimate_Revolution_2026.png"
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
        
                {/* ================= EVENT SECTION ================= */}
        <section id="events" className="py-24 max-w-5xl mx-auto px-6 text-center">

          <div className="bg-black/60 border border-red-600/40 backdrop-blur-md p-8 rounded-2xl shadow-xl">

            <img
              src="/Images/Banner_Ultimate_Revolution_2026.png"
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
        
                {/* ================= ROSTER ================= */}
        <section id="roster" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Champions Subsection */}
            <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">Champions</h2>

            <div className="space-y-8 mb-20">

              {/* Champion TUW */}
              <div className="flex flex-col md:flex-row items-center bg-black/60 border border-red-600/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <img src="/Images/marko-champion.png" alt="Champion TUW" className="w-105 h-85 object-cover rounded-2xl mb-6 md:mb-0 md:mr-8"/>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Champion TUW</h3>
                  <p className="text-gray-400">
                    Marko Estrada, ancien des Invincibles avec Franky The Mobster, a trahi son partenaire en s’alliant secrètement à Tony Icon pour devenir champion de la TUW...
                  </p>
                </div>
              </div>

              {/* Champions par Équipe TUW */}
              <div className="flex flex-col md:flex-row items-center bg-black/60 border border-red-600/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <img src="/Images/classe-sup-champion.png" alt="Champions par Équipe TUW" className="w-105 h-85 object-cover rounded-2xl mb-6 md:mb-0 md:mr-8"/>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Champions par Équipe TUW</h3>
                  <p className="text-gray-400">
                    À Feast N’ Best 3, Marko Estrada a trahi son partenaire Franky The Mobster en plein combat contre Mitch Thompson et DGenerate...
                  </p>
                </div>
              </div>

              {/* Championne */}
              <div className="flex flex-col md:flex-row items-center bg-black/60 border border-red-600/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <img src="/Images/dreya-mitchell.png" alt="Championne Ultimate Wrestling Division" className="w-105 h-85 object-cover rounded-2xl mb-6 md:mb-0 md:mr-8"/>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Championne Ultimate Wrestling Divison</h3>
                  <p className="text-gray-400">
                    Le 22 mars 2025 à March Madness IX, Dreya Mitchell est devenue championne de la TUW...
                  </p>
                </div>
              </div>

            </div>

            {/* Roster Title */}
            <h2 className="text-4xl font-bold text-center mb-14 tracking-wide">Roster</h2>

            {/* Roster Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
              {[
                { name: "Audrey Moreau", image: "/Images/audrey-moreau.png" },
                { name: "Bryan Gingras", image: "/Images/bryan-gingras.png" },
                { name: "Buxx Belmar", image: "/Images/buxx-belmar.png" },
                { name: "Carloss Gonzalez", image: "/Images/carloss-gonzalez.png" },
                { name: "Dani Leo", image: "/Images/dani-leo.png" },
                { name: "DGenerate", image: "/Images/dgenerate.png" },
                { name: "Dreya Mitchell", image: "/Images/dreya-mitchell.png" },
                { name: "Francis", image: "/Images/francis.png" },
                { name: "Franky The Mobster", image: "/Images/franky-the-mobster.png" },
                { name: "Fred Romeo", image: "/Images/fred-romeo.png" },
                { name: "Ghyslain", image: "/Images/ghyslain.png" },
                { name: "Heavy Rox", image: "/Images/heavy-rox.png" },
                { name: "Jake 'La Paix' Madison", image: "/Images/jake-madison.png" },
                { name: "Jonny Rush", image: "/Images/jonny-rush.png" },
                { name: "Kristara", image: "/Images/kristara.png" },
                { name: "Leah Sparks", image: "/Images/leah-sparks.png" },
                { name: "Marko Estrada", image: "/Images/marko-champion.png" },
                { name: "Minus", image: "/Images/minus.png" },
                { name: "Mister Brown", image: "/Images/mister-brown.png" },
                { name: "Mr. VIP Mitch Thompson", image: "/Images/mitch-thompson.png" },
                { name: "Muundo", image: "/Images/muundo.png" },
                { name: "Pezz", image: "/Images/pezz.png" },
                { name: "SeXXXy Eddy", image: "/Images/sexxxy-eddy.png" },
                { name: "Tony Icon", image: "/Images/tony-icon.png" },
                { name: "Tyler Nox", image: "/Images/tyler-nox.png" },
                { name: "Yan Lambino", image: "/Images/yan-lambino.png" },
                { name: "Ziggy McGoth", image: "/Images/ziggy-mcgoth.png" }
              ].map((wrestler) => (
                <div key={wrestler.name} className="group bg-black/60 border border-red-600/40 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
                  <img src={wrestler.image} alt={wrestler.name} className="rounded-2xl w-full h-64 object-contain mb-5 group-hover:scale-105 transition duration-500"/>
                  <h3 className="text-xl font-semibold tracking-wide">{wrestler.name}</h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-24 text-center px-6">
          <h2 className="text-4xl font-bold mb-8 tracking-wide">Contact TUW</h2>
          <p className="text-gray-300 text-lg">Email: luttetuw@gmail.com</p>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400 backdrop-blur-xl bg-black/40">
          © 2001 - 2026 CLUB DE LUTTE TUW INC. TOUS DROITS RÉSERVÉS.
        </footer>

      </div>
    </div>
  );
}