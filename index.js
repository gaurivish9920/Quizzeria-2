
var readlineSync = require("readline-sync");

var chalk = require("chalk")

 

 var username = readlineSync.question("Enter your name bud : ")
console.log("Welcome to my quiz game Quizzeria " + username + "!!!")
console.log("Press Enter key to submit answer.")
var score = 0


function quizque(question, answer) {
  var useranswer = readlineSync.question(question)
  if (answer === useranswer.toUpperCase()) {
     
    score= score+1
    console.log("You are right " + username + "!")
    console.log("Your score is:" + score)
  } else {
    score= score-1
    console.log("Oops! you are wrong")
    console.log("The correct answer is " + answer + "!")
    console.log("Your score is :" + score  + " You lost one mark!! :(")
  }
}



console.log("-------------------------------")
quizque("What is female swan called? ","PEN")
console.log("-------------------------------")

quizque("What is the name of Harry Potter’s pet owl? ","HEDWIG")
console.log("-------------------------------")

quizque("What is closer to earth, the moon or the sun? ","MOON")
console.log("-------------------------------")

quizque("Who has more bones, Baby or Adult? ", "BABY")
console.log("-------------------------------")



quizque("What is middle of PARIS? ","R")
console.log("-------------------------------")

quizque("Who is Thor's father? ", "ODIN")
console.log("-------------------------------")

quizque("LBW stands for? ", "LEG BEFORE WICKET")
console.log("-------------------------------")

quizque("What has to be broken before you can use it? ","EGG")
console.log("-------------------------------")

quizque("What is white when it's dirty? ", "BLACKBOARD")
console.log("-------------------------------")

quizque(" Nick name of Peter Quill in The Gaurdians of Galaxy? ", "STAR LORD")
console.log("-------------------------------")



console.log("Your Total score is: " + score + "!!")

var finalscore = score
if (finalscore === 10) {
  console.log("You are pretty smart! BRILLIANT!!")
} else { 
  console.log("Congratulations!")
}
function replay() {
  var again = readlineSync.question("Do you want to play again?y/n")

  if (again == 'n') {
    console.log("See you next time!")
  } else if (again == 'y') {
    console.log("Great! Let's get started.");
    
    score=0
    console.log("-------------------------------")
    quizque("What is female swan called? ","PEN")
    console.log("-------------------------------")

    quizque("What is the name of Harry Potter’s pet owl? ","HEDWIG")
    console.log("-------------------------------")

    quizque("What is closer to earth, the moon or the sun? ","MOON")
    console.log("-------------------------------")

    quizque("Who has more bones, Baby or Adult? ", "BABY")
    console.log("-------------------------------")

    quizque("What is middle of PARIS? ","R")
    console.log("-------------------------------")

    quizque("Who is Thor's father? ", "ODIN")
    console.log("-------------------------------")

    quizque("LBW stands for? ", "LEG BEFORE WICKET")
    console.log("-------------------------------")

    quizque("What has to be broken before you can use it? ","EGG")
    console.log("-------------------------------")

    quizque("What is white when it's dirty? ", "BLACKBOARD")
    console.log("-------------------------------")

    quizque(" Nick name of Peter Quill in The Gaurdians of Galaxy? ", "STAR LORD")
    console.log("-------------------------------")



    console.log("Your Total score is: " + score + "!!")
    var newfinalsccore= score
    }
    if (finalscore < newfinalsccore) {
  console.log("You broke your own record!!")
  console.log(chalk`
    your new final score is {bold ${newfinalsccore}!}
`);

}

}
replay()
