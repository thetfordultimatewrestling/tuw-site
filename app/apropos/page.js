export default function Apropos() {
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

            {/* Right Side Navigation */}
            <div className="flex items-center space-x-8">

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8 text-sm tracking-wide">
                <a href="/#events" className="hover:text-red-400 transition">Spectacles</a>
                <a href="/#calendrier" className="hover:text-red-400 transition">Calendrier</a>
                <a href="/#roster" className="hover:text-red-400 transition">Roster</a>
                <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
                <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
                <a href="/#contact" className="hover:text-red-400 transition">Contact</a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 items-center">
                <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/facebook.png" alt="Facebook" className="h-6 hover:scale-110 transition" />
                </a>
                <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/instagram.png" alt="Instagram" className="h-6 hover:scale-110 transition" />
                </a>
                <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/youtube.png" alt="YouTube" className="h-6 hover:scale-110 transition" />
                </a>
                <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/spotify.png" alt="Spotify" className="h-6 hover:scale-110 transition" />
                </a>
                <a href="https://independentwrestling.tv/promotion/thetford-ultimate-wrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/iwtv.png" alt="IWTV" className="h-6 hover:scale-110 transition" />
                </a>
              </div>

            </div>
          </div>
        </nav>

        {/* ================= À PROPOS CONTENT ================= */}

        <section className="pt-40 pb-24 px-6 text-center">
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-zinc-900/60 p-10 rounded-3xl border border-zinc-800 shadow-2xl">

            <h1 className="text-5xl font-bold mb-10 tracking-wide">
              À Propos de la TUW
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Fondée en 2001, Thetford Ultimate Wrestling est une organisation
              de lutte indépendante basée à Thetford Mines. Depuis plus de deux
              décennies, la TUW présente des spectacles de lutte
              professionnelle qui mettent en vedette des talents locaux et
              internationaux.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Avec une combinaison d’action intense, de rivalités mémorables et
              de personnages colorés, la TUW s’est bâtie une réputation solide
              auprès des amateurs de lutte au Québec.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Notre mission est simple : offrir un spectacle de divertissement
              unique, accessible à toute la famille, tout en donnant une
              plateforme aux lutteurs pour performer au plus haut niveau.
            </p>

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