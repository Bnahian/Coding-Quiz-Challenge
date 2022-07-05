//defines questions array
var questArray = [
    {
        "questionText": "Commonly used data types that do not include:_____________",
        "opt1" : "1. Strings",
        "opt2" : "2. Booleans",
        "opt3" : "3. Alerts",
        "opt4" : "4. Numbers",
        "correct" : "3. Alerts"
    },
    {
        "questionText": "The condition in an if / else statement is enclosed with __________",
        "opt1" : "1. Quotes",
        "opt2" : "2. Curly brackets",
        "opt3" : "3. Paranthesis",
        "opt4" : "4. Square brackets",
        "correct" : "3. Paranthesis"
    },
    {
        "questionText": "Arrays in Javascript can be used to store _____________",
        "opt1" : "1. Numbers and Strings",
        "opt2" : "2. Other arrays",
        "opt3" : "3. Booleans",
        "opt4" : "4. All of the above",
        "correct" : "4. All of the above"
    },
    {
        "questionText": "String values must be enclosed within _____ when being assigned to variable",
        "opt1" : "1. Commas",
        "opt2" : "2. Curly brackets",
        "opt3" : "3. Quotes",
        "opt4" : "4. Parenthesis",
        "correct" : "3. Quotes"
    },
    {
        "questionText": "A useful tool used during development & debugging for printing content to the debugger is",
        "opt1" : "1. Javascript",
        "opt2" : "2. Terminal/bash",
        "opt3" : "3. For loops",
        "opt4" : "4. Console.log",
        "correct" : "4. Console.log"
    }
    ]
//define scores empty array 
var scores = [];
//identify all the elements in application
var body = document.body;
var mainpage = document.getElementById("main-page")
var startquiz = document.getElementById("start-quiz");
var questform = document.getElementById("quest-form");
var questionsEl = document.getElementById("questions")
var questionEl = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var result = document.getElementById("result");
var verify =  document.getElementById("verify");
var subForm = document.getElementById("submit-form");
var input = document.getElementById("initial");
var viewscore = document.getElementById("viewscore");
var header = document.getElementById("head");
var loadHighscores = document.createElement("div");
var gobackButton = document.createElement("button");
var clearButton = document.createElement("button");
var timerEl = document.querySelector("#timer");
var olistItem;
var clearButton;
var correctAns="";
//counter to keep track of questions
var cnt = 0;
//counter to keep track of time 
var timeleft;
var myVar="";
var Highscore = 0;

//function to keep track of time
var myTimer = function() {
    timeleft = 30;

var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
        timeleft--

}


  { 
    
}
};
