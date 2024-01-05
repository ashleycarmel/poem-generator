function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
      strings: "Just like moons and like suns",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);