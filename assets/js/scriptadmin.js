//// CHARTE GRAPHIQUE

// Définition de la couleur de fond principale du site
document.body.style.backgroundColor = '#191716';

// =================================================== MODAL DE CONNEXION ===

// Création de la modale
const modal = document.createElement('div');
modal.style.position = 'fixed';                      
modal.style.top = '0';
modal.style.left = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = '#191716';            
modal.style.display = 'flex';                       
modal.style.justifyContent = 'center';
modal.style.alignItems = 'center';
modal.style.zIndex = '1000';                        
modal.style.fontFamily = "Arial, sans-serif";

// === CONTENU DE LA MODALE ===
const modalContent = document.createElement('div');
modalContent.style.backgroundColor = '#440d0f';   
modalContent.style.padding = '20px';
modalContent.style.borderRadius = '8px';
modalContent.style.textAlign = 'center';
modalContent.style.minWidth = '300px';
modalContent.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.2)';
modalContent.style.display = 'flex';
modalContent.style.flexDirection = 'column';
modalContent.style.alignItems = 'center';
modalContent.style.color = "white";
modalContent.className = 'p-4 rounded';          

// === TITRE DE LA MODALE ===
const title = document.createElement('h2');
title.textContent = 'Administration';
title.style.marginBottom = '20px';
modalContent.appendChild(title);

// === CHAMP DE NOM D'UTILISATEUR ===
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.placeholder = 'Username : Entrez Admin1';
usernameInput.style.marginBottom = '10px';
usernameInput.className = 'form-control';   
modalContent.appendChild(usernameInput);

// === CHAMP DE MOT DE PASSE ===
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password : Entrez password1';
passwordInput.className = 'form-control';
modalContent.appendChild(passwordInput);

// === BOUTON DE CONNEXION ===
const loginButton = document.createElement('button');
loginButton.id = "btn";
loginButton.className = 'btn btn-primary mt-5';
loginButton.innerText = "CONNEXION";
modalContent.appendChild(loginButton);

// === AJOUT DE LA MODALE AU BODY ===
modal.appendChild(modalContent);
document.body.appendChild(modal);

// === GESTION DE LA CONNEXION ===
loginButton.addEventListener('click', () => {
    let success = false;

    // Boucle sur les utilisateurs disponibles -> users.js
    for (let i = 0; i < users.length; i++) {
        if (
            usernameInput.value === users[i].username &&
            passwordInput.value === users[i].password
        ) {
            // Si les identifiants sont corrects, on ferme la modale
            document.body.removeChild(modal);
            success = true;
            break;
        }
    }

    // Si aucun identifiant ne correspond
    if (!success) {
        alert("Échec de la connexion : nom d'utilisateur ou mot de passe incorrect.");
    }
});


// ====================================================== PAGE ADMIN ===

// === ÉLÉMENT PRINCIPAL ===
const adminPage = document.createElement('div');
adminPage.className = 'container-fluid'; 

// === EN-TÊTE ===
const header = document.createElement('header');
header.className = 'bg-dark text-white d-flex align-items-center';
header.style.borderRadius = '0px 0px 50px 50px';

// === LIGNE DE CONTENU (ROW) ===
const row = document.createElement('div');
row.className = 'row w-100'; 

// === COLONNE LOGO ===
const divLogo = document.createElement('div');
divLogo.className = 'col-2 d-flex justify-content-start'; 

const logo = document.createElement('img');
logo.src = './assets/images/logogo.png';
logo.style.width = '100px';
logo.style.height = 'auto';
divLogo.appendChild(logo);
row.appendChild(divLogo);

// === COLONNE TITRE CENTRÉ ===
const divTitle = document.createElement('div');
divTitle.className = 'col-8 text-center'; // colonne centrale

const titre = document.createElement('h2');
titre.innerText = 'ESPACE ADMINISTRATEUR';
titre.style.fontSize = '50px';
titre.style.marginTop = '40px';
divTitle.appendChild(titre);
row.appendChild(divTitle);

// === COLONNE BOUTON DÉCONNEXION ===
const logoutCol = document.createElement('div');
logoutCol.className = 'col-2 d-flex justify-content-end'; // colonne droite

const logout = document.createElement('button');
logout.id = "btn";
logout.className = 'btn btn-primary';
logout.innerText = 'DECONNEXION';
logoutCol.appendChild(logout);
row.appendChild(logoutCol);

// === BOUTON VERS CALENDRIER ===
const calendrierBtn = document.createElement("button");
row.appendChild(calendrierBtn);

const anchorCalendrierBtn = document.createElement("a");
anchorCalendrierBtn.innerText = "Calendrier des réservations";
anchorCalendrierBtn.href = "calendar.html";
anchorCalendrierBtn.style.textDecoration = "none"; 

calendrierBtn.appendChild(anchorCalendrierBtn);

// === ACTION DE DÉCONNEXION ===
// Redirection vers l’accueil
logout.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// === ASSEMBLAGE DES ÉLÉMENTS ===
header.appendChild(row);         // row dans header
adminPage.appendChild(header);  // header dans page
document.body.appendChild(adminPage); // page dans body


