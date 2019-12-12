var token;

// Laver en token som sørger for at man ikke kan få det samme spørgsmål to gange i et spil
function generateToken() {
    if (token == null) {
        document.getElementById("start-status").innerHTML = `Generating token`;
        loadJSON("https://opentdb.com/api_token.php?command=request", generateQuestions);
    } else {
        generateQuestions();
    }
}

// Vi henter spørgsål med denne token
function generateQuestions(data) {
    
    token = data.token;
    document.getElementById("start-status").innerHTML = `Generating questions`;
    loadJSON("https://opentdb.com/api.php?amount=" + amountOfQuestions + "&encode=url3986&token=" + token, loadQuestions);
}

// Sætter questions arrayet til de genererede spørgmsmål og starter spillet (i GameManager.js)
function loadQuestions(data) {
    questions = data.results;
    BeginGame();
    document.getElementById("start-status").innerHTML = ``;
}

// Nulstiller token
function resetToken() {
    loadJSON("https://opentdb.com/api_token.php?command=reset&token=" + token);
}

