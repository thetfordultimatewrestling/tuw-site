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
           <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h1 className="text-2xl font mb-7 tracking-wide">
              Final Round 2025 - 17 mai 2025 - 
              Centre Multifonctionnel, Saint-Ephrem
            </h1>
            
            <img
              src="/Images/resultats_juin2025.png"
              alt="Résultats Résilience 2"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />


          </div>
        </section>

        
        <section className="pt-40 pb-24 px-6 text-center">
           <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h1 className="text-2xl font mb-7 tracking-wide">
              Résilience 2 (Co-organisé par Noémie Lessard et Chantal Vachon) - 7 juin 2025 - 
              Centre des Loisirs Desjardins, East Broughton
            </h1>
            
            <img
              src="/Images/resultats_juin2025.png"
              alt="Résultats Résilience 2"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Alors que notre animateur maison, Ghislain, accueille les fans pour le début du spectacle, SeXXXy Eddy est poussé vers le ring par Fred Romeo — celui qui semble être le chef de l’organisation à qui Eddy doit beaucoup d’argent. Eddy est contraint d’annoncer qu’il doit quitter la TUW et céder sa place à Romeo.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Mais, au dernier moment, il décide plutôt de lancer un défi : un combat ce soir. S’il gagne, il n’aura plus de dettes et conservera sa place au sein de la TUW. Fred Romeo accepte et lui assène un coup au visage, histoire de lui donner un avant-goût de ce qui l’attend plus tard dans la soirée.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Carloss Gonzales espérait pouvoir régler le conflit qui l’oppose à Dreya Mitchell, refusant de se battre contre elle dès le son de la cloche, aveuglé par ses sentiments. Alors qu’il était sur le point d’être décompté à l’extérieur par l’officiel, il se décide enfin à affronter la championne. Malgré ses efforts, cela ne suffit pas pour décrocher la victoire. Dreya Mitchell conserve donc le championnat UWD.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Dans un combat à cinq pour déterminer l’aspirant numéro un au titre de la TUW, Chester Doan s’échappe avec la victoire de façon opportuniste face à Muundo, Scott Matrix, Nittz et Jonny Rush.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Après le combat, Tony Icon s’en prend à Scott Matrix et lui lance un ultimatum : s’il perd leur prochain affrontement, il devra rejoindre le Icon Club.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Mr. Brown l'emporte sur Mitch Thompson et ce malgré les interventions de Tony Icon, dans un combat solide qui a tenu la foule en haleine du début à la fin.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Jake Madison remporte le Street Fight contre Pezz dans un affrontement intense rempli de chaises, de kendo sticks, de portes et de chaos. L’intensité était à son comble, surtout lorsque le père de Jake Madison est intervenu pour frapper Pezz à la tête avec une guitare permettant à son fils d'obtenir la victoire.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Jason Petitclerc et Jeremy Prophet créent la surprise en l’emportant face à PCO et Franky The Mobster.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Fidèle à lui-même, PCO a une fois de plus impressionné la foule avec sa performance. Le Racoon Jason Petitclerc a obtenu le compte de trois sur Franky The Mobster, offrant ainsi la victoire à son équipe.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
