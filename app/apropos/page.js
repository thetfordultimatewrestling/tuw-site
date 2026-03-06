export default function Home() {
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

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/70 -z-10" />

      {/* ================= SITE CONTENT ================= */}
      <div className="relative z-10">

        {/* NAVBAR */}
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/60 border-b border-zinc-800 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* Logo */}
            <img
              src="/Images/tuw-logo.png"
              alt="TUW Logo"
              className="h-14 w-auto hover:scale-105 transition-transform duration-300"
            />

            {/* Right Side Navigation + Socials */}
            <div className="flex items-center space-x-8">

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8 text-sm tracking-wide">
                <a href="#events" className="hover:text-red-400 transition">Spectacles</a>
                <a href="#calendrier" className="hover:text-red-400 transition">Calendrier</a>
                <a href="#roster" className="hover:text-red-400 transition">Roster</a>
                <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
                <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
                <a href="#contact" className="hover:text-red-400 transition">Contact</a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 items-center">
                <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/facebook.png" alt="Facebook" className="h-6 w-auto object-contain hover:scale-110 transition" />
                </a>
                <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/instagram.png" alt="Instagram" className="h-6 w-auto object-contain hover:scale-110 transition" />
                </a>
                <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/youtube.png" alt="YouTube" className="h-6 w-auto object-contain hover:scale-110 transition" />
                </a>
                <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/spotify.png" alt="Spotify" className="h-6 w-auto object-contain hover:scale-110 transition" />
                </a>
                <a href="https://independentwrestling.tv/promotion/thetford-ultimate-wrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/iwtv.png" alt="IWTV" className="h-6 w-auto object-contain hover:scale-110 transition" />
                </a>
              </div>

            </div>
          </div>
        </nav>

      <h1 className="text-5xl font-bold mb-10">À Propos de la TUW</h1>

      <p className="max-w-3xl mx-auto text-gray-300 text-lg">
        Fondée en 2001, Thetford Ultimate Wrestling est une organisation de
        lutte indépendante basée à Thetford Mines.
      </p>

    </div>
  );
}