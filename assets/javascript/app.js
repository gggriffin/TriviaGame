//Variables: correct, incorrect, unanswered
var correctGuess = 0;
var incorrectGuess = 0;
var unansweredGuess = 0;
var questionNumber = 0; //increase after each answer - if (questionNumber = [n]) {
                        //                                 $("#questionDiv[n]").show()

function hideAll () {
    $("#startDiv").hide();
    $("#questionDiv1").hide();
    $("#questionDiv2").hide();
    $("#questionDiv3").hide();
    $("#questionDiv4").hide();
    $("#questionDiv5").hide();
    $("#questionDiv6").hide();
    $("#questionDiv7").hide();
    $("#questionDiv8").hide();
    $("#questionDiv9").hide();
    $("#questionDiv10").hide();
    $("#endDiv").hide();
}

 function questionNumberCheck () {
    hideAll();
    questionNumber++
    if (questionNumber === 1) {
        $("#questionDiv1").show();              
    } 
    else if (questionNumber === 2) {
        $("#questionDiv2").show();
    } 
    else if (questionNumber === 3) {
        $("#questionDiv3").show();
    }
    else if (questionNumber === 4) {
        $("#questionDiv4").show();
    }
    else if (questionNumber === 5) {
        $("#questionDiv5").show();
    }
    else if (questionNumber === 6) {
        $("#questionDiv6").show();
    }
    else if (questionNumber === 7) {
        $("#questionDiv7").show();
    }
    else if (questionNumber === 8) {
        $("#questionDiv8").show();
    }
    else if (questionNumber === 9) {
        $("#questionDiv9").show();
    }
    else if (questionNumber === 10) {
        $("#questionDiv10").show();
    }
    else if (questionNumber === 11) {
        displayResults();
        $("#endDiv").show();
    } 
    else {
        $("#startDiv").show();
        questionNumber = 0;
        correctGuess = 0;
        incorrectGuess = 0;
        unansweredGuess = 0;

    }
}   

    function timerReset() {
        
    }

    function displayResults() {
    $("#correctDisplayDiv").text("Correct: " + correctGuess);
    $("#incorrectDisplayDiv").text("Incorrect: " + incorrectGuess);
    $("#unansweredDisplayDiv").text("Unanswered: " + unansweredGuess);
        if (correctGuess === 10) {
            $("#totalDisplayDiv").text("You scored 100%!!! You must be a local!");
        } else {
    $("#totalDisplayDiv").text("You scored: " + ((correctGuess % 10)*10)+"%");
        }
    }


$(document).ready(function () {
    hideAll();
    $("#startDiv").show();
    //display timer in .timeRemaining
    //if timer gets to 0, unansweredGuess++ questionNumberCheck()
    //reset timer after correct/incorrect button click

})

$("#startButton").click(function () {
    questionNumberCheck();
    console.log("Correct: " + correctGuess)
    console.log("Incorrect: " + incorrectGuess)
    console.log("questionNumber: " + questionNumber)
});

$(".correctAnswer").click(function () {
    correctGuess++
    questionNumberCheck();
    console.log("Correct: " + correctGuess)
    console.log("Incorrect: " + incorrectGuess)
    console.log("questionNumber: " + questionNumber)

});

$(".incorrectAnswer").click(function () {
    incorrectGuess++
    questionNumberCheck();
    console.log("Correct: " + correctGuess)
    console.log("Incorrect: " + incorrectGuess)
    console.log("questionNumber: " + questionNumber)

});



//question function selects next question div and displays
//starts 30 second timer
//if user makes a choice, display correct choice, correctGuess++ || incorrectGuess++, wait 5 seconds
//else timer reaches zero, display correct choice, update unanswered variable, wait 5 seconds 
//restart function

//last div will display correct/incorrect/unanswered variables, wait 10 seconds, display start button
