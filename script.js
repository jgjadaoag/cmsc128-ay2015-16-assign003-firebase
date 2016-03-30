'use strict';

let myFirebaseRef = new Firebase("https://flickering-fire-7415.firebaseio.com/");

/*
let recipeSection = document.querySelector("#recipe-list");
let template = document.querySelector("#recipe-template");
let name = template.content.querySelector("h1");
let classification = template.content.querySelector("header>p");
let text = template.content.querySelector("article>p");

myFirebaseRef.on("child_added", (snapshot) => {
	  addRecipe(snapshot.val());
});
*/

myFirebaseRef.push({
  name: "Hello World!",
  classification: "French",
  text: "Deep fry cookies, Done"
});

function addRecipe(recipe) {
	name.textContent = recipe.name;
	classification.textContent = recipe.classification;
	text.textContent = recipe.text;

	let clone = document.importNode(template.content, true);

	recipeSection.appendChild(clone);
}

$('.modal-trigger').leanModal();

