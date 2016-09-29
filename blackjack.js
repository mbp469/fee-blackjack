function runGame() {
    var display = document.getElementById('cards');
    var allCards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var myCards = [generateRandomCard(),generateRandomCard()]; //variable to store my hand. initialize with two cards.

    /* this links the stand button to checkResult() function */
    document.getElementById('stand').addEventListener('click', function() {
        checkResult(true);
    });
    /* this links the hit button to the hit() function */
    document.getElementById('hit').addEventListener('click', function() {
        hit();
    });

    checkResult(false); //checks the first two cards' values

    /* this function generates a random card */
    function generateRandomCard() {
        var random = Math.floor(Math.random() * allCards.length);
        var newCard = allCards[random];
        return newCard;
    }

    /* this function traverses an array and returns the value of the cards in that array. */
    function tallyCards(myCards) {
        var cardValue = 0; //variable to hold the value of the cards in the myCards array.
        myCards.forEach(function(card, i) { //go through array of cards in your hand.
            /* this is the set of logic to add up the value of the cards in myCards. */
            if (Number(card)) {
                cardValue += Number(card); //if the card value is a number, add to to the previous card
            }
            if (card === 'J' || card === 'Q' || card === 'K')
                cardValue = Number(cardValue) + Number(10); //if the card is a face card, add 10 to the previous card
            if (card === 'A') {
                cardValue = Number(cardValue) + Number(11);
            } //if card is an ace, add 11 to previous card
        });
        return cardValue;
    }
    /* this traverses the myCards array and appends a div with the value for each item in the array */
    function displayCards() {
      var displayString = "";
      for (var index in myCards) {
        displayString = displayString + ' ' + myCards[index];
      }
        display.innerHTML = displayString;
    }
    /* hit() generates a random card and pushes it to the myCards array.*/
    function hit() {
        myCards.push(generateRandomCard());
        checkResult(false);
    }

    /* go through array and see how many aces there are */
    function countAces() {
        var numberOfAces = 0;
        for(var index in myCards) {
            if (myCards[index] === 'A') {
                numberOfAces += 1;
            }
        }
        return numberOfAces;
    }

    /* checks the results and pops up alert box if win or loss occurs. */
    function checkResult(standing) {
        displayCards();
        var points = tallyCards(myCards);
        var aces = countAces();
        /* this is the set of logic that determines if the value of the cards in myCards is a winner or loser this turn. */
        while (points > 21 && aces > 0) {
            points -= 10;
            aces-=1;
            console.log("aces in checkResult: " + aces);
            console.log("points in checkResult: " + points);
        }
        if (points > 21) {
            alert("You Bust. You had " + points + " points.");
            location.reload();
        }
        if (points === 21) {
            alert("You Win!!");
            location.reload();
        }
        if (standing) {
            if (points >= 19) {
                alert("You Win!");
                location.reload();
            } else if (points >= 16) {
                alert("You Pushed.");
                location.reload();
            } else {
                alert("You Lost.");
                location.reload();
            }
        }
    }
}

runGame();
