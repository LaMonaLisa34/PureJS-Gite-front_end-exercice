// ======= HEADER ======

// Crée l'élément <header> et l'ajoute tout en haut du <body>
let header = document.createElement("header");
header.className = "background";
document.body.insertBefore(header, document.body.firstChild);

// Crée la barre de navigation <nav> à l'intérieur du header
let nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg header";
header.appendChild(nav);

// Crée un conteneur Bootstrap dans la barre de navigation
let divContainer = document.createElement("div");
divContainer.className = "container";
nav.appendChild(divContainer);

// Logo cliquable qui renvoie vers la page d'accueil
let aLogo = document.createElement("a");
aLogo.className = "navbar-brand";
aLogo.href = "index.html";
divContainer.appendChild(aLogo);

// Image du logo 
let imgLogo = document.createElement("img");
imgLogo.className = "img-fluid";
imgLogo.src = "assets/images/logogo.png";
imgLogo.alt = "Logo gite";
imgLogo.width = "100";
imgLogo.height = "50";
aLogo.appendChild(imgLogo);

// Bouton toggle pour le menu responsive (mobile)
let btnToggle = document.createElement("button");
btnToggle.className = "navbar-toggler";
btnToggle.type = "button";
divContainer.appendChild(btnToggle);

// Icône hamburger à l’intérieur du bouton
let spanBtnToggle = document.createElement("span");
spanBtnToggle.className = "navbar-toggler-icon";
btnToggle.appendChild(spanBtnToggle);

// Active/désactive le menu mobile lors du clic
btnToggle.addEventListener('click', function () {
    const navbarNav = document.getElementById('navbarNav');
    navbarNav.classList.toggle('show');
});

// Conteneur du menu de navigation (collapsable)
let divNav = document.createElement("div");
divNav.className = "collapse navbar-collapse";
divNav.id = "navbarNav";
divContainer.appendChild(divNav);

// Liste de liens dans le menu (droite de la navbar)
let ulNav = document.createElement("ul");
ulNav.className = "navbar-nav ms-auto";
divNav.appendChild(ulNav);

// === Liens de navigation ===

// Lien vers la page d'accueil
let liAccueil = document.createElement("li");
liAccueil.className = "nav-item";
ulNav.appendChild(liAccueil);

let aAccueil = document.createElement("a");
aAccueil.className = "nav-link";
aAccueil.innerText = "Accueil";
aAccueil.href = "index.html";
liAccueil.appendChild(aAccueil);

// Lien vers les services (ancre dans la page)
let liServices = document.createElement("li");
liServices.className = "nav-item";
ulNav.appendChild(liServices);

let aServices = document.createElement("a");
aServices.className = "nav-link";
aServices.innerText = "Nos Services";
aServices.href = "index.html#reservation";
liServices.appendChild(aServices);

// Lien vers la page de réservation
let liReservation = document.createElement("li");
liReservation.className = "nav-item";
ulNav.appendChild(liReservation);

let aReservation = document.createElement("a");
aReservation.className = "nav-link";
aReservation.innerText = "Réservation";
aReservation.href = "reservation.html";
liReservation.appendChild(aReservation);

// Lien vers la page de contact
let liContact = document.createElement("li");
liContact.className = "nav-item";
ulNav.appendChild(liContact);

let aContact = document.createElement("a");
aContact.className = "nav-link";
aContact.innerText = "Contact";
aContact.href = "formulaire.html";
liContact.appendChild(aContact);

// ======= FOOTER ======

// Crée le footer et l'insère juste après <main>
let footer = document.createElement("footer");
footer.className = "text-white";
document.body.insertBefore(footer, main.nextSibling);

// Conteneur principal du footer
let footerDivContainer = document.createElement("div");
footerDivContainer.className = "container py-4";
footer.appendChild(footerDivContainer);

// Ligne de contenu Bootstrap
let footerDivRow = document.createElement("div");
footerDivRow.className = "row";
footerDivContainer.appendChild(footerDivRow);

// === Colonne A : À propos ===
let footerDivColA = document.createElement("div");
footerDivColA.className = "col-md-6";
footerDivRow.appendChild(footerDivColA);

let footerDivColATitle = document.createElement("h5");
footerDivColATitle.innerText = "A propos";
footerDivColA.appendChild(footerDivColATitle);

let footerDivColAP = document.createElement("p");
footerDivColAP.innerText = "Bienvenue dans notre gîte! Profitez d'un séjour chaleureux et authentique au cœur de la nature, où confort et convivialité vous attendent.";
footerDivColA.appendChild(footerDivColAP);

// === Colonne B : Liens ===
let footerDivColB = document.createElement("div");
footerDivColB.className = "col-md-3";
footerDivRow.appendChild(footerDivColB);

let footerDivColBTitle = document.createElement("h5");
footerDivColBTitle.innerText = "Liens";
footerDivColB.appendChild(footerDivColBTitle);

let footerDivColBUl = document.createElement("ul");
footerDivColBUl.className = "list-unstyled";
footerDivColB.appendChild(footerDivColBUl);

// Liens internes du site
function ajouterLienFooter(text, href) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = href;
    a.className = "text-white";
    a.innerText = text;
    li.appendChild(a);
    footerDivColBUl.appendChild(li);
}

ajouterLienFooter("Accueil", "index.html");
ajouterLienFooter("Nos Services", "reservation.html");
ajouterLienFooter("Réservation", "#");
ajouterLienFooter("Contact", "formulaire.html");
ajouterLienFooter("Espace administrateur", "admin.html");

// === Colonne C : Contact ===
let footerDivColC = document.createElement("div");
footerDivColC.className = "col-md-3";
footerDivRow.appendChild(footerDivColC);

let footerDivColCTitle = document.createElement("h5");
footerDivColCTitle.innerText = "Contact";
footerDivColC.appendChild(footerDivColCTitle);

let footerDivColCUl = document.createElement("ul");
footerDivColCUl.className = "list-unstyled";
footerDivColC.appendChild(footerDivColCUl);

// Lien mail
let liMail = document.createElement("li");
let aMail = document.createElement("a");
aMail.href = "mailto:adresse@example.com";
aMail.target = "_blank";
aMail.className = "text-white";
aMail.innerText = "Envoyez-nous un mail";
liMail.appendChild(aMail);
footerDivColCUl.appendChild(liMail);

// Lien adresse
let liAdresse = document.createElement("li");
let aAdresse = document.createElement("a");
aAdresse.href = "http://maps.google.com/?q=1200 Village, 48700 Les Laubies";
aAdresse.target = "_blank";
aAdresse.className = "text-white";
aAdresse.innerText = "Village, 48700 Les Laubies";
liAdresse.appendChild(aAdresse);
footerDivColCUl.appendChild(liAdresse);

// Lien téléphone
let liTel = document.createElement("li");
let aTel = document.createElement("a");
aTel.href = "tel:0000000000";
aTel.target = "_blank";
aTel.className = "text-white";
aTel.innerText = "00 00 00 00 00";
liTel.appendChild(aTel);
footerDivColCUl.appendChild(liTel);

// === Mention copyright en bas ===
let footerDivCopy = document.createElement("div");
footerDivCopy.className = "text-center mt-3";
footerDivContainer.appendChild(footerDivCopy);

let footerDivCopyP = document.createElement("p");
footerDivCopyP.innerHTML = "&copy; 2024 GITHURLE-B. Tous droits réservés.";
footerDivCopy.appendChild(footerDivCopyP);
