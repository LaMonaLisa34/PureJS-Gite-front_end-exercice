// Variables globales pour stocker les dates et la durée du séjour
let dateDebut = null;
let dateFin = null;
let dureeEnJours = null;

// Objet pour stocker les détails de la réservation
const reservationDetails = {
    nomEspace: null,
    prixEspace: null
};

// Fonction pour créer dynamiquement une carte HTML représentant une chambre
function creerCarteChambre(chambre) {
    const chambreCard = document.createElement("div");
    chambreCard.className = "col";
    chambreCard.id = chambre.id;

    chambreCard.innerHTML = `
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${chambre.image}" alt="Image de la chambre">
            <div class="card-body">
                <h4>${chambre.name}</h4> 
                <ul class="card-text">
                    ${chambre.description.map(item => item ? `<li>${item}</li>` : '').join('')}
                </ul>
                <div class="d-flex justify-content-end align-items-center">
                    <button id="btn" class="btn btn-sm text-white openModal" data-bs-toggle="modal" data-bs-target="#modalReservation" data-price="${chambre.price}" data-espace="${chambre.name}" type="button">Réservation</button>
                </div>
            </div>
        </div>
    `;
    return chambreCard;
}

// Ajoute chaque carte de chambre au DOM
const listeChambres = document.getElementById("list-chambres");
gitesObject.forEach((chambre) => {
    const chambreCard = creerCarteChambre(chambre);
    listeChambres.appendChild(chambreCard);
});

// Fonction pour calculer la durée du séjour en jours à partir des dates
function calculerDuree() {
    const dateInitInput = document.getElementById('dateInit');
    const dateEndInput = document.getElementById('dateEnd');

    dateDebut = dateInitInput.value;
    dateFin = dateEndInput.value;

    if (!dateDebut || !dateFin) return;

    const d1 = new Date(dateDebut);
    const d2 = new Date(dateFin);

    if (d1 >= d2) {
        alert("La date de début doit être antérieure à la date de fin.");
        dureeEnJours = null;
        return;
    }

    const diffMs = d2 - d1;
    dureeEnJours = diffMs / (1000 * 60 * 60 * 24); // conversion en jours
    mettreAJourTotal();
}

// Fonction pour mettre à jour le montant total dans le formulaire
function mettreAJourTotal() {
    const totalElement = document.getElementById('total_cart');
    if (reservationDetails.prixEspace && dureeEnJours) {
        const total = Number(reservationDetails.prixEspace) * dureeEnJours;
        totalElement.textContent = `Total : (Є) ${total}`;
    } else {
        totalElement.textContent = `Total : (Є) 0`;
    }
}

// Ajoute des écouteurs aux champs de date pour recalculer à chaque changement
const dateInitInput = document.getElementById('dateInit');
const dateEndInput = document.getElementById('dateEnd');
dateInitInput.addEventListener('change', calculerDuree);
dateEndInput.addEventListener('change', calculerDuree);

// Fonction déclenchée lors du clic sur un bouton de réservation
function gererClicReservation(event) {
    const clickedButton = event.currentTarget;
    reservationDetails.nomEspace = clickedButton.getAttribute('data-espace');
    reservationDetails.prixEspace = clickedButton.getAttribute('data-price');
    mettreAJourTotal(); // met à jour le total dans le formulaire
}

// Une fois le DOM chargé, on connecte tous les boutons de réservation
document.addEventListener('DOMContentLoaded', () => {
    const boutons = document.querySelectorAll(".openModal");
    boutons.forEach(bouton => {
        bouton.addEventListener('click', gererClicReservation);
    });
});

// Gestion de l'envoi du formulaire de réservation
document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault(); // empêche le rechargement classique

    const formData = new FormData(this);
    const formValues = {};

    // Transforme les données du formulaire en objet JS
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    // Ajoute les informations de la chambre sélectionnée
    formValues['nomEspace'] = reservationDetails.nomEspace;
    formValues['prixEspace'] = reservationDetails.prixEspace;

    // Vérifie que tous les champs sont remplis
    if (!formValues['nom'] || !formValues['prenom'] || !formValues['email'] || !formValues['formules'] ||
        !formValues['dateInit'] || !formValues['dateEnd']) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Affiche les données pour vérification (à remplacer par un envoi au serveur)
    console.log(formValues);

    // Affiche une confirmation avec SweetAlert, puis recharge la page
    Swal.fire({
        title: "Merci de votre attention!",
        text: "Votre réservation a été acceptée et nous vous enverrons les détails par e-mail.",
        icon: "success"
    }).then(function() { 
        location.reload();
    });
});
