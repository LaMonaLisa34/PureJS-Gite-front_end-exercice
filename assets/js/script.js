// === SECTION HISTOIRE ===

// Récupère l'élément <main> dans le HTML
let main = document.querySelector("main");

// Crée une <div> principale 
let divHistoire = document.createElement("div");
divHistoire.className = "container histoire";
main.appendChild(divHistoire);

// Crée une ligne Bootstrap pour organiser les colonnes
let divRowHistoire = document.createElement("div");
divRowHistoire.className = "row align-items-center"; 
divHistoire.appendChild(divRowHistoire);

// Crée un séparateur contenant un titre
let separateur = document.createElement("div");
separateur.id = "separateur"; 
divRowHistoire.appendChild(separateur);

// Crée une colonne pour l'image (moitié gauche)
let colImg = document.createElement("div");
colImg.className = "col-md-6 d-flex"; 
divRowHistoire.appendChild(colImg);

// Ajoute une image responsive dans cette colonne
let imghistoire = document.createElement("img");
imghistoire.className = "img-fluid";
imghistoire.id = "imghistoire";
imghistoire.src = "./assets/images/chambres/chambre-01.png"; 
colImg.appendChild(imghistoire);

// Ajoute un titre dans le séparateur
let h2Histoire = document.createElement("h2");
h2Histoire.innerText = "HISTOIRE DU GITE HURLE";
separateur.appendChild(h2Histoire);

// Crée une deuxième colonne pour le texte de l'histoire
let divcolHistoire = document.createElement("div");
divcolHistoire.className = "col-md-6"; 
divRowHistoire.appendChild(divcolHistoire);

// Ajoute un second séparateur 
let separateurbis = document.createElement("div");
separateurbis.id = "separateurbis";
divcolHistoire.appendChild(separateurbis);

// Ajoute les paragraphes de texte (récupérés depuis un tableau JS)
let p1Histoire = document.createElement("p");
p1Histoire.innerText = histoireText[0].text;

let p2Histoire = document.createElement("p");
p2Histoire.innerText = histoireText[1].text;

let p3Histoire = document.createElement("p");
p3Histoire.innerText = histoireText[2].text;

// Regroupe et ajoute les paragraphes dans la colonne
divcolHistoire.append(p1Histoire, p2Histoire, p3Histoire);

// Ajoute un troisième séparateur décoratif
let separateurbis2 = document.createElement("div");
separateurbis2.id = "separateurbis";
divcolHistoire.appendChild(separateurbis2);

// === OUVERTURE VERS LA SECTION "CHAMBRES" ===

// Crée un conteneur pour le nouveau titre
let h2ChambresCont = document.createElement("div");
h2ChambresCont.id = "separateur"; 

let h2Chambres = document.createElement("h2");
h2Chambres.innerText = "DÉCOUVREZ NOS CHAMBRES";

// Ajoute le titre au conteneur, puis dans la ligne Bootstrap
h2ChambresCont.appendChild(h2Chambres);
divRowHistoire.appendChild(h2ChambresCont);

// === FUNCTION POUR AFFICHER UNE CHAMBRE OU FORMULE AVEC CARROUSEL ET CONTENU MASQUÉ ===
function afficherChambresFormulesRight(myObject, index) {

    // Crée une <div> conteneur principale pour la carte
    let divCont = document.createElement("div");
    divCont.className = "container-fluid";

    // Crée des identifiants uniques en fonction de l’index (pour éviter les conflits si plusieurs cartes)
    let collapseId = `collapseContent${index}`;
    let buttonId = `btn${index}`;
    let carouselId = `carouselExampleIndicators${index}`;

    // Récupère les chemins des images de l’objet
    let image1 = myObject.image1;
    let image2 = myObject.image2;

    // Injecte le HTML dans la div, en utilisant les données fournies par `myObject`
    divCont.innerHTML = `
    <div class="container-fluid" id="reservation">
        <div class="row align-items-center">

            <!-- Titre -->
            <div class="fond col-md-9">
                <h3>${myObject.title}</h3>
            </div>

            <!-- CARROUSEL D'IMAGES à droite -->
            <div class="col-md-6 d-flex order-md-2">
                <div id="${carouselId}" class="carousel slide w-100 rounded-4 carouselstyle">

                    <!-- Indicateurs (points en bas) -->
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>

                    <!-- Images du carrousel -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${image1}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${image2}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                    </div>

                    <!-- Contrôles précédent / suivant -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <!-- Description et bouton "en savoir plus" à gauche -->
            <div class="col-md-6 order-md-1">
                <div id="separateurbis"></div>
                <p>${myObject.presentation}</p>

                <!-- BOUTON COLLAPSE (pour afficher les détails) -->
                <button id="${buttonId}" class="btn btn-primary mt-1 mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${collapseId}" aria-expanded="false" aria-controls="${collapseId}">
                    En savoir plus..
                </button>

                <!-- CONTENU CACHÉ (déplié par le bouton) -->
                <div class="collapse small" id="${collapseId}">
                    <p>${myObject.details1}</p>
                    <p>${myObject.details2}</p>
                </div>

                <div id="separateurbis"></div>
            </div>

        </div>
    </div>`;

    // Ajoute la structure complète au conteneur principal des chambres
    divChambres.appendChild(divCont);
}

