$(document).ready(function () {

    var allQuestions = [
        {
            question: "How many Districts are there in Panem ?",
            options: ["5", "12", "15", "8"],
            correctAnswer: "12",
        },
        {
            question: "Who is the president of Panem ?",
            options: ["Haymitch", "Plutarch Heavensbee", "Coriolanus Snow", "Alma Coin"],
            correctAnswer: "Coriolanus Snow",
        },
        {
            question: "What is the name of Katniss Everdeen's sister ?",
            options: ["Primrose", "Rue", "Johanna", "Annie"],
            correctAnswer: "Primrose",
        },
        {
            question: "What industry is district 12 responsible for ?",
            options: ["Farming", "Weapons", "Fishing", "Coal mining"],
            correctAnswer: "Coal mining",
        },
    ];
    console.log(allQuestions);

    var countDown = 5;
    var currentQuestion = 0;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswered = 0;
    var answerOptions;
    var timer;
    var Question;


    function timerCount() {
        countDown--;
        $("#display-time").text("Time Remaining : " + countDown);

        if (countDown === 0) {
            clearInterval(timer);
            unanswered++;
            console.log ("unanswered questions " + unanswered);
            nextQuestion();
        }
    }

    $("#startbtn").on("click", function () {
        $("#startbtn").hide();
        startgame();
    });

    function startgame() {
        clearInterval(timer); 
        countDown = 5;
        timer = setInterval(timerCount, 1000);

        $("#display-time").text("Time Remaining : " + countDown);

        Question = allQuestions[currentQuestion].question;

        $("#display-question").text(Question);

        displayOptions();
    };

    function displayOptions() {
        answerOptions = allQuestions[currentQuestion].options;
        
        for (i = 0; i < answerOptions.length; i++) {
            var choices = $("<button>");
            choices.attr("data-answer", answerOptions[i]);
            choices.attr("class", "choices btn btn-primary");
            choices.text(answerOptions[i]);
            $("#display-options").append(choices);
        }
    };

    $(document).on("click", ".choices", function () {
        if (($(this).attr("data-answer")) === allQuestions[currentQuestion].correctAnswer) {
            alert("correct answer");
            correctAnswer++;
            console.log("correct answers" + correctAnswer);
            nextQuestion();
        } else {
            alert ("wrong answer");
            incorrectAnswer++;
            console.log("wrong answers " + incorrectAnswer);
            nextQuestion();
        }
        });
    

    function nextQuestion() {

        if (currentQuestion === allQuestions.length - 1) {
            endGame();

        } else {

            currentQuestion++;
            $("#display-options").html("");
            startgame();
        }
    };


    function endGame() {
        clearInterval(timer);
        $("#display-time").empty();
        $("#display-question").empty();
        $("#display-options").empty();

    };


});
