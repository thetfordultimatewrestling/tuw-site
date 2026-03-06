export default function Partenaires() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* BACKGROUND */}
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

      {/* PAGE CONTENT */}
      <div className="relative z-10 min-h-screen pt-32 px-6 text-center">

        <h1 className="text-5xl font-bold mb-16">Partenaires</h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-20">
          La TUW remercie ses partenaires qui contribuent au succès de nos
          événements et au développement de la lutte professionnelle à
          Thetford Mines.
        </p>

        {/* PARTNERS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20 items-center">

          <img
            src="/Images/Aqua-Beauce.png"
            alt="AquaBeauce"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />

          <img
            src="/Images/Arsenal-media.png"
            alt="Arsenal Media"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />

          <img
            src="/Images/Canac.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />

          <img
            src="/Images/Cinema-pigalle.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />

          <img
            src="/Images/Desmarais.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />

          <img
            src="/Images/La-face-de-boeuf.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />

          <img
            src="/Images/Pabst.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/Pawpaw-Snack.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/PFK.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/Pizz-du-boul.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/Pro-Design.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/Sonospec.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/Tram.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/Unicab.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
          <img
            src="/Images/XPN.png"
            alt="Canac Thetford Mines"
            className="mx-auto h-40 object-contain hover:scale-110 transition duration-300"
          />
          
        </div>

      </div>
    </div>
  );
}