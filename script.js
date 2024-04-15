// Récupération des différents éléments
const numberInput = document.querySelector(".number__input");
const resultItem = document.querySelector(".result__span");
const btn = document.querySelector(".btn");

// Création des variables firstName et lastName
let firstName = [
  "Maxime",
  "Richard",
  "David",
  "Sébastien",
  "Alexandre",
  "Katherine",
  "Marie",
  "Samantha",
  "Clémence",
  "Pauline",
];
let lastName = [
  "Petit",
  "Martin",
  "Fabre",
  "Beckett",
  "Castle",
  "Peyrac",
  "Falco",
  "Moreau",
  "Dubois",
  "Roche",
];

// Création de la fonction getName qui va permettre de générer de manière aléatoire des noms
const getName = () => {
  let randomName =
    firstName[Math.floor(Math.random() * firstName.length)] +
    " " +
    lastName[Math.floor(Math.random() * lastName.length)];
  return randomName;
};

// Création de la fonction NameQuantity qui va permettre de définir la quantité de nom voulu
const NameQuantity = () => {
  let userQuantity = numberInput.value;
  resultItem.textContent = "";
  if (userQuantity > 5) {
    resultItem.textContent = "Seulement 5 noms peuvent être générés !";
  } else {
    for (let i = 0; i < userQuantity; i++) {
      resultItem.innerHTML += getName() + "<br>";
    }
  }
};

// Ecoute de l'événement click sur le bouton Générer
btn.addEventListener("click", (e) => {
  // Suppression du comportement par défaut
  e.preventDefault();
  // Appel de la fonctionNameQuantity
  NameQuantity();
});