// ====================================================== RESERVATION  ===

// === TITRE DE LA SECTION "TABLEAU DE BORD" ===
const reservationTitre = document.createElement('h3');
reservationTitre.innerText = 'TABLEAU DE BORD';
reservationTitre.style.marginTop = '60px';
reservationTitre.style.backgroundColor = '#af9bb6'; 
reservationTitre.style.fontSize = '30px';
reservationTitre.style.padding = '10px';
reservationTitre.style.color = 'black';
reservationTitre.style.borderRadius = '50px';
reservationTitre.style.textAlign = 'center';
adminPage.appendChild(reservationTitre);

// === CRÉATION DU TABLEAU DES RÉSERVATIONS ===
const table = document.createElement('table');
table.className = 'table table-striped'; 
table.style.width = '80%';
table.style.margin = '0 auto';
table.style.borderCollapse = 'collapse';
table.style.marginTop = "50px";

// === EN-TÊTE DU TABLEAU ===
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

// Colonne "Nom"
const nomChambre = document.createElement('th');
nomChambre.innerText = 'Nom';
nomChambre.style.color = 'white';
nomChambre.style.backgroundColor = '#603a40'; 
headerRow.appendChild(nomChambre);

// Colonne "Statut" avec tri
const statusChambre = document.createElement('th');
statusChambre.innerText = 'Statut';
statusChambre.style.color = 'white';
statusChambre.style.backgroundColor = '#603a40';
statusChambre.style.display = 'flex';
statusChambre.style.justifyContent = 'space-between';
statusChambre.style.alignItems = 'center';

// Ajoute texte et bouton de tri dans la colonne
const statusText = document.createElement('span');
statusText.innerText = 'Statut';

// Bouton de tri
const btnTri = document.createElement('button');
btnTri.innerText = '⇅';
btnTri.style.marginLeft = '10px';
btnTri.style.background = 'transparent';
btnTri.style.border = 'none';
btnTri.style.color = 'white';
btnTri.style.cursor = 'pointer';
statusChambre.appendChild(btnTri);

headerRow.appendChild(statusChambre);
thead.appendChild(headerRow);
table.appendChild(thead);

// === CORPS DU TABLEAU ===
const tbody = document.createElement('tbody');
table.appendChild(tbody);
adminPage.appendChild(table);

// === LOGIQUE DE TRI PAR STATUT ===
let triage = true; // true = tri croissant, false = tri décroissant

btnTri.addEventListener('click', () => {
    const ligneTab = Array.from(tbody.querySelectorAll('tr')); // Récupère toutes les lignes

    // Définit l'ordre de priorité des statuts
    function prioriteStatus(status) {
        switch (status) {
            case 'réservée': return 0;
            case 'en attente': return 1;
            case 'disponible': return 2;
            default: return 3;
        }
    }

    // Trie les lignes selon les priorités
    ligneTab.sort((rowA, rowB) => {
        const statusA = rowA.children[1].innerText;
        const statusB = rowB.children[1].innerText;

        const prioA = prioriteStatus(statusA);
        const prioB = prioriteStatus(statusB);

        return triage ? prioA - prioB : prioB - prioA;
    });

    // Réinsère les lignes triées dans le tbody
    ligneTab.forEach(row => tbody.appendChild(row));

    triage = !triage; // Inverse l'ordre pour le prochain clic
});

// === AFFICHAGE DES CHAMBRES ===
gitesObjectAdmin.forEach((chambreAdmin) => {
    const row = document.createElement('tr');

    const chambres = document.createElement('td');
    chambres.innerText = chambreAdmin.name; // Nom de la chambre
    row.appendChild(chambres);

    const chambresStatus = document.createElement('td');
    chambresStatus.innerText = chambreAdmin.status; // Statut de la chambre
    row.appendChild(chambresStatus);

    tbody.appendChild(row);
});

// === AFFICHAGE DES ESPACES ===
espacesGitesObjectAdmin.forEach((espaceAdmin) => {
    const row = document.createElement('tr');

    const espace = document.createElement('td');
    espace.innerText = espaceAdmin.title;
    row.appendChild(espace);

    const espaceStatus = document.createElement('td');
    espaceStatus.innerText = espaceAdmin.status;
    row.appendChild(espaceStatus);

    tbody.appendChild(row);
});

// === AFFICHAGE DES FORMULES ===
for (let i = 0; i < formulesGitesObjectAdmin.length; i++) {
    const formuleAdmin = formulesGitesObjectAdmin[i];
    const row = document.createElement('tr');

    const formule = document.createElement('td');
    formule.innerText = formuleAdmin.title;
    row.appendChild(formule);

    const formuleStatus = document.createElement('td');
    formuleStatus.innerText = formuleAdmin.status;
    row.appendChild(formuleStatus);

    tbody.appendChild(row);
}

// ====================================================== LISTE CLIENT AVEC CONTACT  ===

