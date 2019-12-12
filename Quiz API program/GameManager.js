var w = 1240;
var h = 720;
var state = "start";
var gameRound;
var correctAnswers = 0;
var questions;
var amountOfQuestions = 10;

var canShowQuestions = false;

function setup() {
    createCanvas(w, h);
}

function BeginGame() {
    state = "game";
    // Gør pæren blå
    setHue(43690);
}

function draw() {
    // Kør de forskellige funktioner afhængigt af, hvilken gamestate spillet er i
    switch (state) {
        case "start":
            StartLoop();
            break;
        case "game":
            GameLoop();
            break;
        case "end":
            EndLoop();
            break;
    }
    
}

function StartLoop() {
    // Tegn først baggrunden, så den bliver tegnet bagerst (selvom der ikke bliver tegnet mere i js i denne funktion)
    background(30);
    // Tager nogle elementer fra vores html og ser på hvilke af dem der skal vises og hvilke der skal skjules, ud fra hvilken state spillet er i
    document.getElementById('tryAgain').hidden = true;
    document.getElementById('welcome').hidden = false;
    document.getElementById('end').hidden = true;
    document.getElementById('answers').hidden = true;
    document.getElementById('question').hidden = true;

    gameRound = 1;
}

var orderDecited = false;
var order = 0;

function GameLoop() {
    // Tegn først baggrunden, så den bliver tegnet bagerst
    background(30);

    document.getElementById('tryAgain').hidden = true;
    document.getElementById('welcome').hidden = true;
    document.getElementById('end').hidden = true;
    document.getElementById('question').hidden = false;

    // Question
    document.getElementById("questionText").innerHTML = unescape(questions[gameRound - 1].question);

    // Options
    document.getElementById('answers').hidden = false;
    document.getElementById('answerBtn1').hidden = false;
    document.getElementById('answerBtn2').hidden = false;
    document.getElementById('answerBtn3').hidden = false;
    document.getElementById('answerBtn4').hidden = false;

    textAlign(LEFT);
    if (!orderDecited) {
        if (questions[gameRound - 1].type == "multiple") {
            order = Math.floor(1 + Math.random() * 4);
        } else {
            order = Math.floor(1 + Math.random() * 2);
        }
        orderDecited = true;
    }

    if (order == 1) {
        var incorrectAns1Order = 2;
        var incorrectAns2Order = 3;
        var incorrectAns3Order = 4;
    } else if (order == 2) {
        var incorrectAns1Order = 1;
        var incorrectAns2Order = 3;
        var incorrectAns3Order = 4;
    } else if (order == 3) {
        var incorrectAns1Order = 1;
        var incorrectAns2Order = 2;
        var incorrectAns3Order = 4;
    } else if (order == 4) {
        var incorrectAns1Order = 1;
        var incorrectAns2Order = 2;
        var incorrectAns3Order = 3;
    }

    document.getElementById("answerBtn" + order).innerHTML = unescape(questions[gameRound - 1].correct_answer);
    document.getElementById("answerBtn" + incorrectAns1Order).innerHTML = unescape(questions[gameRound - 1].incorrect_answers[0]);
    document.getElementById("answerBtn" + incorrectAns2Order).innerHTML = unescape(questions[gameRound - 1].incorrect_answers[1]);
    document.getElementById("answerBtn" + incorrectAns3Order).innerHTML = unescape(questions[gameRound - 1].incorrect_answers[2]);

    //Hvis spørgsmålet er en boolean, altså et true eller false spørgsmål, skal de valgmulighed 3 og 4 ikke vises, da de ikke findes
    if (questions[gameRound - 1].type == "boolean") {
        document.getElementById('answerBtn3').hidden = true;
        document.getElementById('answerBtn4').hidden = true;
    }

    if (gameRound > amountOfQuestions - 1) {
        state = "end";
    }
}

// Viser og skjuler de forskellige elementer på slutskærmen
function EndLoop() {
    document.getElementById('end').hidden = false;
    document.getElementById('tryAgain').hidden = false;
    document.getElementById('answers').hidden = true;
    document.getElementById('question').hidden = true;

    document.getElementById("score").innerHTML = `Du svarede ${correctAnswers} ud af ${amountOfQuestions} svar rigtigt`;
}

function Answer(theAnswer) {
    if (theAnswer == order) {
        // CORRECT ANSWER
        correctAnswers++;
        print("Correct!");
    } else {
        // WRONG ANSWER
        print("Incorrect! The correct answer was: " + unescape(questions[gameRound - 1].correct_answer));
        setHue(10);
    }
    print(questions[gameRound - 1]);

    gameRound++;
    orderDecited = false;
}

function TryAgain() {
    // Genstart spillet, så nulstil alle variable, som burde blive nulstillet.
    correctAnswers = 0;
    state = "start";
}

