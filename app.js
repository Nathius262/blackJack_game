
//////////////////////////////
//////////////////////////////
///// pratical challenge /////
//////////////////////////////
//////////////////////////////
let messageEl = document.getElementById('message-el')
let message = ""
let cardEl = document.getElementById('card-el')
let sumEl = document.getElementById('sum-el')
let playerEl = document.getElementById('player-el')
let card = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let startGameId = document.getElementById('startGame')


function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    }
    return randomNumber
}

function renderGame(){
    cardEl.textContent = "Card: "
    for (let i=0;i<card.length;i++){
        
        cardEl.textContent += `${card[i]} `
    }

    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack"
        hasBlackJack = true
        startGameId.disabled = false
        startGameId.classList.remove('disabled')
    } else{
        message = "You're out of the game!"
        isAlive =false
        startGameId.disabled = false
        startGameId.classList.remove('disabled')
    }
    messageEl.textContent =message
    
}

function startGame(){
    isAlive = true
    let firstCard = generateRandomNumber()
    let secondCard = generateRandomNumber()
    card = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    startGameId.disabled = true
    startGameId.classList.add('disabled')

}

function newCard(){
    if (isAlive && !hasBlackJack){
        let thirdCard = generateRandomNumber()
        sum += thirdCard
        card.push(thirdCard)
        renderGame()
    }
    
}