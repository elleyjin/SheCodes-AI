function handleResults(event) {
  event.preventDefault();

  let test = document.querySelector("#result");

  test.innerHTML = "generating recipe";
}

let submitButtonElement = document.querySelector("#submit-btn");

submitButtonElement.addEventListener("submit", handleResults);
