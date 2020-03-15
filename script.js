var body = document.body;
var header = document.createElement("header");
var ElH1 = document.createElement("h1");
var Elinfo = document.createElement("div");
var ElButton = document.createElement("button");
var ElTimer = document.getElementById("timer");
var ElHighScores = document.getElementById("highscores");
var score = document.querySelector("score");
var initials = document.getElementById("initials");
var saveScore = document.getElementById("save");
var goBack = document.getElementById("goback");
var clear = document.getElementById("clear");
var form = document.getElementById("form");
var highScore = document.getElementById("highScoreDisplay");
var correctCounter = 0;
var timerCounter = 75;
//var timeLess = nowTime - 15;

header.innerHTML = "View Highscores";
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
Elinfo.setAttribute("style", "text-align: center; font-size: 14px; margin-left: 400px; margin-right: 400px;");
ElButton.setAttribute("style", "text-align: center; background-color: purple; color: white; padding: 5px; display: inline-block; font-size: 14px; margin-left: 600px; margin-top: 20px;");


var score1 = 0;
var score2 = 0;
var score3 = 0;


var userInput1 = document.querySelectorAll("answerButton1");
var userInput2 = document.querySelectorAll("answerButton2");
var userInput3 = document.querySelectorAll("answerButton3");

var rightAnswer1 = document.getElementById("true1");
var rightAnswer2 = document.getElementById("true2");
var rightAnswer3 = document.getElementById("true3");


$("#question1").hide();
$("#question2").hide();
$("#question3").hide();
$("#scoreInput").hide();
$("#highScoreDisplay").hide();


$(ElHighScores).click(function() {
    $("#highScoreDisplay").show();
    JSON.parse(localStorage.getItem("finalScore", "initials"));

});


//fix score recording aka quizTakerChoice
//fix clear button at end 

function quizTakerChoice() {
    if (userInput1=rightAnswer1) {
        score1 = 5;
    }

    else {
        score1 = 0;
    };

    if (userInput2=rightAnswer2) {
        score2 = 5;
    }

    else {
        score2 = 0;
    };

    if (userInput3=rightAnswer3) {
        score3 = 5;
    }

    else {
        score3 = 0;
    };
    
};



//function startButton() {
$(ElButton).click(function() {
    $("#question1").show();
    $(ElH1).hide();
    $(Elinfo).hide();
    $(ElButton).hide();
    $("#highScoreDisplay").hide();
    });

$(".answerButton1").click(function() {
    $("#question2").show();
    $("#question1").hide();
    $(ElH1).hide();
    $(Elinfo).hide();
    $(ElButton).hide();
    $("#highScoreDisplay").hide();
});

quizTakerChoice();
localStorage.setItem("score1", JSON.stringify(score1));
console.log(score1);

$(".answerButton2").click(function() {
    $("#question3").show();
    $("#question1").hide();
    $("#question2").hide();
    $(ElH1).hide();
    $(Elinfo).hide();
    $(ElButton).hide();
    $("#highScoreDisplay").hide();
});

quizTakerChoice();
localStorage.setItem("score2", JSON.stringify(score2));
console.log(score2);
var finalScore = score1 + score2 + score3;

$(".answerButton3").click(function() {
    $("#scoreInput").show();
    $("#score").val(finalScore);
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $(ElH1).hide();
    $(Elinfo).hide();
    $(ElButton).hide();  
    $("#highScoreDisplay").hide();
});

quizTakerChoice();
localStorage.setItem("score3", JSON.stringify(score3));


console.log(score3);
console.log(finalScore);
console.log(localStorage);


$(saveScore).click(function () {
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
    localStorage.setItem("initials", JSON.stringify(initials));
});

$(clear).click(function() {
    $(initials).clear();
    $(score).clear();
});

$(goBack).click(function() {
    $(ElH1).show();
    $(Elinfo).show();
    $(ElButton).show(); 
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#scoreInput").hide();
    $("#highScoreDisplay").hide();
})




    /* if (quizTakerChoice = index[1]) {
            alert("That choice is Correct!");
            correctCounter++;
        }
        else {
            "That choice is Incorrect!"
            timeLess();
        }; */


   /* 
    if (quizTakerChoice = index[0]) {
        alert("That choice is Correct!");
        correctCounter++;
    }
    else {
        "That choice is Incorrect!"
        timeLess();
    };


    if (quizTakerChoice = index[0]) {
        alert("That choice is Correct!");
        correctCounter++;
    }
    else {
        "That choice is Incorrect!"
        timeLess();
    };

    nowTime(); */

//};

//startButton();

/*
function nowTime() {
    setInterval(function () {
        timerCounter--;
    }, 1000);
};



function highScores() {
    ElHighScores.addEventListener("click", function () {
        score = JSON.parse(localStorage.getItem("quizTakerChoice"));
        var lastUser = JSON.parse(localStorage.getItem("initials"));
    });

};

 */