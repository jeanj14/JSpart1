function generateRandomNumber(){
    return Math.round(Math.random() * 100)
}
var maxAttempts = 10;
var curAttempts = 0;

function getPlayerGuess(){ 
    try {
        var userInput = prompt(`Input any integer within 1 and 100. You have ${maxAttempts-curAttempts} attempts`)
        if ((userInput < 1) || (userInput > 100)){
            alert("Input is out of range, please try again")
            throw new Error("Input is out of range, please try again")
        }

        if (isNaN(userInput)){
            alert("Input is not a number, please try again") 
            throw new Error("Input is not a number please try again, please try again")
        }

        return userInput

    } catch (error) {
        console.error(error)
    }

}

function checkGuess(targetNum, userInput){
    if (userInput < targetNum){
        return "too low"
    } 
    else if (userInput > targetNum) {
        return "too high"
    } 
    else if (userInput === targetNum){
        return "correct"
    }
}


function game (){
    while(curAttempts<maxAttempts){
        let result = checkGuess(generateRandomNumber(), getPlayerGuess())
        if (result != "correct") {
            curAttempts+=1
            console.log(`you have made ${curAttempts} attempts`)
            console.log("Wrong answer, try again")
        } else if (result === "correct"){
            console.log(`you have made ${curAttempts} attempts`)
            console.log("Player has won");
            break
        } 
        
        if ((result != "correct") && (curAttempts === maxAttempts)){
            console.log("Player has lost.")
        }
    }
}


game()