SeXXXy Eddy peut enfin dormir sur ses deux oreilles après avoir vaincu Fred Roméo. Ce fut une tâche ardue de venir à bout de ce nouveau venu à la TUW, mais Eddy est désormais libre de ses dettes. Du moins, c’est ce qu’il croyait.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Fred Roméo affirme qu’il ne faut jamais faire confiance à un Italien. Eddy est peut-être encore membre de la TUW, mais il doit toujours de l’argent au véritable grand patron, qui n’est pas Fred Roméo.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Et alors qu’il quitte le ring, SeXXXy Eddy se fait kidnapper.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Affaire à suivre.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
En coulisses, on aperçoit un Tony Icon choqué, en colère contre le Icon Club (Mitch et DGenerate). Il affirme que le club est devenu trop « mou ».
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
DGenerate n’apprécie pas du tout cette remarque. Il veut prouver qu’il est un lutteur solide, à ne surtout pas sous-estimer. Il se dirige alors directement vers le ring pour lancer un défi à Rhino pour Résilience, le 7 juin prochain. Et il compte bien l’affronter en tant que champion TUW, après avoir battu Buxx Belmar ce soir.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Dirtman Buxx Belmar l’emporte sur DGenerate dans un excellent combat et conserve son championnat TUW.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Un affrontement intense qui confirme une fois de plus pourquoi Buxx est au sommet de la division.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
L'aspirant au titre Chester Doan vient féliciter son ami de longue date, Buxx Belmar et lui souhaiter bonne chance pour leur affrontement à TUW Résilience 2. Les deux hommes se serrent la main.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Chester tente ensuite d’attaquer Buxx dans le dos, mais ce dernier l’attendait de pied ferme avec un superkick, que Chester parvient à contrer.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Le 7 juin, leur amitié ne changera rien. Chester nous assure qu’il fera tout pour devenir le nouveau champion.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Ensemble, nous avons amassé un total de $9,000.00 pour Leucan! Merci à tous d'avoir donné autant!
</p>

          </div>
        </section>
        
        <section className="pt-40 pb-24 px-6 text-center">
           <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h1 className="text-2xl font mb-7 tracking-wide">
              Ultimate Revolution II - 25 avril 2025 - 
              Centre Multifonctionnel, Saint-Ephrem
            </h1>
            
            <img
              src="/Images/resultats_avr2025.png"
              alt="Résultats Ultimate Revolution II"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Pee Wee s'amène au ring pour une célébration de sa récente conquête du championnat TUW. Il nargue Chase Ironside au passage en mentionnant qu'il est très confiant de conserver sa ceinture ce soir dans la grande finale.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Sugar Shane Pinto s'est entretenu en coulisse avec les champions par équipes IWTV Fresh Air : Junior Benito et Macrae Martin. Ils nous assurent qu'ils repartiront chez eux en tant que doubles champions par équipe après avoir battu les Invincibles. Rien de moins.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Les Invincibles (Marko Estrada et Franky The Mobster) conservent leurs championnats par équipe contre Fresh Air.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Scott Matrix s'adresse aux fans pour nous rappeler qu'il a gagné son droit d'affronter Tony Icon lors de March Madness le mois passé. Tony donne du fil à retordre à Scott depuis son retour à la TUW et il n'a pas fait exception cette fois en lui envoyant le colosse Bjorg comme adversaire. Scott devra patienter encore un peu avant d'avoir son match tant attendu.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Bjorg l'emporte sur Scott Matrix grâce à la distraction de Mckenrose. Tony en a profité pour porter un superkick à Matrix pendant que l'officiel avait le dos tourné.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Buxx Belmar a le dessus sur Tyler Nox, Mitch Thompson, Mr. Brown, Kristara et SeXXXy Eddy dans un solide combat d'échelles. Avec cette victoire, il obtient une chance au championnat TUW à n'importe quel moment de son choix.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Mr. Brown et Mitch Thompson ont passé la majeure partie du match à se battre entre eux. La rivalité entre ces deux-là ne semble pas être terminée.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
La direction de la TUW craignait que SeXXXy Eddy soit absent du match, lui qui s'est mis dans un sacré pétrin après le Lucky 7 Scramble en flambant son 5000 $ dans le temps de le dire. Il a finalement retrouvé son chemin au grand plaisir de tous.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Une grande annonce est diffusée à l'écran. Nul autre que PCO sera présent lors de Final Round, notre prochain spectacle le 17 mai.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Pezz gagne contre un Carloss visiblement encore ébranlé par sa défaite de March Madness IX et de la tournure des événements avec Dreya Mitchell.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Après le combat, Pezz s'adresse à la mère de Jake Madison. Ses paroles lui ont mérité une gifle au visage. Pezz a ensuite voulu s'en prendre à elle, mais heureusement Jake Madison est sorti de la foule pour défendre sa mère. S'en est suivi un chaos total impliquant la sécurité de la TUW, qui a dû travailler fort pour séparer les deux hommes.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Pezz a tout de même réussi à porter un DDT à Jake Madison qui n'était pas autorisé à performer suite à une commotion subie aux mains de Pezz à March Madness IX. Pezz a dû être expulsé de la salle pour la deuxième fois consécutive par la direction.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Pee Wee s'est retrouvé sans adversaire alors que Tony Icon est venu nous annoncer que Chase Ironside ne sera pas présent ce soir. On n'en sait pas plus sur cette situation pour le moment. Pee Wee croyait bien retourner en coulisse sans même avoir à lutter.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Sauf que Buxx Belmar l'accueille d'un bon coup de valise inattendu et ne perd pas de temps. Il encaisse sa valise remportée plus tôt dans la soirée dans un combat où les tombés comptent partout.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Buxx Belmar l'emporte sur Pee Wee et est couronné nouveau champion TUW dans un combat intense qui s'est déroulé partout dans la salle, même dans les toilettes.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Félicitations au nouveau champion.
</p>

          </div>
        </section>

        
        <section className="pt-40 pb-24 px-6 text-center">
           <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h1 className="text-2xl font mb-7 tracking-wide">
              March Madness IX - 22 mars 2025 - 
              Centre Multifonctionnel, Saint-Ephrem
            </h1>
            
            <img
              src="/Images/resultats_mars2025.png"
              alt="Résultats March Madness IX"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Pee Wee bat Buxx Belmar avec quelques tactiques déloyales durant le combat. Ce qui en a surpris plus d'un.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Dreya Mitchell accompagnée de Carloss l'emporte sur Leon Saver.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Le Icon Club a tenté d'intervenir dans le match. Cependant, ça n'a pas porté fruit puisqu'ils ont été expulsés par l'arbitre, mais également pourchassés par Carloss qui tenait à défendre sa belle Dreya.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
