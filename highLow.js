

for (i = 1; i < 4; i++) {

    let hearts = ["2_hearts", "3_hearts", "4_hearts", "5_hearts", "6_hearts", "7_hearts", "8_hearts", "9_hearts", "10_hearts", "jack_hearts", "queen_hearts", "king_hearts", "ace_hearts"];
    let spades = ["2_spades", "3_spades", "4_spades", "5_spades", "6_spades", "7_spades", "8_spades", "9_spades", "10_spades", "jack_spades", "queen_spades", "king_spades", "ace_spades"];
    let diamonds = ["2_diamonds", "3_diamonds", "4_diamonds", "5_diamonds", "6_diamonds", "7_diamonds", "8_diamonds", "9_diamonds", "10_diamonds", "jack_diamonds", "queen_diamonds", "king_diamonds", "ace_diamonds"];
    let clubs = ["2_clubs", "3_clubs", "4_clubs", "5_clubs", "6_clubs", "7_clubs", "8_clubs", "9_clubs", "10_clubs", "jack_clubs", "queen_clubs", "king_clubs", "ace_clubs"];

    let allcards = [hearts, spades, diamonds, clubs];


    // let numDeck = allcards[randomChoice() * 4]
    // let numCard1 = numDeck[randomChoice() * 13]

    function randomDeck() {
        return allcards[Math.floor(Math.random() * 4)];
    }

    // pick a random deck
    let deck = randomDeck();

    function randomCard() {
        card = deck[Math.floor(Math.random() * 13)];
        while (card === "N/A") {
            card = deck[Math.floor(Math.random() * 13)];
        }
        return card;
    }

    // pick a random card
    let card1 = randomCard();

    const scores = [];
    let score = 0;

    function showScore() {
        document.querySelector("#score").innerHTML = score;
    }

    document.getElementById("cardimg").src = `cards-pic/${card1}.png`;


    while (true) {

        function playerChoice() {
            let playerChoice = document.getElementById("btn").getAttribute("value");
            return playerChoice;
        }

        let num1 = deck.indexOf(card1);
        deck[card1] = "N/A";

        deck = randomDeck();
        let card2 = randomCard();
        let num2 = deck.indexOf(card2);

        document.getElementById("cardimg").src = `cards-pic/${card2}.png`;

        if (playerChoice() === "high" && num2 > num1) {
            card1 = card2;
            score++;
            showScore();
        }
        else if (playerChoice() === "low" && num2 < num1) {
            card1 = card2;
            score++;
            showScore();
        }
        else if (num2 === num1) {
            card1 = card2;
            score++;
            showScore();
        }
        else {
            scores.push(score)
            break
        }
    }
}



