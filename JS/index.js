// Question 1

const menuIsOpen = false;

if (menuIsOpen) {
  console.log("truthy");
} else {
  console.log("falsy");
}

// Question 2

// https://api.rawg.io/api/games?platforms=4&genres=action&publishers=354
// platforms, action & genres

// Question 3

const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

const container = document.querySelector(".results");

async function getCatFacts() {
  const response = await fetch(url);

  const results = await response.json();

  container.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    console.log(results[i].text);
    container.innerHTML += `<div class="results">${results[i].text}</div>`;
  }

  console.log(results.length);
}

getCatFacts();
