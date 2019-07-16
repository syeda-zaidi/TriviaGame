$(document).ready(function () {

    var allQuestions = [
        {
            question: "How many Districts are there in Panem ?",
            options: ["6", "12", "15", "8"],
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
        {
            question: "Who is Katniss and Peeta's mentor ?",
            options: ["Gale Hawthorne", "Effie Trinket", "Haymitch Abernathy", "Finnick Odair"],
            correctAnswer: "Haymitch Abernathy",
        },

    ];

    var countDown = 15;
    var currentQuestion = 0;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswered = 0;
    var answerOptions;
    var timer;
    var Question;

    //runs the timer, and loads next question if timer reaches 0 
    function timerCount() {
        countDown--;
        $("#display-time").text("Time Remaining : " + countDown);

        if (countDown === 0) {
            clearInterval(timer);
            unanswered++;
            nextQuestion();
        }
    }

    //on click the game starts 
    $("#startbtn").on("click", function () {
        $("#startbtn").hide();
        startgame();
    });

    // loads the questions and choices 
    function startgame() {
        clearInterval(timer);
        countDown = 15;
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

    //event listener for chosen answer, and loads the next question 
    $(document).on("click", ".choices", function () {
        var selectedAnswer = $(this).attr("data-answer");
        if (selectedAnswer === allQuestions[currentQuestion].correctAnswer) {

            correctAnswer++;
            $(this).attr("class", "choices btn btn-success")
            clearInterval(timer);
            setTimeout(nextQuestion, 2000);
        } else {

            incorrectAnswer++;
            $(this).attr("class", "choices btn btn-danger")
            clearInterval(timer);
            setTimeout(nextQuestion, 1000);
        }
    });

    //loads the next question, if no more questions then ends the game 
    function nextQuestion() {

        if (currentQuestion === allQuestions.length - 1) {
            endGame();

        } else {

            currentQuestion++;
            $("#display-options").html("");
            startgame();
        }
    };

    // at the end of all questions, empties all html and stops the timer
    function endGame() {
        clearInterval(timer);
        $("#display-time").empty();
        $("#display-question").empty();
        $("#display-options").empty();

        displayResult();

    };
    //displays the final results 
    function displayResult() {
        var results = `
        <p> Correct Answers : ${correctAnswer} </p>
        <p> Incorrect Answers : ${incorrectAnswer} </p>
        <p> Unanswered Questions : ${unanswered} </p>
        <button id="resetbtn" class="btn btn-primary"> Reset Game </button>
        `;
        $("#display-result").html(results);
        $("#display-result").show();

    };

    $(document).on("click", "#resetbtn", function () {
        $("#display-result").hide();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        startgame();

    });

});
