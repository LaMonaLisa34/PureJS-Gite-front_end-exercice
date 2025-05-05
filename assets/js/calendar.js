// Récupère l’élément <main> du DOM pour y insérer le contenu du calendrier
const main = document.getElementById("main");

// === TITRE ===

// Crée un élément <h2> -> Calendrier des réservations
const h2Title = document.createElement("h2");
h2Title.innerText = "Calendrier des réservations";
// Ajoute ce <h2> dans le bloc <main>
main.append(h2Title);

// === DONNÉES DES LIGNES DU CALENDRIER ===
// Première ligne : les jours de la semaine
const tabContRows = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

// Cinq lignes représentant des semaines (avec des dates fictives ou pour un mois donné)
const tabContRows1 = ["30", "01", "02", "03", "04", "05", "06"];
const tabContRows2 = ["07", "08", "09", "10", "11", "12", "13"];
const tabContRows3 = ["14", "15", "16", "17", "18", "19", "20"];
const tabContRows4 = ["21", "22", "23", "24", "25", "26", "27"];
const tabContRows5 = ["28", "29", "30", "31", "01", "02", "03"];

// === FONCTION DE CRÉATION DE TABLEAU ===
/**
 * Crée dynamiquement un tableau HTML contenant une ligne de valeurs
 * @param {HTMLElement} pElement - Élément parent dans lequel insérer le tableau
 * @param {Array} array - Liste des valeurs à afficher dans la ligne (ex : jours ou dates)
 * @param {number} rows - Nombre de lignes à créer (toujours 1 ici)
 */

function createTab(pElement, array, rows) {
    // Crée un tableau <table>
    const tabCalendar = document.createElement("table");
    tabCalendar.className = "container"; // classe CSS Bootstrap personnalisée
    pElement.append(tabCalendar); // ajoute le tableau dans le parent

    // Crée le corps du tableau <tbody>
    const tBodyCalendar = document.createElement("tbody");
    tabCalendar.append(tBodyCalendar);

    // Boucle pour créer le nombre de lignes demandé (1 ici)
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr"); // crée une ligne

        // Pour chaque valeur de la liste, on crée une cellule <td>
        for (let v of array) {
            const td = document.createElement("td");
            td.style.border = "2px solid black";     // bordure noire
            td.style.paddingRight = "5vw";           // espace à droite
            td.style.paddingLeft = "5vw";            // espace à gauche
            td.innerText = v;                        // contenu texte
            tr.append(td);                           // ajoute la cellule à la ligne
        }

        // Ajoute la ligne complète au tableau
        tabCalendar.append(tr);
    }
}

// === CONSTRUCTION DU CALENDRIER COMPLET ===
// On appelle createTab pour chaque ligne à ajouter
createTab(main, tabContRows, 1);   // Jours de la semaine
createTab(main, tabContRows1, 1);  // Semaine 1
createTab(main, tabContRows2, 1);  // Semaine 2
createTab(main, tabContRows3, 1);  // Semaine 3
createTab(main, tabContRows4, 1);  // Semaine 4
createTab(main, tabContRows5, 1);  // Semaine 5
