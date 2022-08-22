//Question 1

function greet(name = "John") {
  return `Hello ${name}`;
}

//Question 2

function reusableFunction(parameterA, parameterB) {
  const element = document.querySelector(".container");

  return (element.innerHTML = `<div class="${parameterA}>${parameterB}</div>`);
}

reusableFunction("elementA", "elementB");

//Question 3

async function getFact() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();

    console.log(results[8].text);
  } catch (error) {
    console.log((error = "An error has occured"));
  } finally {
    console.log("Display message");
  }
}

getFact();
