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

            <img
              src="/Images/tuw-logo.png"
              alt="TUW Logo"
              className="h-14 w-auto hover:scale-105 transition-transform duration-300"
            />

            <div className="space-x-8 hidden md:block text-sm tracking-wide">
              <a href="#events" className="hover:text-red-400 transition">Spectacles</a>
              <a href="#calendrier" className="hover:text-red-400 transition">Calendrier</a>
              <a href="#roster" className="hover:text-red-400 transition">Roster</a>
              <a href="#contact" className="hover:text-red-400 transition">Contact</a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="pt-40 pb-28 text-center">
          <div className="max-w-6xl mx-auto px-6">

            <div className="mb-10">
              <img
                src="/Images/tuw-logo.png"
                alt="Thetford Ultimate Wrestling"
                className="mx-auto w-full max-w-4xl object-contain"
              />
            </div>

            <p className="text-gray-300 tracking-widest mb-10">
              LA PASSION, L'IMPLICATION, LE DÉPASSEMENT
            </p>

            <a
              href="https://lepointdevente.com/tuw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-red-700 hover:scale-105 transition duration-300 shadow-xl"
            >
              Billetterie
            </a>
          </div>
        </section>

        {/* EVENT */}
        <section id="events" className="py-24 max-w-5xl mx-auto px-6 text-center">
          <div className="backdrop-blur-xl bg-zinc-900/60 p-8 rounded-3xl shadow-2xl border border-zinc-800">

            <img
              src="/Images/Banner_Ultimate_Revolution_2026.png"
              alt="Ultimate Revolution III Event Poster"
              className="mx-auto rounded-2xl shadow-2xl w-full max-w-2xl object-cover mb-8"
            />

            <h2 className="text-4xl font-bold mb-6 tracking-wide">Ultimate Revolution III</h2>

            <p className="mb-2 text-lg">April 25, 2026 – 7:00 PM</p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Centre Récréatif de Robertsonville<br />
              5885 Avenue du Collège<br />
              Thetford Mines, QC
            </p>

            <a
              href="https://lepointdevente.com/tickets/tuwultimaterevolution2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-xl"
            >
              Achetez Vos Billets
            </a>
          </div>
        </section>

        {/* CALENDRIER */}
        <section id="calendrier" className="py-24 px-6 text-center">
          <div className="max-w-6xl mx-auto backdrop-blur-xl bg-zinc-900/60 p-10 rounded-3xl border border-zinc-800 shadow-2xl">
            <h2 className="text-4xl font-bold mb-12 tracking-wide">Calendrier TUW 2026</h2>

            <img
              src="/Images/calendrier-2026.png"
              alt="Calendrier TUW 2026"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />
          </div>
        </section>

        {/* ROSTER */}
        <section id="roster" className="py-24 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-14 tracking-wide">Featured Talent</h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                { name: "Marko Estrada", image: "/Images/marko-estrada.png" },
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
                <div
                  key={wrestler.name}
                  className="group backdrop-blur-xl bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800 shadow-xl hover:scale-105 transition duration-300"
                >
                  <img
                    src={wrestler.image}
                    alt={wrestler.name}
                    className="rounded-2xl w-full h-64 object-contain mb-5 group-hover:scale-105 transition duration-500"
                  />
                  <h3 className="text-xl font-semibold tracking-wide">{wrestler.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 text-center px-6">
          <h2 className="text-4xl font-bold mb-8 tracking-wide">Contact TUW</h2>
          <p className="text-gray-300 text-lg">Email: luttetuw@gmail.com</p>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400 backdrop-blur-xl bg-black/40">
          © 2001 - 2026 CLUB DE LUTTE TUW INC. TOUS DROITS RÉSERVÉS.
        </footer>

      </div>
    </div>
  );
}
