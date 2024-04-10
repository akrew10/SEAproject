const games = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        genre: "Action-adventure",
        releaseYear: 2017,
        platform: "Nintendo Switch",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
        title: "The Witcher 3: Wild Hunt",
        genre: "Action role-playing",
        releaseYear: 2015,
        platform: "PlayStation 5, Xbox Series X, PC",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg"
    },
    {
        title: "Red Dead Redemption 2",
        genre: "Action-adventure",
        releaseYear: 2018,
        platform: "PlayStation 5, Xbox Series X, PC",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Red_Dead_Redemption_II.jpg/220px-Red_Dead_Redemption_II.jpg"
    },
    {
        title: "Counter Strike 2",
        genre: "Tactical first-person Shooter",
        releaseYear: 2023,
        platform: "PC",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/CS2_Cover_Art.jpg/220px-CS2_Cover_Art.jpg"
    },
    {
        title: "Call of Duty: Black Ops",
        genre: "First-person Shooter",
        releaseYear: 2010,
        platform: "PS3, Xbox 360, Wii",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/CoD_Black_Ops_cover.png/220px-CoD_Black_Ops_cover.png"
    },
    {
        title: "Helldivers 2",
        genre: "Third-person Shooter, Online Co-op ",
        releaseYear: 2024,
        platform: "PC, PS5",
        picture: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Helldivers2cover.png/220px-Helldivers2cover.png"
    }

];

const quotes = [
    "Press F to pay respects",
    "Remove any doubts in your head; it's us, or them.",
    "Sorry Mario, but your princess is in another castle!",
    "Do a barrel roll!",
    "The numbers, Mason! What do they mean?",
    "Finish him!",
    "Endure and survive.",
    "The right man in the wrong place can make all the difference in the world."
];

// Displays cards for each game
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    games.forEach(game => {
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, game); // Edit content with game data
        cardContainer.appendChild(nextCard); // Add new card to the container
    });
}

// Edits card content with game data
function editCardContent(card, game) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = game.title;

    const cardImage = card.querySelector("img");
    
    cardImage.src = game.picture; 
    cardImage.alt = game.title + " Cover";

    const genreSpan = card.querySelector(".genre");
    genreSpan.textContent = game.genre;

    const releaseYearSpan = card.querySelector(".release-year");
    releaseYearSpan.textContent = game.releaseYear;

    const platformSpan = card.querySelector(".platform");
    platformSpan.textContent = game.platform;
}


document.addEventListener("DOMContentLoaded", showCards);

//Selects a random quote within the quotes array
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}


function quoteAlert() {
    const randomQuote = getRandomQuote();
    console.log("Button Clicked!");
    alert(randomQuote);
}

function removeLastCard() {
    games.pop(); // Remove last game in the array
    showCards(); // Call showCards again to refresh
}