const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
"Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride",
"true",
"40",
"Trajectory",
"3"];
let candidateAnswers = [];
let candidateCorrectAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName =  input.question("What is your name? ");
console.log("Hello, " + candidateName + ". Welcome to the initial screening test. Please remember that answers are case sensitive.");
return candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
candidateAnswers = input.question();
return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < questions.length; i++) {
  if (candidateAnswers[i] === correctAnswers[i]){
    candidateCorrectAnswers.push(candidateAnswers)
  }

}
let grade = ((candidateCorrectAnswers.length) / (correctAnswers.length)) * 100;
return grade;
}

function runProgram() {
  // TODO 1.1c: Ask for candidate's name //
askForName();
for (let i = 0; i < questions.length; i++) {
  candidateAnswers = askQuestion(questions[i]);
}
gradeQuiz(this.candidateAnswers);
}

runProgram;

let candidateStatus = "";
if (grade >= 80){
  candidateStatus = "PASSED";
  } else {
    candidateStatus = "FAILED";
  }

console.log(
"Candidate Name: " + candidateName "\n"
"1) " + questions[1]\n
"Your Answer: " + candidateAnswers[1]\n
"Correct Answer: " + correctAnswers [1]\n
\n
"2) " + questions[2]\n
"Your Answer: " + candidateAnswers[2]\n
"Correct Answer: " + correctAnswers [2]\n
\n
"3) " + questions[3]\n
"Your Answer: " + candidateAnswers[3]\n
"Correct Answer: " + correctAnswers [3]\n
\n
"4) " + questions[4]\n
"Your Answer: " + candidateAnswers[4]\n
"Correct Answer: " + correctAnswers[4]"\n"
\n
"5) " + questions[5]\n
"Your Answer: " + candidateAnswers[5]\n
"Correct Answer: " + correctAnswers [5]\n
\n
">>> Overall Grade: " + grade + "% (" + (candidateCorrectAnswers.length) " of " + (correctAnswers.length) " responses correct) <<<"\n
">>> Status: " + candidateStatus + " <<<)"
)

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};