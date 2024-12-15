// Dit logt een bericht naar de console om te bevestigen dat het script succesvol is geladen en uitgevoerd.
console.log("Hello world!");

// Het maken van een lijst die knoppen koppelt aan specifieke eten-items
const buttonFoodArray = [
  {
    buttonSelector: ".pita-options li:nth-child(1)",
    foodSelector: ".Pita-one",
  },
  {
    buttonSelector: ".pita-options li:nth-child(2)",
    foodSelector: ".Pita-two",
  },
  {
    buttonSelector: ".pita-options li:nth-child(3)",
    foodSelector: ".Pita-three",
  },
  {
    buttonSelector: ".pita-options li:nth-child(4)",
    foodSelector: ".Pita-four",
  },
  {
    buttonSelector: ".sauce-options li:nth-child(1)",
    foodSelector: ".Sauce-one",
  },
  {
    buttonSelector: ".sauce-options li:nth-child(2)",
    foodSelector: ".Sauce-two",
  },
  {
    buttonSelector: ".sauce-options li:nth-child(3)",
    foodSelector: ".Sauce-three",
  },
  {
    buttonSelector: ".sauce-options li:nth-child(4)",
    foodSelector: ".Sauce-four",
  },
  {
    buttonSelector: ".topping-options li:nth-child(1)",
    foodSelector: ".Topping-one",
  },
  {
    buttonSelector: ".topping-options li:nth-child(2)",
    foodSelector: ".Topping-two",
  },
  {
    buttonSelector: ".topping-options li:nth-child(3)",
    foodSelector: ".Topping-three",
  },
  {
    buttonSelector: ".topping-options li:nth-child(4)",
    foodSelector: ".Topping-four",
  },
];

// Doorloopt alle knoppen-eten-koppelingen in de buttonFoodArray array
buttonFoodArray.forEach(({ buttonSelector, foodSelector }) => {
  // Zoek de knop en het eten op
  const button = document.querySelector(buttonSelector); // Vind de juiste knop in de HTML
  const foodItem = document.querySelector(foodSelector); // Vind het juiste eten in de HTML

  // Voeg een klikactie toe aan de knop
  button.addEventListener("click", () => {
    // Controleer met if-else of het eten zichtbaar of verborgen is
    if (foodItem.classList.contains("hidden")) {
      foodItem.classList.remove("hidden"); // Als het verborgen is, verwijdert het de hidden-class zodat het zichtbaar wordt.
    } else {
      foodItem.classList.add("hidden"); // Als het zichtbaar is, voegt het de hidden-class toe om het te verbergen
    }
  });
});

//
//
//
//
//
//
//
//

// Selecteert de trash- en eat-knoppen in de HTML om daar acties aan toe te voegen
const trashButton = document.querySelector(".trash-button img");
const eatButton = document.querySelector(".eat-button img");

// Functie om al het eten te verwijderen/verbergen
function clearPlate() {
  // Zoek alle elementen die eten representeren
  const allFoodItems = document.querySelectorAll(
    ".Pita-one, .Pita-two, .Pita-three, .Pita-four, .Sauce-one, .Sauce-two, .Sauce-three, .Sauce-four, .Topping-one, .Topping-two, .Topping-three, .Topping-four"
  );

  // Voeg de class 'hidden' toe aan al deze elementen
  allFoodItems.forEach((foodItem) => {
    foodItem.classList.add("hidden");
  });
}

//
//
//
//
//
//
//
//

// Eventlistener voor de eat-knop
eatButton.addEventListener("click", () => {
  // Luistert naar een klik op de eatButton en voert de functie uit.
  clearPlate(); // Roept de functie aan om het bord leeg te maken.
  const eatSound = new Audio("sounds/eat-sound.mp3"); // Maakt een nieuw geluidsobject met het bestand "eat-sound.mp3".
  eatSound.play(); // Speel het geluid voor "eat" af
});

// Eventlistener voor de trash-knop
trashButton.addEventListener("click", () => {
  clearPlate(); // Maak het bord leeg
  const trashSound = new Audio("sounds/trash-sound.mp3");
  trashSound.play(); // Speel het geluid voor "trash" af
});
