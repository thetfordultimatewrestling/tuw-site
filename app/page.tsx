export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-bold text-xl">TUW</h1>
          <div className="space-x-6 hidden md:block">
            <a href="#events">Events</a>
            <a href="#roster">Roster</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-b from-red-900 to-black">
        <h1 className="text-5xl font-extrabold mb-6">
          THETFORD ULTIMATE WRESTLING
        </h1>
        <p className="text-gray-300 mb-8">
          Québec’s premier independent wrestling promotion.
        </p>
        <a
          href="https://lepointdevente.com/tickets/tuwultimaterevolution2026"
          target="_blank"
          className="bg-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition"
        >
          Buy Tickets
        </a>
      </section>

      {/* EVENT */}
      <section id="events" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ultimate Revolution III</h2>
        <p className="mb-2">April 25, 2026 – 7:00 PM</p>
        <p className="text-gray-400 mb-6">
          Centre Récréatif de Robertsonville
        </p>
        <a
          href="https://lepointdevente.com/tickets/tuwultimaterevolution2026"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Get Your Seats
        </a>
      </section>

      {/* ROSTER */}
      <section id="roster" className="py-20 bg-zinc-950 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Talent
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              "Buxx",
              "Tony Icon",
              "Dreya Mitchell",
              "Leah Sparks",
              "Jonny Rush",
              "Shane Pinto",
            ].map((name) => (
              <div
                key={name}
                className="bg-zinc-900 p-8 rounded-2xl shadow-xl"
              >
                <div className="h-40 bg-red-800 rounded-xl mb-4"></div>
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Contact TUW</h2>
        <p>Email: thetfordultimatewrestling@gmail.com</p>
      </section>

    </div>
  );
}