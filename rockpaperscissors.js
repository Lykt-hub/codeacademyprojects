const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  return (userInput === "rock" || userInput === "scissors" || userInput === "paper" || userInput === "bomb" ? userInput : "Invalid input.");
}

const getCompChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0 ? "rock" 
  : randomNumber === 1 ? "paper" 
  : "scissors";
}

const winner = (userChoice,compChoice) => {
  return (userChoice === compChoice ? "It's a tie!"
  : userChoice === "rock " && compChoice === "scissors" ? "You win!"
  : userChoice === "paper" && compChoice === "rock" ? "You win!"
  : userChoice === "scissors" && compChoice === "paper" ? "You Win"
  : userChoice === "bomb" ? "CHEATER! YOU KILLED THE COMPUTER!!!"
  : "You lose!")
}

const play = () =>{
  const userChoice = getUserChoice("rock");
  const compChoice = getCompChoice();
  userChoice === "Invalid input." ? console.log("You can't throw that!") :
    console.log(`You threw ${userChoice}.`)
    console.log(`The computer threw ${compChoice}.`);
  console.log(winner(userChoice, compChoice))
}

play()
