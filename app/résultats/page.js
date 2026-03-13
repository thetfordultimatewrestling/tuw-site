"use client";

import { useState } from "react";

export default function Résultats() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/Images/website-backgroundf.png')",
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">

              <div className="flex space-x-8 text-sm tracking-wide">
                <a href="/#events" className="hover:text-red-400 transition">Spectacles</a>
                <a href="/#calendrier" className="hover:text-red-400 transition">Calendrier</a>
                <a href="/media" className="hover:text-red-400 transition">Media</a>
                <a href="/roster" className="hover:text-red-400 transition">Roster</a>
                <a href="/résultats" className="hover:text-red-400 transition">Résultats</a>
                <a href="/partenaires" className="hover:text-red-400 transition">Partenaires</a>
                <a href="/apropos" className="hover:text-red-400 transition">À Propos</a>
                <a href="/recrutement" className="hover:text-red-400 transition">Recrutement</a>
                <a href="/#contact" className="hover:text-red-400 transition">Contact</a>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 items-center">

                <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/facebook.png" alt="Facebook" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/instagram.png" alt="Instagram" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/youtube.png" alt="YouTube" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/spotify.png" alt="Spotify" className="h-6 hover:scale-110 transition"/>
                </a>

                <a href="https://independentwrestling.tv/promotion/thetford-ultimate-wrestling" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/iwtv.png" alt="IWTV" className="h-6 hover:scale-110 transition"/>
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

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-zinc-800">

              <div className="flex flex-col items-center space-y-6 py-8 text-lg">

                <a href="/#events" onClick={() => setMenuOpen(false)}>Spectacles</a>
                <a href="/#calendrier" onClick={() => setMenuOpen(false)}>Calendrier</a>
                <a href="/media" onClick={() => setMenuOpen(false)}>Media</a>
                <a href="/roster" onClick={() => setMenuOpen(false)}>Roster</a>
                <a href="/résultats" onClick={() => setMenuOpen(false)}>Résultats</a>
                <a href="/partenaires" onClick={() => setMenuOpen(false)}>Partenaires</a>
                <a href="/apropos" onClick={() => setMenuOpen(false)}>À Propos</a>
                <a href="/recrutement" onClick={() => setMenuOpen(false)}>Recrutement</a>
                <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>

                {/* Mobile Socials */}
                <div className="flex justify-center space-x-6 pt-4">

                  <a href="https://www.facebook.com/thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/facebook.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://www.instagram.com/thetfordultimatewrestling/" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/instagram.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://www.youtube.com/@thetfordultimatewrestling" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/youtube.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://open.spotify.com/intl-fr/artist/6g5i1jqEKNi7zKCfABPfsB" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/spotify.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                  <a href="https://independentwrestling.tv/promotion/thetford-ultimate-wrestling" target="_blank" rel="noopener noreferrer">
                    <img src="/Images/iwtv.png" className="h-6 hover:scale-110 transition"/>
                  </a>

                </div>

              </div>

            </div>
          )}

        </nav>

        {/* PAGE CONTENT */}
        <section className="pt-40 pb-24 px-6 text-center">
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-zinc-900/60 p-10 rounded-3xl border border-zinc-800 shadow-2xl">

            <h1 className="text-5xl font-bold mb-7 tracking-wide">
              Original Kickoff 2025 - 25 janvier 2025
              Studio Paul Hébert, Thetford Mines
            </h1>
            
            <img
              src="/Images/resultats_jan2025.png"
              alt="Résultats Original Kickoff 2025"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
            On ouvre le spectacle avec Mike Marston qui nous annonce qu'il doit malheureusement remettre son titre TUW du à une blessure et sera absent pour une période indéterminée. Nous lui souhaitons prompt rétablissement! 

            Chase Ironside qui devait à l'origine affronter Marston pour le championnat TUW annonce qu'il aura finalement une chance de devenir champion à March Madness puisqu'il est qualifié comme aspirant à un combat de championnat lors de cet événement. C'est alors que Tony Icon se pointe et nous apprend que Chase devra battre un adversaire redoutable ce soir afin de se qualifier au match pour le titre vacant de la TUW.  Nul autre que Karl Jepson! 

            Chase Ironside bat Karl Jepson pour devenir officiellement aspirant au titre tel que mentionné plus tôt et ce à la grande déception de Tony Icon

            Carloss Gonzales conserve le championnat UWD contre le géant de St-Casimir Matt Falco. 
            
            Un tout nouveau concept est présenté aux spectateurs.  Le 'Lucky 7 Scramble' 

            Sept lutteurs auront la chance de mettre la main sur un billet d'or afin d'être éligible à un combat spécial ou le gagnant remportera la somme de 5000$ . Les billets d'or peuvent être gagnés dans un combat, une épreuve ou même trouvé dans une cachette dans la salle. Bonne chance à tous! 

            Sexxxy Eddy gagne sa place dans le 'Lucky 7 Scramble' en battant Jason Petitclerc 

            Scott Matrix vient à bout de Mr.VIP Mitch Thompson malgré les interventions de Tony Icon aux abords du ring. 

            Les 2 membres du Icon Club attaquent Scott après le combat mais Mr.Brown effectue un retour et vient à sa rescousse! Un uppercut pour Mitch! un uppercut pour Tony!  Les gens sont content de voir ça 

            Mr.Brown prend ensuite la parole pour prédire la fin imminente du Icon Club. À suivre...
             
            Alors que Scott Matrix est encore dans le ring. Une vidéo mystérieuse annonçant le retour d'un lutteur est diffusé à l'écran.  On en sais pas plus pour l'instant 

            Alors que le triple menace féminin s'apprêtait à commencer. Carlos s'amène au ring pour faire la cour aux jolies demoiselles dans l'arène.  Mais également pour offrir une chance à la gagnante d'avoir une 'date' avec lui ET une chance pour son titre UWD qu'il détient depuis plus d'un an! ...Intéressant
            
            Dreya Mitchell se sauve avec la victoire contre Kacey Diamond & Kristara dans un excellent match triple menace qui nous a bien démontré pourquoi ces 3 lutteuses font parti des meilleurs au Québec 

            En backstage, Carloss s'empiffre de tout les tablettes de chocolat qu'il a pu trouver dans l'espoir de trouvé un billet d'or à l'intérieur.  Une fois endormi et si prêt du but. Carloss se fait volé le billet d'or caché dans la toute dernière tablette qui lui restait par une personne inconnu  

            Muundo l'emporte contre Johnny Rush dans un 2 de 3 sans disqualification! 

            Le Racoon Jason Petitclerc frustré d'avoir perdu son match ce soir croise un Ziggy en pleine célébration d'avoir trouvé un billet d'or.   Jason ne perd pas de temp à l'attaquer et quitté la salle avec son billet en main  

            Les invincibles conservent les Championnats par équipe contre Capitaine Pezz et Jake Madison. 
            
            Les deux équipes se sert la main à la fin du combat.  Nous pensions finir cette soirée sur une note positive mais TDT (Mathieu St-Jacques & Thomas Dubois) en ont décidé autrement en attaquant les 2 équipes ainsi que le staff et les arbitres de la TUW. C'était un véritable carnage dans l'arène. Les 2 vétérans se sont acharnés sur la jambe du pauvre Marko Estrada avec une chaise et se sont sauvés avec les ceintures par équipes.   Des débuts remarqués pour TDT à la TUW c'est le moin qu'ont puissent dire!             
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