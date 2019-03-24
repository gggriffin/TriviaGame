var correctGuess = 0;
var incorrectGuess = 0;
var unansweredGuess = 0;
var questionNumber = 0;
var timeRemaining = 30;

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
    questionNumber++
    if (questionNumber === 1) {
        hideAll();
        timerReset();
        $("#questionDiv1").show(); 
        $(".answerDiv1").hide();              
    } 
    else if (questionNumber === 2) {
        $(".correctAnswer").hide();
        $(".incorrectAnswer").hide();
        $(".answerDiv1").show();
        $(".timeRemaining").hide();
        
        function showDiv2(){
        hideAll();
        timerReset();           
        $("#questionDiv2").show();
        $(".correctAnswer").show();
        $(".incorrectAnswer").show();
        $(".answerDiv2").hide();
        $(".timeRemaining").show();
        };
        
        setTimeout(showDiv2, 5000);
       
    } 
    else if (questionNumber === 3) {
        $(".correctAnswer").hide();
        $(".incorrectAnswer").hide();
        $(".answerDiv2").show();
        $(".timeRemaining").hide();


        function showDiv3(){
        hideAll();
        timerReset();
        $("#questionDiv3").show();
        $(".correctAnswer").show();
        $(".incorrectAnswer").show();
        $(".answerDiv3").hide();
        $(".timeRemaining").show();    
        }

        setTimeout(showDiv3, 5000);

    }
    else if (questionNumber === 4) {
        $(".correctAnswer").hide();
        $(".incorrectAnswer").hide();
        $(".answerDiv3").show();
        $(".timeRemaining").hide();

        function showDiv4(){
        hideAll();
        timerReset();
        $("#questionDiv4").show();
        $(".correctAnswer").show();
        $(".incorrectAnswer").show();
        $(".answerDiv4").hide();
        $(".timeRemaining").show();    
        }

        setTimeout(showDiv4, 5000);
    }
    else if (questionNumber === 5) {
        $(".incorrectAnswer").hide();
        $(".correctAnswer").hide();
        $(".answerDiv4").show();
        $(".timeRemaining").hide();

        function showDiv5(){
        hideAll();
        timerReset();
        $("#questionDiv5").show();
        $(".correctAnswer").show();
        $(".incorrectAnswer").show();
        $(".answerDiv5").hide();
        $(".timeRemaining").show();
    
        }

        setTimeout(showDiv5, 5000);              

    }
    else if (questionNumber === 6) {
        $(".correctAnswer").hide();
        $(".incorrectAnswer").hide();
        $(".answerDiv5").show();
        $(".timeRemaining").hide();

        function showDiv6(){
        hideAll();
        timerReset();
        $(".correctAnswer").show();
        $("#questionDiv6").show();
        $(".incorrectAnswer").show();
        $(".answerDiv6").hide();
        $(".timeRemaining").show();
    
        }

        setTimeout(showDiv6, 5000);              

    }
    else if (questionNumber === 7) {
        $(".incorrectAnswer").hide();
        $(".correctAnswer").hide();
        $(".answerDiv6").show();
        $(".timeRemaining").hide();

        function showDiv7(){
        hideAll();
        timerReset();
        $(".correctAnswer").show();
        $("#questionDiv7").show();
        $(".incorrectAnswer").show();
        $(".answerDiv7").hide();
        $(".timeRemaining").show();
    
        }

        setTimeout(showDiv7, 5000);              

    }
    else if (questionNumber === 8) {
        $(".correctAnswer").hide();
        $(".incorrectAnswer").hide();
        $(".answerDiv7").show();
        $(".timeRemaining").hide();

        function showDiv8(){
        hideAll();
        timerReset();
        $(".correctAnswer").show();
        $("#questionDiv8").show();
        $(".incorrectAnswer").show();
        $(".answerDiv8").hide();
        $(".timeRemaining").show();
    
        }

        setTimeout(showDiv8, 5000);              

    }
    else if (questionNumber === 9) {
        $(".incorrectAnswer").hide();
        $(".answerDiv8").show();
        $(".timeRemaining").hide();
        $(".correctAnswer").hide();

        function showDiv9(){
        hideAll();
        timerReset();
        $(".correctAnswer").show();
        $("#questionDiv9").show();
        $(".incorrectAnswer").show();
        $(".answerDiv9").hide();
        $(".timeRemaining").show();
    
        }

        setTimeout(showDiv9, 5000);              

    }
    else if (questionNumber === 10) {
        $(".incorrectAnswer").hide();
        $(".answerDiv9").show();
        $(".timeRemaining").hide();
        $(".correctAnswer").hide();

        function showDiv10(){
        hideAll();
        timerReset();
        $(".correctAnswer").show();
        $("#questionDiv10").show();
        $(".incorrectAnswer").show();
        $(".answerDiv10").hide();
        $(".timeRemaining").show();
    
        }

        setTimeout(showDiv10, 5000);              

    }
    else if (questionNumber === 11) {
        $(".incorrectAnswer").hide();
        $(".answerDiv10").show();
        $(".timeRemaining").hide();
        $(".correctAnswer").hide();

        function showDiv11(){
        hideAll();
        displayResults();
        $("#endDiv").show();
        $(".correctAnswer").show();
        $(".incorrectAnswer").show();
        $(".answerDiv10").hide();
     
        }
        
        setTimeout(showDiv11, 5000);

    }
    else {
        $("#startDiv").show();
        $(".timeRemaining").hide();
        questionNumber = 0;
        correctGuess = 0;
        incorrectGuess = 0;
        unansweredGuess = 0;

    };
}   


function timerReset() {
    handle = setInterval(function () {
        timeRemaining--;
        $(".timeRemaining").text(timeRemaining);
        if (timeRemaining < 1) {
            unansweredGuess++
            timeRemaining = 30;
            clearInterval(handle);
            questionNumberCheck();
            return(handle);
        }
    }, 1000);
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
    };


$(document).ready(function () {
    hideAll();
    $("#startDiv").show();
    
})

$("#startButton").click(function () {
    hideAll();
    questionNumberCheck();
    console.log("Correct: " + correctGuess)
    console.log("Incorrect: " + incorrectGuess)
    console.log("questionNumber: " + questionNumber)
    console.log("Unanswered: " + unansweredGuess)
});

$(".correctAnswer").click(function () {
    correctGuess++
    timeRemaining = 30;
    clearInterval(handle);
    questionNumberCheck();
    console.log("Correct: " + correctGuess)
    console.log("Incorrect: " + incorrectGuess)
    console.log("questionNumber: " + questionNumber)
    console.log("Unanswered: " + unansweredGuess)

});

$(".incorrectAnswer").click(function () {
    incorrectGuess++
    timeRemaining = 30;
    clearInterval(handle);
    questionNumberCheck();
    console.log("Correct: " + correctGuess)
    console.log("Incorrect: " + incorrectGuess)
    console.log("questionNumber: " + questionNumber)

});

$("#tryAgainButton").click(function () {
    hideAll();
    $("#startDiv").show();
});



//question function selects next question div and displays
//starts 30 second timer
//if user makes a choice, display correct choice, correctGuess++ || incorrectGuess++, wait 5 seconds
//else timer reaches zero, display correct choice, update unanswered variable, wait 5 seconds 
//restart function

//last div will display correct/incorrect/unanswered variables, wait 10 seconds, display start button
