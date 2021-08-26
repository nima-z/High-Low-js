let hearts = ["2_hearts", "3_hearts", "4_hearts", "5_hearts", "6_hearts", "7_hearts", "8_hearts", "9_hearts", "10_hearts", "jack_hearts", "queen_hearts", "king_hearts", "ace_hearts"]
let spades = ["2_spades", "3_spades", "4_spades", "5_spades", "6_spades", "7_spades", "8_spades", "9_spades", "10_spades", "jack_spades", "queen_spades", "king_spades", "ace_spades"]
let diamonds = ["2_diamonds", "3_diamonds", "4_diamonds", "5_diamonds", "6_diamonds", "7_diamonds", "8_diamonds", "9_diamonds", "10_diamonds", "jack_diamonds", "queen_diamonds", "king_diamonds", "ace_diamonds"]
let clubs = ["2_clubs", "3_clubs", "4_clubs", "5_clubs", "6_clubs", "7_clubs", "8_clubs", "9_clubs", "10_clubs", "jack_clubs", "queen_clubs", "king_clubs", "ace_clubs"]

let allcards = [hearts, spades, diamonds, clubs]

let deck = allcards[Math.floor(Math.random() * 4)]

let card_1 = deck[Math.floor(Math.random() * 13)]



document.getElementById("cardimg").src = `cards-pic/${card_1}.png`

// document.getElementById("but_up").
