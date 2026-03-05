export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* ================= BACKGROUND ================= */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/Images/website-background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 bg-black/70 -z-10" />

      <div className="relative z-10">

        {/* ================= NAVIGATION ================= */}
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/60 border-b border-zinc-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <img
              src="/Images/tuw-logo.png"
              alt="TUW Logo"
              className="h-14 w-auto"
            />

            {/* Social Media Icons */}
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank" rel="noopener noreferrer" className="group">
                <img src="/Images/facebook.png" alt="Facebook" className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank" rel="noopener noreferrer" className="group">
                <img src="/Images/instagram.png" alt="Instagram" className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank" rel="noopener noreferrer" className="group">
                <img src="/Images/youtube.png" alt="YouTube" className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>

              <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank" rel="noopener noreferrer" className="group">
                <img src="/Images/spotify.png" alt="Spotify" className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </nav>

        {/* ================= HERO SECTION ================= */}
        <section className="pt-40 pb-28 text-center px-6">
          <img
            src="/Images/tuw-logo.png"
            alt="Thetford Ultimate Wrestling"
            className="mx-auto w-full max-w-4xl object-contain mb-8"
          />
          <p className="text-gray-300 mb-8 tracking-widest text-sm md:text-base">
            LA PASSION, L'IMPLICATION, LE DÉPASSEMENT
          </p>
        </section>

        {/* ================= ROSTER SECTION ================= */}
        <section className="py-20 px-6 max-w-6xl mx-auto">

          {/* -------- Champions Subsection -------- */}
          <h2 className="text-4xl font-bold mb-10 text-center">Champions</h2>

          <div className="space-y-6 mb-20">

            {/* Champion TUW */}
            <div className="flex flex-col md:flex-row items-center bg-zinc-900/80 backdrop-blur-lg border border-zinc-700 rounded-2xl p-6 shadow-lg">
              <img
                src="/Images/marko-champion.png"
                alt="Champion TUW"
                className="w-28 h-28 object-cover rounded-xl md:mr-6 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-1">Champion TUW</h3>
                <p className="text-gray-400">Champion depuis bla bla bla.</p>
              </div>
            </div>

            {/* Champions par Équipe TUW */}
            <div className="flex flex-col md:flex-row items-center bg-zinc-900/80 backdrop-blur-lg border border-zinc-700 rounded-2xl p-6 shadow-lg">
              <img
                src="/Images/classe-sup-champion.png"
                alt="Champions par Équipe TUW"
                className="w-28 h-28 object-cover rounded-xl md:mr-6 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-1">Champions par Équipe TUW</h3>
                <p className="text-gray-400">Champions depuis bla bla bla.</p>
              </div>
            </div>

            {/* Championne Ultimate Wrestling Division */}
            <div className="flex flex-col md:flex-row items-center bg-zinc-900/80 backdrop-blur-lg border border-zinc-700 rounded-2xl p-6 shadow-lg">
              <img
                src="/Images/dreya-championne.png"
                alt="Championne Ultimate Wrestling Division"
                className="w-28 h-28 object-cover rounded-xl md:mr-6 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-1">Championne Ultimate Wrestling Division</h3>
                <p className="text-gray-400">Championne depuis bla bla bla.</p>
              </div>
            </div>
          </div>

          {/* -------- Roster Title -------- */}
          <h2 className="text-4xl font-bold mb-10 text-center">Roster</h2>

          {/* -------- Roster Grid (Example Layout) -------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

            {/* Example Wrestler Card */}
            <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-700 rounded-2xl p-4 shadow-lg hover:scale-105 transition">
              <img src="/Images/wrestler-placeholder.png" alt="Wrestler" className="w-full h-64 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-center">Nom du Lutteur</h3>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-700 rounded-2xl p-4 shadow-lg hover:scale-105 transition">
              <img src="/Images/wrestler-placeholder.png" alt="Wrestler" className="w-full h-64 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-center">Nom du Lutteur</h3>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-lg border border-zinc-700 rounded-2xl p-4 shadow-lg hover:scale-105 transition">
              <img src="/Images/wrestler-placeholder.png" alt="Wrestler" className="w-full h-64 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold text-center">Nom du Lutteur</h3>
            </div>

          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="text-center py-10 border-t border-zinc-800 text-gray-500 text-sm">
          © {new Date().getFullYear()} Thetford Ultimate Wrestling. Tous droits réservés.
        </footer>

      </div>
    </div>
  );
}