// === FONCTION POUR AFFICHER UNE FORMULE OU CHAMBRE AVEC CARROUSEL À GAUCHE ET TEXTE À DROITE ===
function afficherChambresFormulesLeft(myObject, index) {

    // Crée un conteneur principal pour cette section
    let divCont = document.createElement("div");
    divCont.className = "container-fluid";

    // Génère des identifiants uniques pour le bouton, le collapse, et le carrousel
    const uniqueId = `collapse${index}`;
    const buttonId = `btn${index}`;
    const carouselId = `carouselExampleIndicatorsLeft${index}`;

    // Utilise des images par défaut si aucune image n’est fournie
    let image1 = myObject.image1 || "assets/images/default.jpg";
    let image2 = myObject.image2 || "assets/images/default.jpg";

    // Injecte la structure HTML dans la div, en affichant le carrousel à gauche (order-md-1) et le texte à droite
    divCont.innerHTML = `
    <div class="container-fluid">
        <div class="row align-items-center">

            <!-- Titre de la section -->
            <div class="fond col-md-9">
                <h3>${myObject.title}</h3>
            </div>

            <!-- Carrousel placé à gauche -->
            <div class="col-md-6 d-flex order-md-1">
                <div id="${carouselId}" class="carousel slide w-100 rounded-4 carouselstyle">

                    <!-- Indicateurs du carrousel -->
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>

                    <!-- Images du carrousel -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${image1}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${image2}" class="d-block w-100 rounded-4" alt="...">
                        </div>
                    </div>

                    <!-- Contrôles précédent / suivant -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>

                </div>
            </div>

            <!-- Texte placé à droite -->
            <div class="col-md-6 order-md-2">
                <div id="separateurbis"></div>
                <p>${myObject.presentation}</p>

                <!-- Bouton pour afficher plus de détails -->
                <button id="${buttonId}" class="btn btn-primary mt-1 mb-2" type="button" data-bs-toggle="collapse"
                    data-bs-target="#${uniqueId}" aria-expanded="false" aria-controls="${uniqueId}">
                    En savoir plus..
                </button>

                <!-- Contenu masqué (déplié par le bouton ci-dessus) -->
                <div class="collapse small" id="${uniqueId}">
                    <p>${myObject.details1}</p>
                    <p>${myObject.details2}</p>
                </div>

                <div id="separateurbis"></div>
            </div>

        </div>
    </div>`;

    // Ajoute la section construite dans le conteneur principal
    divChambres.appendChild(divCont);
}

// === CHAMBRES ===

// Crée un conteneur pour afficher les blocs de chambres
let divChambres = document.createElement("div");
divChambres.className = "ccontainer-fluid"; 

divHistoire.appendChild(divChambres); // Ajoute ce conteneur sous le bloc d'histoire

// Appelle les fonctions pour afficher les chambres en alternant droite/gauche
afficherChambresFormulesRight(espacesGitesObject[0], espacesGitesObject[0].id); // 1ère chambre à droite
afficherChambresFormulesLeft(espacesGitesObject[1], espacesGitesObject[1].id);  // 2ème chambre à gauche
afficherChambresFormulesRight(espacesGitesObject[2], espacesGitesObject[2].id); // 3ème chambre à droite

// === FORMULES ===

// Crée un conteneur pour les formules
let divFormules = document.createElement("div");
divFormules.className = "ccontainer-fluid"; 

// Crée un titre pour la section des formules
let h2FormulesCont = document.createElement("div");
h2FormulesCont.id = "separateur";
let h2Formules = document.createElement("h2");
h2Formules.innerText = "DÉCOUVREZ NOS FORMULES";

// Ajoute le titre dans le conteneur de formules
h2FormulesCont.appendChild(h2Formules);
divFormules.appendChild(h2FormulesCont);
divChambres.appendChild(divFormules); // Les formules sont insérées à la suite des chambres

// Affiche les formules avec alternance gauche/droite
afficherChambresFormulesLeft(formulesGitesObject[0], formulesGitesObject[0].id);
afficherChambresFormulesRight(formulesGitesObject[1], formulesGitesObject[1].id);
afficherChambresFormulesLeft(formulesGitesObject[2], formulesGitesObject[2].id);

// === ANIMATION IMAGE HISTOIRE (zoom au survol) ===

// Cible l'image de la section histoire
const zoomImage = document.getElementById('imghistoire');

// Ajoute un effet de zoom quand la souris entre sur l'image
zoomImage.addEventListener('mouseenter', () => {
    zoomImage.style.transform = 'scale(1.1)';
});

// Remet l'image à l’échelle normale quand la souris sort
zoomImage.addEventListener('mouseleave', () => {
    zoomImage.style.transform = 'scale(1)';
});
