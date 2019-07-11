$(document).ready(function() {
    
    var allQuestions = [{
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
console.log (allQuestions);

var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var answerOptions;


$("#startbtn").on("click", function() {
    $("#startbtn").hide();
    startgame();
});

function startgame() {
for (i = 0; i < allQuestions.length; i++) {
    currentQuestion = allQuestions[i].question;

    // $("#display-question").text(currentQuestion);

}
};


// function startgame() {
//     currentQuestion = allQuestions[0].question;
//     $("#display-question").text(currentQuestion);

//     answerOptions = allQuestions[0].options;
//     $("#display-options").html(answerOptions );
// };


});