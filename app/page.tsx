export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black border-b border-zinc-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* TUW Logo */}
          <img
            src="/Images/tuw-logo.png" // change to your logo path
            alt="TUW Logo"
            className="h-10 w-auto"
          />

          <div className="space-x-6 hidden md:block">
            <a href="#events">Events</a>
            <a href="#roster">Roster</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 text-center bg-gradient-to-b from-red-900 to-black">
        
        {/* Hero Logo Instead of Text */}
        <div className="mb-8">
          <img
            src="/Images/tuw-logo.png" // same logo file
            alt="Thetford Ultimate Wrestling"
            className="mx-auto w-full max-w-3xl object-contain"
          />
        </div>

        <p className="text-gray-300 mb-8">
          LA PASSION, L'IMPLICATION, LE DÉPASSEMENT
        </p>

        <a
          href="https://lepointdevente.com/tuw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition"
        >
          Buy Tickets
        </a>
      </section>
{/* EVENT */}
<section
  id="events"
  className="py-20 max-w-4xl mx-auto px-6 text-center"
>
  {/* Event Image */}
  <div className="mb-8">
    <img
      src="/images/Banner_Ultimate_Revolution_2026.png"
      alt="Ultimate Revolution III Event Poster"
      className="mx-auto rounded-2xl shadow-2xl w-full max-w-2xl object-cover"
    />
  </div>

  <h2 className="text-3xl font-bold mb-6">
    Ultimate Revolution III
  </h2>

  <p className="mb-2">April 25, 2026 – 7:00 PM</p>

  <p className="text-gray-400 mb-6">
    Centre Récréatif de Robertsonville
  </p>

  <a
    href="https://lepointdevente.com/tickets/tuwultimaterevolution2026"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-black px-6 py-3 rounded-xl font-semibold inline-block hover:scale-105 transition-transform"
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
        "Audrey Moreau",
        "Bryan Gingras",
        "Buxx Belmar",
        "Carloss Gonzalez",
        "Dani Leo",
        "DGenerate",
        "Dreya Mitchell",
        "Francis",
        "Franky The Mobster",
        "Fred Romeo",
        "Ghyslain",
        "Heavy Rox",
        "Jake 'La Paix' Madison",
        "Jonny Rush",
        "Kristara",
        "Leah Sparks",
        "Marko Estrada",
        "Minus",
        "Mister Brown",
        "Mr. VIP Mitch Thompson",
        "Muundo",
        "Pezz",
        "SeXXXy Eddy",
        "Tony Icon",
        "Tyler Nox",
        "Yan Lambino",
        "Ziggy McGoth",
      ].map((name) => (
        <div
          key={name}
          className="bg-zinc-900 p-8 rounded-2xl shadow-xl"
        >
          {name === "Marko Estrada" ? (
            <img
              src="Images/marko-estrada.png"
              alt="Marko Estrada"
              className="rounded-xl w-full object-contain"
            />
          ) : (
            <>
              <div className="h-40 bg-red-800 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold">{name}</h3>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Contact TUW</h2>
        <p>Email: luttetuw@gmail.com</p>
      </section>

    </div>
  );
}