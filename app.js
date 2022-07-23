    let cardarray = [1,1,2,2,3,3,4,4]
    let firstCardSelected = ""
    let first = ""
    let second = ""
    let numCardsSelected = 0
    let countMatchedPair = 0
    
    
    // SET UP GAME
    // Organise cards into a random order
    
      cardarray.sort(
      function() {
         return 0.5 - Math.random()
        }
      ) ;
    
      console.log(cardarray);
    
      let cards = document.querySelectorAll(".card")
      
    //set the classnames for each card
    
    
        for (let i=0; i<cards.length; i++) {
            cards[i].classList.add("card" + cardarray[i], "notmatched")
            
        }

        //SOUNDS

const swish = new Audio("assets/swish.wav");
const correct = new Audio("assets/correct.mp3");
const incorrect = new Audio("assets/incorrect.wav");
const win = new Audio("assets/win.wav");

function playCorrectSound() {
    correct.play()
}

function playIncorrectSound() {
    incorrect.play()
}

function playWin() {
    win.play()
}

cards.forEach(card => {
  card.addEventListener("click", () => {
    swish.play()
  });
});
    
    
    //PLAY GAME
    
    Array.prototype.forEach.call(cards, function (cardSelected) {
    
      cardSelected.addEventListener("mousedown", function () {
    
        if (this.classList.contains("notmatched")) {
        // if no cards have been turned, then assign 'first' to the clicked card and display the picture
          if (numCardsSelected == 0 ){
            first = this
            numCardsSelected = 1
            // 'chosen' class is added to the picture div to indicate that it can't be selected again
            first.childNodes[1].classList.add("chosen")
            console.log(this)
            //hide the back of the card to display the front
            this.childNodes[3].classList.add("hide");
        // if one card has been turned, assign 'second' to the clicked card and display the picture
          } else if (numCardsSelected == 1 && !this.childNodes[1].classList.contains("chosen")) {
            second = this
            numCardsSelected = 2
            //hide the back of the card to display the front
            this.childNodes[3].classList.add("hide");

            // if first and second are the same, remove them from the game and hide them after a pause
            if(first.className == second.className) {
              console.log("IT'S A MATCH")
              setTimeout(function () {
                playCorrectSound()
              }, 300)
              countMatchedPair ++
              first.childNodes[1].classList.remove("chosen")
              first.classList.remove("notmatched")
              second.classList.remove("notmatched")
              let firstCard = first.childNodes[1]
              let secondCard = second.childNodes[1]
              setTimeout(function () {
                  firstCard.classList.add("hide")
                  secondCard.classList.add("hide")
                }, 1000);
    
            // if first and second are different, hide them after a pause
            } else {
              console.log ("WRONG")
              setTimeout(function () {
                playIncorrectSound()
              }, 600)
              let firstCard = first.childNodes[3]
              let secondCard = second.childNodes[3]
              first.childNodes[1].classList.remove("chosen")
              setTimeout(function () {
                  firstCard.classList.remove("hide")
                  secondCard.classList.remove("hide")
                }, 1000);
            }
            numCardsSelected = 0
          } 

          // Display "Game over" text when the cards have all been matched
          
          if(countMatchedPair == cardarray.length/2 && numCardsSelected == 0)
            {
    
                setTimeout(function () {
                    document.getElementById("gameOver").textContent = "you win";
                    playWin()
                  }, 1500);
              
            } 
        }
      }
      )
    }
    )






function game(){
    location.reload();
}