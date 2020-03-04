var body = document.body; 
var header = document.createElement("header");
var ElH1 = document.createElement("h1");
var Elinfo = document.createElement("div");
var ElButton = document.createElement("button");
var ElTimer = document.getElementById("timer");
var ElHighScores = document.getElementById("highscores");
var Question1 = document.createElement("div");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var correctCounter = 0;
var timerCounter = 75;
var timeLess = nowTime - 15;

header.textContent = "View Highscores"; 
ElTimer.innerHTML = "Time: " + timerCounter;
ElH1.textContent = "Coding Quiz Challenge";
Elinfo.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
ElButton.textContent = "Start Quiz";


body.appendChild(ElH1);
body.appendChild(Elinfo);
body.appendChild(ElButton);

header.setAttribute("style", "text-align: left; font-size: 14px;");
ElTimer.setAttribute("style", "text-align: right; font-size: 14px;");
ElH1.setAttribute("style", "text-align: center; font-size: 18px; font-weight: bold;");
Elinfo.setAttribute("style", "text-align: center; font-size: 14px;");
ElButton.setAttribute("style", "background-color: purple; color: white; padding: 5px; display: inline-block; font-size: 14px;");


var choiceQuestionOne = ["strings", "booleans", "alerts", "numbers"];
var choiceQuestionTwo = ["numbers and strings", "other arrays", "booleans", "all of the above"];
var choiceQuestionThree = ["commas", "curly brackets", "quotes", "parantheses"];



function startButton() {
    ElButton.onclick(window.open()) = function() {
        prompt("Commonly used data types DO NOT include: " + strings + booleans + alerts + numbers);
            if (quizTakerChoice=index[1]) {
                alert("That choice is Correct!");
                correctCounter++;
            }
            else {
                "That choice is Incorrect!"
                timeLess();
            };
        }

        prompt("Arrays in JavaScript can be used to store: " + numStrings + otherArrays + booleans + allAbove);
            if (quizTakerChoice=index[0]) {
            alert("That choice is Correct!");
            correctCounter++;
        }
            else {
            "That choice is Incorrect!"
            timeLess();
        };

        prompt("String values must be enclosed within _____ when being assigned to variables: " + commas + curlyBrackets + quotes + parantheses);
            if (quizTakerChoice=index[0]) {
            alert("That choice is Correct!");
            correctCounter++;
        }
            else {
            "That choice is Incorrect!"
            timeLess();
        };

        nowTime();

    };

    startButton();

function nowTime() {
    setInterval(function() {
        timerCounter--;
    }, 1000);
};

function storeChoices() {
    localStorage.setItem("quizTakerChoice", JSON.stringify(quizTakerChoice));
    localStorage.setItem("initials", JSON.stringify(initials));
}

function highScores() {
    score = JSON.parse(localStorage.getItem("quizTakerChoice"));
    var lastUser = JSON.parse(localStorage.getItem("initials"));
    }

storeChoices();
highScores();