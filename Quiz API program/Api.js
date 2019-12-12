var token;

//Laver en token som sørger for at man ikke kan få det samme spørgsmål to gange i et spil
function generateToken() {
    loadJSON("https://opentdb.com/api_token.php?command=request", getToken);
}

//Her hentes denne token sammen med antallet af spørgsmål
function getToken(data) {
    token = data.token;
    loadJSON("https://opentdb.com/api.php?amount=" + amountOfQuestions + "&encode=url3986&token=" + token, getQuestions);
}

//Henter spørgsmålene og starter spillet
function getQuestions(data) {
    questions = data.results;
    BeginGame();
}

//Resetter tokens efter spillet er ovre
function resetToken() {
    loadJSON("https://opentdb.com/api_token.php?command=reset&token=" + token);
}

