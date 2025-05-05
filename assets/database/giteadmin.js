const gitesObjectAdmin = [
    { id: 1, name: 'Chambre 1', price: "35", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation'], status: 'disponible' },
    { id: 2, name: 'Chambre 2', price: "35", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation'], status: 'réservée' },
    { id: 3, name: 'Chambre 3', price: "35", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation'], status: 'disponible' },
    { id: 4, name: 'Chambre 4', price: "35", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation'], status: 'disponible' },
    { id: 5, name: 'Chambre 5', price: "35", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation'], status: 'réservée' },
    { id: 6, name: 'Chambre 6', price: "55", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation', 'Salle de bain - Produits accueil'], status: 'disponible' },
    { id: 7, name: 'Chambre 7', price: "55", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation', 'Salle de bain - Produits accueil'], status: 'en attente' },
    { id: 8, name: 'Chambre 8', price: "55", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation', 'Salle de bain - Produits accueil', 'Terrasse ou véranda privative'], status: 'disponible' },
    { id: 9, name: 'Chambre 9', price: "110", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation', 'Salle de bain - Produits accueil', 'Terrasse ou véranda privative'], status: 'réservée' },
    { id: 10, name: 'Chambre 10', price: "110", image: "assets/images/chambres/chambre-01.png", description: ['Lit Double 160x200', 'Coffre-fort - Bureau', 'Climatisation', 'Salle de bain - Produits accueil', 'Terrasse ou véranda privative'], status: 'disponible' }
];

const espacesGitesObjectAdmin = [
    { id: 1, title: "Cocon douillet - 35€/nuit", image: "assets/images/chambres/chambre-01.png", presentation: "Conçu pour accueillir deux personnes, cet espace chaleureux est l’endroit parfait pour se détendre après une journée d’aventures.", details: "Vous profiterez d'un lit double confortable, d'une décoration soignée, ainsi que d'une salle de bain privative. Le gîte propose également des espaces communs accueillants, dont une cuisine équipée et un salon avec une vue imprenable sur les paysages alentour. À proximité des sentiers de randonnée, cet hébergement est idéal pour les amoureux de nature et de tranquillité.Venez vivre une expérience authentique, où calme et déconnexion sont les maîtres- mots.", status: 'disponible' },
    { id: 2, title: "Chambre familiale spacieuse - 55€/nuit", image: "assets/images/chambres/chambre-01.png", presentation: "Espace familiale confortable pouvant acceuillir jusqu’à cinq personnes. Vous y trouverez un lit double, un lit superposé et un lit simple, parfaits pour offrir un espace de repos à chacun.", details: "Décorée avec soin, la chambre allie charme et praticité, tout en offrant une atmosphère chaleureuse. La salle de bain privative, moderne et fonctionnelle, complète cet espace pensé pour votre confort. À seulement 55 €/nuit, profitez de cet hébergement spacieux au sein de notre gîte en pleine nature. Un cadre paisible et familial vous attend, avec de nombreuses activités à proximité pour découvrir la beauté de la Lozère.", status: 'réservée' },
    { id: 3, title: "Grand appartement familial", image: "assets/images/chambres/chambre-01.png", presentation: "Appartement spacieux et parfaitement agencé peut accueillir jusqu’à 10 personnes, idéal pour les familles nombreuses ou les groupes d’amis. Il comprend deux lits doubles, deux lits superposés et deux lits simples, offrant ainsi un confort optimal pour chacun.", details: "Vous pourrez profiter d’une cuisine entièrement équipée, parfaite pour préparer vos repas en toute autonomie, et d’un espace de vie convivial pour partager des moments de détente. La décoration soignée et l’aménagement fonctionnel en font un lieu chaleureux et accueillant. Avec son tarif attractif de 110 €/nuit, cet appartement est une excellente option pour les séjours en groupe, dans un cadre naturel exceptionnel en Lozère. Vous serez proche des sentiers de randonnée et des activités de plein air, parfait pour un séjour sous le signe de la nature et de la convivialité.", status: 'en attente' }
];

const formulesGitesObjectAdmin = [
    { id: 1, title: `Formule " Week-end d'amour "`, image: "assets/images/chambres/chambre-01.png", presentation: "Offre spéciale Week-end d'amour : 10 % de réduction sur les nuitées, petit-déjeuner « lover » servi au lit, pour une escapade romantique à deux.", details: "Profitez de notre formule « Week-end d'amour » réservée aux chambres pour deux personnes. Passez un séjour romantique dans un cadre chaleureux et bénéficiez de 10 % de réduction sur le total des nuitées. Pour un réveil tout en douceur, un petit-déjeuner « lover » vous est servi directement au lit. Célébrez votre amour et vivez un moment inoubliable à deux dans notre gîte, où chaque détail est pensé pour votre bien-être et votre complicité.", status: 'disponible' },
    { id: 2, title: `Formule "Nature et découverte"`, image: "assets/images/chambres/chambre-01.png", presentation: "Profitez de 5 % de réduction sur votre séjour de plus de 5 nuits, avec une escapade « Rahan » en terre du Gévaudan, coutelas inclus !", details: "Envie d'évasion ? Notre formule « Nature et découverte » est faite pour vous ! Pour tout séjour de plus de 5 nuits, bénéficiez de 5 % de réduction sur le total de votre séjour. Cette offre est valable sur tous les types d'espaces, week-end inclus. En plus de la remise, vivez une expérience unique avec notre escapade « Rahan » en plein cœur de la terre du Gévaudan, où l'aventure vous attend, coutelas en main. Profitez de moments inoubliables en pleine nature !", status: 'disponible' },
    { id: 3, title: `Formule " Travail saisonnier "`, image: "assets/images/chambres/chambre-01.png", presentation: `La formule "Travail saisonnier" offre une réduction de 20 % pour tout séjour d'au moins un mois, valable de juin à août et de décembre à mars, sur tous les types d'espaces.`, details: `La formule "Travail saisonnier" s'adresse à tous ceux qui souhaitent séjourner pour une durée prolongée, avec une réduction de 20 % sur le tarif global. Cette offre est applicable pour tous les types d'espaces (chambres, appartements, etc.) et est valable pour des séjours d'une durée minimum d'un mois. Les périodes concernées par cette formule sont de juin à août et de décembre à mars, pour accompagner au mieux les travailleurs saisonniers.`, status: 'réservée' }
];

const clients = [
    {
        id: 1,
        nom: "Dupont",
        prenom: "Jean",
        mail: "jean.dupont@email.com",
        telephone: "01 23 45 67 89",
        datereservation: "2023-01-15" + "/" +  " 2023-01-15",
        espacereverve: "Chambre 1",

    },

    {
        id: 2,
        nom: "Martin",
        prenom: "Claire",
        mail: "claire.martin@email.com",
        telephone: "09 87 65 43 21",
        datereservation: "2023-02-20"  + "/" +  " 2023-01-15",
        espacereverve: "Chambre 3",
    },
    {
        id: 3,
        nom: "Bernard",
        prenom: "Paul",
        mail: "paul.bernard@email.com",
        telephone: "01 12 23 34 45",
        datereservation: "2023-03-05"  + "/" +  " 2023-01-15",
        espacereverve: "Formule Amour",
    },
    {
        id: 4,
        nom: "Leroy",
        prenom: "Anne",
        mail: "anne.leroy@email.com",
        telephone: "01 47 85 23 69",
        datereservation: "2023-04-10" + "/" + " 2023-01-15",
        espacereverve: "Chambre 2",

    },
    {
        id: 5,
        nom: "Moreau",
        prenom: "Lucie",
        mail: "lucie.moreau@email.com",
        telephone: "01 78 94 56 32",
        datereservation: "2023-05-25" + "/" +  " 2023-01-15",
        espacereverve: "Formule Travail",
    }
]
