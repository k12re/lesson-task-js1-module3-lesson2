//Question 1

function greet(name = "John") {
  return `Hello ${name}`;
}

//Question 2

function reusableFunction(parameterA, parameterB) {
  return `<div class="${parameterA}>${parameterB}</div>`;
}

//Question 3

async function getFact() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();

    console.log(results[8].text);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Display message");
  }
}

getFact();
