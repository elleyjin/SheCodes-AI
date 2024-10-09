function generateJokes(event) {
  event.preventDefault();

  let test = document.querySelector("#result");
  test.innerHTML = "generating recipe";

  let instruction = document.querySelector("#user-instruction");

  let apiKey = "aed3fabf26t4afa48435e0ea0oed7b6e";

  let context = `You are a friendly AI assistant that love children and love telling different bedtime stories. You should follow the user instructions. Your stories should be short and meaningful for kids. The stories should be shown with basic HTML format such as <p></p>.You should also read the text aloud when you generate the texts. You should also provide some illustration about the story.`;
  let prompt = `User instructions: Generate a nice short bedtime story for children about ${instruction.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
}

function handleResponse(response) {
  console.log(response.data);
  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let submitButtonElement = document.querySelector("#submit-btn");

submitButtonElement.addEventListener("submit", generateJokes);
