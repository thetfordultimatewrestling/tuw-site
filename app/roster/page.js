"use client";

import { useState } from "react";

export default function Roster() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">

      {/* ================= FIXED BACKGROUND ================= */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundImage: "url('/Images/website-backgrounde.png')",
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

                {/* ================= ROSTER ================= */}
        <section id="roster" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">

            {/* Champions Subsection */}
            <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">Champions</h2>

            <div className="space-y-8 mb-20">

              {/* Champion TUW */}
              <div className="flex flex-col md:flex-row items-center bg-black/60 border border-red-600/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <img src="/Images/marko-champion.png" alt="Champion TUW" className="w-105 h-85 object-cover rounded-2xl mb-6 md:mb-0 md:mr-8"/>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Champion TUW</h3>
                  <p className="text-gray-400">
                    Marko Estrada, ancien des Invincibles avec Franky The Mobster, a trahi son partenaire en s’alliant secrètement à Tony Icon pour devenir champion de la TUW. 
                    Après avoir sécurisé sa chance au titre contre Buxx Belmar, il a remporté l’or, expulsé Tony et Scott Matrix, puis dissous le Icon Club. 
                    Il dirige maintenant La Classe Supérieure avec Dreya Mitchell, DGenerate et Mitch Thompson. Un clan qui possède tous les titres de la compagnie.
                  </p>
                </div>
              </div>

              {/* Champions par Équipe TUW */}
              <div className="flex flex-col md:flex-row items-center bg-black/60 border border-red-600/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <img src="/Images/classe-sup-champion.png" alt="Champions par Équipe TUW" className="w-105 h-85 object-cover rounded-2xl mb-6 md:mb-0 md:mr-8"/>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Champions par Équipe TUW</h3>
                  <p className="text-gray-400">
                    À Feast N’ Best 3, Marko Estrada a trahi son partenaire Franky The Mobster en plein combat contre Mitch Thompson et DGenerate, alors membres du Icon Club. 
                    Après deux splash dévastateurs sur Franky, Marko a quitté le ring, laissant FTM inconscient. Mitch et DGenerate en ont profité pour devenir champions par équipe de la TUW. 
                    Aujourd’hui, le Icon Club n’est plus, et Mitch ainsi que DGenerate font désormais partie de La Classe Supérieure aux côtés de Marko Estrada et Dreya Mitchell.
                  </p>
                </div>
              </div>

              {/* Championne */}
              <div className="flex flex-col md:flex-row items-center bg-black/60 border border-red-600/40 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                <img src="/Images/dreya-champ.png" alt="Championne Ultimate Wrestling Division" className="w-105 h-85 object-cover rounded-2xl mb-6 md:mb-0 md:mr-8"/>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Championne Ultimate Wrestling Divison</h3>
                  <p className="text-gray-400">
                    Le 22 mars 2025 à March Madness IX, Dreya Mitchell est devenue championne de la TUW en battant par surprise Carloss Gonzales dans le combat le plus court de l’histoire de la TUW. 
                    Après avoir gagné son contrat à Original Kickoff face à Kacey Diamond et Kristara, elle a manipulé la situation pour frapper au moment parfait. 
                    Invaincue depuis novembre 2024, elle détient toujours le titre et la plus longue séquence de victoires de la compagnie. Elle fait partie du club de Marko Estrada, La Classe Supérieure aux côtés de Mitch Thompson et DGenerate.
                  </p>
                </div>
              </div>

            </div>

            {/* Roster Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
              {[
                { name: "Audrey Moreau", image: "/Images/audrey-moreau.png", bio: "Ancienne intervieweuse de la TUW, Audrey Moreau est désormais l’assistante de Dani Leo. Bien qu’elle soit naturellement chaleureuse avec les fans et les lutteurs, Dani lui interdit de trop s’attacher. Coincée entre sa gentillesse et les exigences de Dani, Audrey sert d’interprète pour transmettre ses messages au public." },
                { name: "Bjorg", image: "/Images/bjorg.png", bio: "Bjorg, lutteur ayant foulé les rings des plus grandes villes du monde — Paris, Londres, New York — est également présent à la TUW depuis le retour de la promotion en 2023. Imposant et méthodique, il sait parfaitement neutraliser ses adversaires lorsque le moment vient." },
                { name: "Bryan Gingras", image: "/Images/bryan-gingras.png", bio: "Bryan Gingras est l’interlocuteur événementiel de la TUW. Toujours dans le feu de l’action, il recueille les réactions des talents avant et après leurs matchs, au cœur même de l’intensité des événements." },
                { name: "Buxx Belmar", image: "/Images/buxx-belmar.png", bio: "Buxx Belmar a conquis la foule dès son arrivée à la TUW à March Madness IX. Devenu champion dès sa deuxième apparition, il s’est imposé comme le favori du public. Après plus de 300 jours de règne, son parcours dominant s’est terminé lorsque Marko Estrada lui a arraché le titre… aidé par les manigances de son clan." },
                { name: "Carloss Gonzales", image: "/Images/carloss-gonzales.png", bio: "Carloss Gonzales est l’un des grands favoris de la foule grâce à son style explosif. Ancien champion Ultimate Wrestling Division, il charme les dames et fait rougir les demoiselles partout où il passe. Il fait équipe avec SeXXXy Eddy au sein du duo flamboyant Les Chaud Stoppers." },
                { name: "Dani Leo", image: "/Images/dani-leo.png", bio: "Dani Leo est l’une des lutteuses les plus détestées de la TUW. Toujours arrogante et exigeante, elle veut que tout tourne autour d’elle et se considère comme le centre de l’attention. Elle a récemment engagé Audrey Moreau pour traduire ses paroles au « disgusting » public de Thetford Mines… et pour porter ses sacs. Dans le ring, elle est sournoise, rapide et prête à tout pour gagner." },
                { name: "DGenerate", image: "/Images/dgenerate.png", bio: "DGenerate, champion par équipe TUW aux côtés de Mr VIP Mitch Thompson, est l’un des lutteurs les plus dégénérés, impulsifs et flamboyants de la TUW. Très émotif, il reste pourtant redoutable dans le ring. Ancien champion TUW et membre de la Classe Supérieure avec Marko Estrada, Mitch Thompson et Dreya Mitchell, il fait toujours sentir sa présence sur chaque match." },
                { name: "Dreya Mitchell", image: "/Images/dreya-mitchell.png", bio: "Dreya Mitchell, actuelle championne Ultimate Wrestling Division, a brisé les barrières en devenant la première femme à détenir ce titre autrefois réservé aux hommes. Rusée, puissante et rapide, elle reste invaincue depuis son arrivée à la TUW en novembre 2024. Championne depuis un an, Dreya fait partie de la Classe Supérieure aux côtés de Marko Estrada, Mitch Thompson et DGenerate, imposant sa domination sur tous ses adversaires." },
                { name: "Francis", image: "/Images/francis.png", bio: "Francis, ancien lutteur ayant fait ses preuves à travers le Québec, l’Ontario et les États-Unis, est désormais le Directeur des Opérations de la TUW. Sa présence backstage le conduit parfois de l’autre côté du rideau pour calmer les talents enflammés. Toujours impartial, il garde le contrôle et veille au bon déroulement des événements." },
                { name: "Franky The Mobster", image: "/Images/franky-the-mobster.png", bio: "Franky The Mobster, vétéran et figure emblématique de la lutte québécoise, est un lutteur imprévisible et toujours prêt à exploser. Puissant et imposant, il domine non seulement la TUW, mais partout où il passe. Ancien partenaire de Marko Estrada sous le nom des Invincibles, il a été trahi par son ancien allié et son clan, et trace désormais sa route en solitaire." },
                { name: "Fred Romeo", image: "/Images/fred-romeo.png", bio: "Fred Romeo, la crème italienne, est un lutteur explosif qui se fait rapidement remarquer partout où il passe. Franc et direct, il proclame haut et fort que la TUW est son carré de sable. Bien qu’on le lie à la mafia de la lutte québécoise, il a toujours nié ces rumeurs. Redouté par la majorité des talents backstage, Fred impose sa présence autant sur le ring qu’en coulisses." },
                { name: "Ghislain", image: "/Images/ghislain.png", bio: "Ghislain est l’annonceur maison de la TUW depuis ses débuts en 2001. Véritable figure originale de la fédération, il apporte une énergie explosive et reste toujours au cœur de l’action, fidèle à son poste et à l’esprit de la TUW." },
                { name: "Heavy Rox", image: "/Images/heavy-rox.png", bio: "Heavy Rox est l’une des meilleures lutteuses du Québec et une figure incontournable de la TUW. Son style hybride mêle rapidité, technique et puissance, avec des frappes qui font mal. Dans le ring, son côté rebelle ressort pleinement, donnant à son style une allure anarchique et imprévisible." },
                { name: "Jake Madison", image: "/Images/jake-madison.png", bio: "Jake “La Paix” Madison est l’un des lutteurs les plus sous-estimés de la TUW. Agile et rapide, il sait saisir chaque opportunité qui se présente. Pacifiste convaincu, il chérit son calumet de la paix, mais ses combats révèlent parfois un côté mystérieux : on peut le voir disparaître sous le ring pour réapparaître… dans un nuage de fumée pour le moins discutable." },
                { name: "Jonny Rush", image: "/Images/jonny-rush.png", bio: "Jonny Rush est un lutteur réputé pour son style haute-voltige. Avec une forme physique exceptionnelle, il frappe fort et réalise des manœuvres rares qui défient la gravité. À ses côtés, son mentor Shane Pinto l’accompagne, guidant ce talent spectaculaire au cœur de la TUW." },
                { name: "Kristara", image: "/Images/kristara.png", bio: "Kristara, nommée lutteuse #1 au Québec et présente dans le fameux PWI 500 ces deux dernières années, est l’une des meilleures lutteuses du Canada et parmi les 500 meilleures au monde. Collectant les titres partout où elle passe, elle cumule les victoires à la TUW et, malgré un horaire chargé dû à ses combats à travers le Canada, reste une présence régulière et redoutable dans la promotion." },
                { name: "Leah Sparks", image: "/Images/leah-sparks.png", bio: "Leah Sparks, nommée recrue de l’année 2025, est sans doute la lutteuse la plus agile et athlétique de la TUW. Ce véritable firecracker combine haute voltige et frappes puissantes. Extrêmement souple, elle réalise des manœuvres que personne d’autre n’oserait tenter, impressionnant à chaque combat." },
                { name: "Marko Estrada", image: "/Images/marko-estrada.png", bio: "Marko Estrada est l’un des visages emblématiques de la lutte au Québec. À la TUW pour une seule raison : dominer. Champion TUW et leader de la Classe Supérieure avec Mitch Thompson, Dreya Mitchell et DGenerate, il allie un style extrêmement athlétique à une dangerosité redoutable, faisant de lui l’un des lutteurs les plus puissants de la promotion. Ancien partenaire de Franky The Mobster dans Les Invincibles, Marko l’a trahi pour accomplir sa mission : devenir le visage de la TUW, le champion incontesté… et le lutteur le plus détesté de tous." },
                { name: "Minus", image: "/Images/minus.png", bio: "Minus est l’arbitre senior de la TUW, présent dans la promotion depuis 2004. Lorsqu’il entre dans le ring, il impose la loi et veille à ce que chaque match se déroule selon les règles, avec rigueur et autorité." },
                { name: "Mister Brown", image: "/Images/mister-brown.png", bio: "Mister Brown, ancien champion TUW, est surnommé le King of Hardcore et n’a peur de rien. Agile dans le ring, il excelle particulièrement lorsque les règles disparaissent : en combats hardcore, rares sont les occasions où Brown ne sort pas vainqueur." },
                { name: "Mitch Thompson", image: "/Images/mitch-thompson.png", bio: "Mr VIP Mitch Thompson figure régulièrement dans le top 10 des meilleurs lutteurs du Québec et est reconnu comme l’un des meilleurs spécialistes de la haute voltige de la province. Champion par équipe de la TUW aux côtés de DGenerate et membre de la Classe Supérieure avec Marko Estrada, DGenerate et Dreya Mitchell, Mitch allie agilité exceptionnelle et style sournois, rendant chacun de ses combats imprévisible et redoutable." },
                { name: "Muundo", image: "/Images/muundo.png", bio: "Muundo est l’un des lutteurs les plus puissants et explosifs de la TUW. Aimé du public, il est devenu un visage emblématique depuis le retour de la promotion en 2023 : lorsqu’on pense TUW, on pense Muundo." },
                { name: "Nitzz", image: "/Images/nitzz.png", bio: "Nitzz est l’un des lutteurs au physique le plus impressionnant de la scène québécoise. Puissant et stratégique, il combine force et intelligence dans le ring, ce qui fait de lui un adversaire redoutable à chaque combat." },
                { name: "Pezz", image: "/Images/pezz.png", bio: "Pezz, anciennement Capitaine Pezz, est l’un des rares à être présent à la TUW depuis ses débuts en 2001. Ancien champion TUW, il a pris un tournant sombre en 2025 : après son attaque sur son ancien partenaire Jake Madison en tant que The High Seas, Pezz n’est plus le même. Très imprévisible, son style puissant et dominant, unique à la TUW, fait de lui un adversaire redoutable." },
                { name: "Sexxxy Eddy", image: "/Images/sexxxy-eddy.png", bio: "SeXXXy Eddy est une légende de la lutte au Québec. L’un des premiers lutteurs indépendants québécois à franchir la frontière pour lutter aux États-Unis dès 2003, Eddy amène l'expérience et il est l’un des talents les plus divertissants de la TUW. En équipe avec Carloss Gonzales, formant Les Chaud Stoppers, Eddy possède quelque chose dans le backstage que peu de talents ont… 5 lbs de… " },
                { name: "Shane Pinto", image: "/Images/shane-pinto.png", bio: "Sugar Shane Pinto est l’un des gérants les plus bruyants et charismatiques de la scène québécoise. Mentor de Jonny Rush, il travaille sans relâche pour propulser son protégé au sommet. Bien qu’il soit sur la scène depuis seulement quelques années, sa présence est partout, et lorsqu’il le souhaite, Shane peut aussi entrer dans le ring, prouvant qu’il est l’un des gérants les plus mémorables depuis longtemps." },
                { name: "Tony Icon", image: "/Images/tony-icon.png", bio: "Tony Icon, présent depuis le tout début de la TUW en 2001, a longtemps été le visage le plus détesté de la promotion, autant backstage que devant le public. Maître de son destin et de son fameux Icon Club, il avait souvent le dernier mot… jusqu’à récemment. Architecte de la trahison de Marko Estrada sur Franky The Mobster, Tony a lui-même été trahi par Marko et a tout perdu." },
                { name: "Tyler Nox", image: "/Images/tyler-nox.png", bio: "Tyler Nox est sans aucun doute l’un des lutteurs les plus voyagés du Québec. Après une incroyable année 2025, il est partout, et la TUW ne fait pas exception. Présent dans des combats importants malgré un horaire très chargé, Tyler livre toujours la marchandise lorsqu’il foule le ring de la promotion." },
                { name: "Yan Lambino", image: "/Images/yan-lambino.png", bio: "Yan Lambino, arbitre de la TUW depuis le retour de la promotion en 2023, est l’un des arbitres les plus respectés du Québec. Imposant et rigoureux, il fait la loi dans le ring et officie souvent lors des combats impliquant nos invités internationaux." },
                { name: "Ziggy McGoth", image: "/Images/ziggy-mcgoth.png", bio: "Ziggy McGoth fait partie de la famille McGoth, une fratrie dysfonctionnelle de frères masqués connus pour leur style imprévisible et leur énergie débridée, alimentée par les boissons énergisantes. Favori des enfants, Ziggy offre toujours un spectacle haut en couleur dans le ring. Peu victorieux, il donne néanmoins toujours son 110 %, captivant le public à chaque apparition." },

              ].map((wrestler) => (
               <div
                 key={wrestler.name}
                 onClick={() =>
                   setActiveCard(activeCard === wrestler.name ? null : wrestler.name)
                 }
                 className="relative group bg-black/60 border border-red-600/40 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 cursor-pointer" 
                >

                  <img
                    src={wrestler.image}
                    alt={wrestler.name}
                    className="w-full h-96 object-contain transition duration-500 group-hover:scale-110"
                   />

    {/* Overlay (Hover on Desktop / Tap on Mobile) */}
<div
  className={`absolute inset-0 flex flex-col justify-end transition-all duration-500 ${
    activeCard === wrestler.name
      ? "opacity-100"
      : "opacity-0 group-hover:opacity-100"
  }`}
>

  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

  {/* Text panel */}
  <div className="relative p-6 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">

    <h3 className="text-xl font-bold text-red-400 mb-2">
      {wrestler.name}
    </h3>

    <p className="text-gray-300 text-sm leading-relaxed">
      {wrestler.bio}
    </p>

  </div>

</div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-400 backdrop-blur-xl bg-black/40">
          © 2001 - 2026 CLUB DE LUTTE TUW INC. TOUS DROITS RÉSERVÉS.
        </footer>

      </div>
    </div>
  );
}