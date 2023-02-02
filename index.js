const jokeContainer = document.querySelector("#joke-container");
const jokeButton = document.querySelector("#joke-button");
const jokeUrl = "https://official-joke-api.appspot.com/random_joke"

jokeButton.addEventListener("click", () => {
    console.log(jokeUrl);
   axios.get(jokeUrl)
    .then((res) => {
        console.log(res);
        let jokeQ = res.data.setup;
        let jokeA = res.data.punchline;

        let jokeItem =
        `
        <div class="joke-item">
            <h3>Q: ${jokeQ}</h3>
            <h3>A: ${jokeA}</h3>
        </div>
        `;

        jokeContainer.innerHTML = jokeItem;
    });
})