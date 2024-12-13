// Log een bericht om te bevestigen dat het script is geladen
console.log("Hello world!");

// Koppelingen tussen knoppen en eten
const buttonFoodLinks = [
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

// Door elke koppeling heen lopen
buttonFoodLinks.forEach(({ buttonSelector, foodSelector }) => {
  // Zoek de knop en het eten op
  const button = document.querySelector(buttonSelector); // Vind de juiste knop in de HTML
  const foodItem = document.querySelector(foodSelector); // Vind het juiste eten in de HTML

  // Voeg een klikactie toe aan de knop
  button.addEventListener("click", () => {
    // Controleer met if-else of het eten zichtbaar of verborgen is
    if (foodItem.classList.contains("hidden")) {
      foodItem.classList.remove("hidden"); // Maak het eten zichtbaar
    } else {
      foodItem.classList.add("hidden"); // Verberg het eten
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

// Selecteer de trash en eat knoppen
const trashButton = document.querySelector(".trash-button img");
const eatButton = document.querySelector(".eat-button img");

// Functie om al het eten te verwijderen
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

// Voeg kliklisteners toe aan de trash en eat knoppen
trashButton.addEventListener("click", clearPlate);
eatButton.addEventListener("click", clearPlate);

//
//
//
//
//
//
//
//

// Geluidsconfiguratie met array
const sounds = [
  { button: "eat", sound: new Audio("sounds/eat-sound.mp3") },
  { button: "trash", sound: new Audio("sounds/trash-sound.mp3") },
];

// Functie om een geluid af te spelen
function playSoundForAction(action) {
  const soundObject = sounds.find((item) => item.button === action);
  if (soundObject && soundObject.sound) {
    soundObject.sound.currentTime = 0; // Start het geluid opnieuw
    soundObject.sound.play();
  }
}

// Eventlistener voor de eat-knop
eatButton.addEventListener("click", () => {
  clearPlate(); // Maak het bord leeg
  playSoundForAction("eat"); // Speel het geluid voor "eat" af
});

// Eventlistener voor de trash-knop
trashButton.addEventListener("click", () => {
  clearPlate(); // Maak het bord leeg
  playSoundForAction("trash"); // Speel het geluid voor "trash" af
});