// === TITRE DE LA SECTION "LISTE DES CLIENTS" ===
const clientTitre = document.createElement('h3');
clientTitre.innerText = 'LISTE DES CLIENTS';
clientTitre.style.marginTop = '60px';
clientTitre.style.backgroundColor = '#af9bb6'; // Violet doux
clientTitre.style.fontSize = '30px';
clientTitre.style.padding = '10px';
clientTitre.style.color = 'black';
clientTitre.style.borderRadius = '50px';
clientTitre.style.textAlign = 'center';
document.body.appendChild(clientTitre);

// === CRÉATION DU TABLEAU ===
const tableClient = document.createElement('table');
tableClient.className = 'table table-striped'; // Bootstrap : lignes alternées
tableClient.style.marginTop = '20px';
tableClient.style.width = '80%';
tableClient.style.margin = '0 auto'; 
tableClient.style.borderCollapse = 'collapse';

// === EN-TÊTE DU TABLEAU ===
const theadClient = document.createElement('thead');
const headerRowClient = document.createElement('tr');

// Liste des colonnes à afficher
const headersClients = ['ID', 'Nom', 'Prénom', 'Email', 'Téléphone', 'Date de réservation', 'Espace'];

// Création dynamique des <th> pour chaque entête
headersClients.forEach(headerText => {
    const th = document.createElement('th');
    th.innerText = headerText;
    th.style.border = '1px solid #ccc';
    th.style.padding = '10px';
    th.style.textAlign = 'left';
    headerRowClient.appendChild(th);
});

theadClient.appendChild(headerRowClient);
tableClient.appendChild(theadClient);

// === CORPS DU TABLEAU ===
const tbodyClient = document.createElement('tbody');

// Boucle sur le tableau "clients" pour ajouter chaque ligne
clients.forEach(clients => {
    const rowClient = document.createElement('tr');

    // Création des cellules <td> avec les données du client
    const tdId = document.createElement('td');
    tdId.innerText = clients.id;

    const tdNom = document.createElement('td');
    tdNom.innerText = clients.nom;

    const tdPrenom = document.createElement('td');
    tdPrenom.innerText = clients.prenom;

    const tdEmail = document.createElement('td');
    tdEmail.innerText = clients.mail;

    const tdTelephone = document.createElement('td');
    tdTelephone.innerText = clients.telephone;

    const tdDateReservation = document.createElement('td');
    tdDateReservation.innerText = clients.datereservation;

    const chClientsResa = document.createElement('td');
    chClientsResa.innerText = clients.espacereverve; // nom de l’espace réservé

    // Ajoute toutes les cellules à la ligne
    rowClient.append(tdId, tdNom, tdPrenom, tdEmail, tdTelephone, tdDateReservation, chClientsResa);

    // Ajoute la ligne au tableau
    tbodyClient.appendChild(rowClient);
});

// Ajout du <tbody> au tableau complet
tableClient.appendChild(tbodyClient);

// Ajoute le tableau complet au body
document.body.appendChild(tableClient);


// ====================================================== REPONSE FORMULAIRE CONTACT  ===

// === TITRE DE LA SECTION "RÉPONSE CLIENTS" ===
const formReponseClients = document.createElement('h3');
formReponseClients.innerText = 'REPONSE CLIENTS';
formReponseClients.style.marginTop = '60px';
formReponseClients.style.backgroundColor = '#af9bb6'; 
formReponseClients.style.fontSize = '30px';
formReponseClients.style.padding = '10px';
formReponseClients.style.color = 'black';
formReponseClients.style.borderRadius = '50px';
formReponseClients.style.textAlign = 'center';
document.body.appendChild(formReponseClients);

// === FORMULAIRE DE RÉPONSE ===
const form = document.createElement('form');
form.style.maxWidth = '800px';
form.style.margin = '20px auto';
form.style.padding = '10px';
form.style.border = '1px solid #440d0f'; 
form.style.borderRadius = '10px';
form.style.backgroundColor = 'black';
form.style.marginTop = "50px";

// === CHAMP "Nom du client" ===
const reservationInput = document.createElement('input');
reservationInput.type = 'text';
reservationInput.placeholder = 'Nom du client';
reservationInput.style.width = '100%';
reservationInput.style.marginBottom = '10px';
reservationInput.style.padding = '8px';
form.appendChild(reservationInput);

// === CHAMP "Réponse à envoyer" ===
const responseInput = document.createElement('textarea');
responseInput.placeholder = 'Votre réponse au client';
responseInput.style.width = '100%';
responseInput.style.marginBottom = '10px';
responseInput.style.padding = '8px';
form.appendChild(responseInput);

// === BOUTON DE VALIDATION ===
const btnForm = document.createElement('button');
btnForm.innerText = 'Envoyer la réponse';
btnForm.type = 'submit';
btnForm.style.backgroundColor = '#440d0f'; 
btnForm.style.color = 'white';
btnForm.style.padding = '10px';
btnForm.style.border = 'none';
btnForm.style.borderRadius = '5px';
btnForm.style.width = '100%';
form.appendChild(btnForm);

// === AJOUT DU FORMULAIRE AU BODY ===
document.body.appendChild(form);