SeXXXy Eddy est déclaré grand gagnant du Lucky 7 Scramble, où il remporte la grande somme de 5000 $. Il bat Jason Petitclerc, Jeremy Prophet, Chester Doan, Jonny Rush et Muundo.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Kristara a le dessus sur Mckenrose dans un combat qui a su démontrer que la TUW a une forte division féminine.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Carloss Gonzales s'amène au ring et confie à Dreya Mitchell qu'il a des sentiments pour elle. Dans un revirement inattendu, elle l'accueille d'une botte au visage pour ensuite nous avouer qu'elle l'a manipulé pendant deux mois pour obtenir la seule chose qu'elle voulait vraiment de lui : sa ceinture UWD.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Elle nous rappelle qu'elle a gagné son droit de combattre pour ce championnat lorsqu'elle a remporté son combat en janvier lors d'Original Kickoff. Un arbitre était déjà sur place pour officialiser le combat qui allait opposer Carloss à un adversaire mystère, qui se trouve à être Dreya.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Dreya Mitchell se sauve avec la victoire contre Carloss en quelques secondes seulement et devient la nouvelle championne Ultimate Wrestling Division. Pauvre Carloss.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Mr. Brown et Barabas gagnent contre Nitzz et Bjorg ainsi que le Icon Club (Mitch et DGenerate) pour devenir les aspirants numéro 1 aux titres par équipe de la TUW.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Scott Matrix l'emporte sur Radikal Rage dans un combat où Tony Icon était l'arbitre spécial.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Grâce à cette victoire, Scott Matrix se mérite une chance de mettre la main au collet de Tony Icon dans un combat un contre un. Un affrontement auquel Tony Icon ne doit pas avoir hâte.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Le Capitaine Pezz et Jake Madison s'amènent au ring. On était tous impatients de savoir qui était l'équipe mystère qui allait affronter ce duo. Le Capitaine lui-même nous annonçait une surprise majeure.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
C'est alors que la musique et la vidéo des Hardy Boyz se font entendre. Les gens sur place n'en croyaient pas leurs yeux. Mais au final, c'était une ruse de la part du Capitaine Pezz qui s'en est pris sauvagement à son partenaire Jake Madison.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
La sécurité a dû intervenir pour sortir Pezz de la salle. Qu'est-ce qui a pu motiver le capitaine à agir ainsi ? Histoire à suivre.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Ensuite avait lieu le combat de championnat vacant de la TUW entre Chase Ironside et Ryan Rogan, qui ont été interrompus en fin de combat par Pee Wee. Il a attendu le moment parfait pour s'imposer au match et encaisser sa valise "Ultimate Cash In" pour finalement remporter le championnat TUW. Incroyable.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Les Invincibles l'emportent contre TDT dans un solide combat non sanctionné par la TUW. Ce combat n'était pas pour les doux, c'est le moins qu'on puisse dire. Un candidat au combat de l'année.
</p>
          </div>
        </section>

        
        <section className="pt-40 pb-24 px-6 text-center">
           <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h1 className="text-2xl font mb-7 tracking-wide">
              Prime Attraction 2025 - 22 février 2025 - 
              Centre Multifonctionnel, Saint-Ephrem
            </h1>
            
            <img
              src="/Images/resultats_fev2025.png"
              alt="Résultats Prime Attraction 2025"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
