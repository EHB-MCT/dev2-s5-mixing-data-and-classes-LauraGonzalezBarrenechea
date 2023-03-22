"use strict";

import joke from "./Joke.js";

const app = {
    items: [],
    init() {
    },
    getData() {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10"
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            json.jokes.forEach(function(jokeData) {
                const joke = new Joke(jokeData.catergory, jokeData.setup, jokeData.dlivery);
                app.items.push(joke);
            });
            app.render();
        });

    },
    onSearch() {
    },
    render(message) {
        console.log(this.item);
        document.querySelector("#list").insertAdjacentElement("beforeend.app.items[0].htmlstring");
    }
};
app.init();