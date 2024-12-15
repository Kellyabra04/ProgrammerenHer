Bronnen:

Chatgpt

//
//

Mijn prompt: Geef een voorbeeld van hoe ik knoppen kan verbinden met bijbehorende elementen in een array
Chatgpt:
const buttonElementArray = [
{ buttonSelector: ".group-one li:nth-child(1)", targetSelector: ".element-one" },
{ buttonSelector: ".group-one li:nth-child(2)", targetSelector: ".element-two" },
{ buttonSelector: ".group-two li:nth-child(1)", targetSelector: ".element-three" },
{ buttonSelector: ".group-two li:nth-child(2)", targetSelector: ".element-four" },
];

buttonElementArray.forEach(({ buttonSelector, targetSelector }) => {
const button = document.querySelector(buttonSelector);
const target = document.querySelector(targetSelector);

button.addEventListener("click", () => {
target.classList.toggle("hidden");
});
});

//
//

Mijn prompt: Hoe kan ik meerdere elementen met één functie zichtbaar of onzichtbaar maken?
Chatgpt:
function clearAllElements() {
const elements = document.querySelectorAll(".element-one, .element-two, .element-three, .element-four");
elements.forEach(item => item.classList.add("hidden"));
}

//
//

Mijn prompt: Hoe voeg ik geluidseffecten toe aan knoppen?
Chatgpt:
const soundButton = document.querySelector(".sound-button");
const soundEffect = new Audio("path/to/sound.mp3");

soundButton.addEventListener("click", () => {
soundEffect.play();
});

//
//

Mijn prompt: Hoe voeg ik een functie toe aan een knop om meerdere doel-elementen te beheren?
Chatgpt: const actionButton = document.querySelector(".action-button");

actionButton.addEventListener("click", () => {
const targets = document.querySelectorAll(".group-one .target");
targets.forEach(target => {
target.classList.toggle("hidden");
});
});