Jason Petitclerc l'emporte sur Ziggy.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Carloss & Dreya Mitchell gagnent contre Heavy Rox & Chester Doan.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Jonny Rush est couronné grand gagnant du tournoi de bras de fer et obtient un billet d'or pour le Lucky 7 Scramble match!
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Franky The Mobster obtient la victoire sur le géant Elrick.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Ryan Rogan l'emporte sur Kristara, Jonny Rush & SeXXXy Eddy dans un match d'aspirant au titre TUW.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Mr.Brown, Barabas & Scott Matrix l'emportent contre le "Icon Club" : DGenerate, Mitch Thompson & Tony Icon.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
TDT se sauve avec la victoire sur High Seas.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Une grande nouvelle est sortie durant la soirée. Rhino, ancienne vedette de la WWE, ECW, TNA et WCW, sera sur place le 7 juin prochain pour TUW Résilience 2!
</p>
          </div>
        </section>

        <section className="pt-40 pb-24 px-6 text-center">
           <div className="max-w-6xl mx-auto bg-black/60 border border-red-600/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">

            <h1 className="text-2xl font mb-7 tracking-wide">
              Original Kickoff 2025 - 25 janvier 2025 - 
              Studio Paul Hébert, Thetford Mines
            </h1>
            
            <img
              src="/Images/resultats_jan2025.png"
              alt="Résultats Original Kickoff 2025"
              className="mx-auto rounded-2xl shadow-xl w-full max-w-4xl object-contain"
            />

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
On ouvre le spectacle avec Mike Marston qui nous annonce qu'il doit malheureusement remettre son titre TUW du à une blessure et sera absent pour une période indéterminée. Nous lui souhaitons prompt rétablissement!
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Chase Ironside qui devait à l'origine affronter Marston pour le championnat TUW annonce qu'il aura finalement une chance de devenir champion à March Madness puisqu'il est qualifié comme aspirant à un combat de championnat lors de cet événement. C'est alors que Tony Icon se pointe et nous apprend que Chase devra battre un adversaire redoutable ce soir afin de se qualifier au match pour le titre vacant de la TUW. Nul autre que Karl Jepson!
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Chase Ironside bat Karl Jepson pour devenir officiellement aspirant au titre tel que mentionné plus tôt et ce à la grande déception de Tony Icon.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Carloss Gonzales conserve le championnat UWD contre le géant de St-Casimir Matt Falco.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Un tout nouveau concept est présenté aux spectateurs. Le "Lucky 7 Scramble".
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Sept lutteurs auront la chance de mettre la main sur un billet d'or afin d'être éligible à un combat spécial ou le gagnant remportera la somme de 5000$. Les billets d'or peuvent être gagnés dans un combat, une épreuve ou même trouvé dans une cachette dans la salle. Bonne chance à tous!
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Sexxxy Eddy gagne sa place dans le "Lucky 7 Scramble" en battant Jason Petitclerc.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Scott Matrix vient à bout de Mr.VIP Mitch Thompson malgré les interventions de Tony Icon aux abords du ring.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Les 2 membres du Icon Club attaquent Scott après le combat mais Mr.Brown effectue un retour et vient à sa rescousse! Un uppercut pour Mitch! Un uppercut pour Tony! Les gens sont content de voir ça.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Mr.Brown prend ensuite la parole pour prédire la fin imminente du Icon Club. À suivre...
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Alors que Scott Matrix est encore dans le ring, une vidéo mystérieuse annonçant le retour d'un lutteur est diffusée à l'écran. On en sait pas plus pour l'instant.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Alors que le triple menace féminin s'apprêtait à commencer, Carlos s'amène au ring pour faire la cour aux jolies demoiselles dans l'arène, mais également pour offrir une chance à la gagnante d'avoir une "date" avec lui ET une chance pour son titre UWD qu'il détient depuis plus d'un an! ...Intéressant.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Dreya Mitchell se sauve avec la victoire contre Kacey Diamond & Kristara dans un excellent match triple menace qui nous a bien démontré pourquoi ces 3 lutteuses font partie des meilleures au Québec.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
En backstage, Carloss s'empiffre de toutes les tablettes de chocolat qu'il a pu trouver dans l'espoir de trouver un billet d'or à l'intérieur. Une fois endormi et si près du but, Carloss se fait voler le billet d'or caché dans la toute dernière tablette qui lui restait par une personne inconnue.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Muundo l'emporte contre Johnny Rush dans un 2 de 3 sans disqualification!
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Le Racoon Jason Petitclerc, frustré d'avoir perdu son match ce soir, croise un Ziggy en pleine célébration d'avoir trouvé un billet d'or. Jason ne perd pas de temps à l'attaquer et quitte la salle avec son billet en main.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Les Invincibles conservent les Championnats par équipe contre Capitaine Pezz et Jake Madison.
</p>

<p className="text-gray-300 text-lg leading-relaxed mb-6">
Les deux équipes se serrent la main à la fin du combat. Nous pensions finir cette soirée sur une note positive mais TDT (Mathieu St-Jacques & Thomas Dubois) en ont décidé autrement en attaquant les deux équipes ainsi que le staff et les arbitres de la TUW. C'était un véritable carnage dans l'arène. Les deux vétérans se sont acharnés sur la jambe du pauvre Marko Estrada avec une chaise et se sont sauvés avec les ceintures par équipes. Des débuts remarqués pour TDT à la TUW, c'est le moins qu'on puisse dire!
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