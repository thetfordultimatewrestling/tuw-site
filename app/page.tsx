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
      src="/Images/Banner_Ultimate_Revolution_2026.png"
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
    Achetez Vos Billets
  </a>
  
    {/* Calendar Image */}
  <div className="mt-12">
    <img
      src="/Images/calendrier-2026.png"  // adjust extension if needed
      alt="TUW 2026 Event Calendar"
      className="mx-auto rounded-2xl shadow-xl w-full max-w-3xl object-contain"
    />
  </div>
</section>
{/* ROSTER */}
<section id="roster" className="py-20 bg-zinc-950 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">
      Featured Talent
    </h2>

    <div className="grid md:grid-cols-3 gap-8 text-center">
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
        { name: "Mr. VIP Mitch Thompson", Image: "/Images/mitch-thompson.png" },
        { name: "Muundo", image: "/Images/muundo.png" },
        { name: "Pezz", image: "/Images/pezz.png" },
        { name: "SeXXXy Eddy", image: "/Images/sexxxy-eddy.png" },
        { name: "Tony Icon", image: "/Images/tony-icon.png" },
        { name: "Tyler Nox", image: "/Images/tyler-nox.png" },
        { name: "Yan Lambino", image: "/Images/yan-lambino.png" },
        { name: "Ziggy McGoth", image: "/Images/ziggy-mcgoth.png" },
      ].map((wrestler) => (
        <div
          key={wrestler.name}
          className="bg-zinc-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <img
            src={wrestler.image}
            alt={wrestler.name}
            className="rounded-xl w-full h-64 object-contain mb-4"
          />
          <h3 className="text-xl font-bold">{wrestler.name}</h3>
        </div>
      ))}
    </div>
  </div>
</section>      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Contact TUW</h2>
        <p>Email: luttetuw@gmail.com</p>
      </section>

    </div>
  );
}