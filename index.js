function generateStory(event) {
  event.preventDefault();

  let resultElement = document.querySelector("#result");
  resultElement.innerHTML = `<p class="blink_me"><i class="fa-solid fa-cookie-bite"></i> cooking your story</p>
  `;
  resultElement.classList.remove("hidden");

  let instruction = document.querySelector("#user-instruction");
  let apiKey = "aed3fabf26t4afa48435e0ea0oed7b6e";
  let context = `You are a friendly AI assistant that love children and love telling different bedtime stories. You should follow the user instructions. Your stories should be short and meaningful for kids. The stories should be shown with basic HTML format such as <p></p>. `;
  let prompt = `User instructions: Generate a nice short bedtime story for children about ${instruction.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  let imageApiKey = `aed3fabf26t4afa48435e0ea0oed7b6e`;

  let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${instruction.value}&key=${imageApiKey}`;

  axios.get(imageApiUrl).then(handleImageResponse);
}

function handleImageResponse(response) {
  //   console.log(response.data.photos[0].src.landscape);
  let imageElement = document.querySelector("#image");

  if (imageElement) {
    let imageUrl = response.data.photos[0].src.landscape;

    imageElement.innerHTML = "";

    let imgHtml = `<img src="${imageUrl}" alt="generated story image" style="width: 100%; height: auto;" />`;

    imageElement.innerHTML = imgHtml;
  } else {
    return null;
  }
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

submitButtonElement.addEventListener("submit", generateStory);
