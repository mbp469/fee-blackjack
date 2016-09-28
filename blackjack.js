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

    // /* the checkResult function is called immediately upon running the game with a 'hit' value of true
    // to add the second card in the initial hand */
    // nextStep(false, true);

    //
    // /* this function determines what to do next when a button is clicked. */
    // function nextStep(standing, hitting) {
    //
    //   displayCards();
    //   if(standing) {
    //     displayCards();
    //     checkResult(standing, hitting);
    //   }
    //   if(hitting){
    //     hit();
    //     displayCards();
    //     checkResult(standing, hitting);
    //   }
    // }
    checkResult(false, false);
    /* this function generates a random card */
    function generateRandomCard() {
        var random = Math.floor(Math.random() * allCards.length);
        var newCard = allCards[random];
        console.log(newCard);
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
            if (card === 'J' || card == 'Q' || card === 'K')
                cardValue = Number(cardValue) + Number(10); //if the card is a face card, add 10 to the previous card
            if (cards === 'A') {
                cardValue = Number(cardValue) + Number(11);
            } //if card is an ace, add 11 to previous card
        });
        return cardValue;
    }

    /* this traverses the myCards array and appends a div with the value for each item in the array */
    function displayCards() {
       display.innerHTML = myCards;
        }


    /* hit() generates a random card and pushes it to the myCards array.*/
    function hit() {
        console.log("myCards pre-hit: " + myCards);
        myCards.push(generateRandomCard());
        console.log("myCards post-hit: " + myCards);
        checkResult(false);
    }
    function checkResult(standing) {
      displayCards();
        var points = tallyCards(myCards);

        console.log(points);
        /* this is the set of logic that determines if the value of the cards in myCards is a winner or loser this turn. */
        if(points > 21) {
          alert("You Bust. You had " + points + " points.");
        }
        //if player goes over 21, player loses
        if(points == 21) {
          alert("You Win!!");
        }
        //if player is equal to 21, player wins
        if(standing) {
          if (points >= 19) {
            alert("You Win!");
          } else if (points >= 16) {
            alert("You Pushed.");
          } else {
            alert("You Lost.");
          }

        }
        //if player stands
          // a buncha logic to worry about


    }
  }

runGame();
