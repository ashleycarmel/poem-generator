function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "2tb309aa3ed47f5abf7beafo0af0d0b1";
let prompt = `User instructions: Generate a beautiful poem about ${instructionsInput.value}`;
let context = "You are an expert poet who loves to write beautiful poetry. Your mission is to generate a 4 line poem in basic HTML. Do not include a title to the poem. At the end of each poem write with 'With Love, AI' inside a <strong><em> element. Please follow user instructions.";
let apiUrl =
  `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);