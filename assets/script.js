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
var startquizEl = document.getElementById("start-quiz");
var questformEl = document.getElementById("quest-form");

var questionsEl = document.getElementById("questions")

var questionEl = document.getElementById("question");
var option1El = document.getElementById("option1");
var option2El = document.getElementById("option2");
var option3El = document.getElementById("option3");
var option4El = document.getElementById("option4");

var resultEl = document.getElementById("result");
var verifyEl =  document.getElementById("verify");
var subFormEl = document.getElementById("submit-form");
var inputEl = document.getElementById("initial");

var viewscoreEl = document.getElementById("viewscore");
var headerEl = document.getElementById("head");
var loadHighscoresEl = document.createElement("div");
var gobackButtonEl = document.createElement("button");
var clearButtonEl = document.createElement("button");
var olistItemEl;
var clearButtonEl;
var correctAns="";
//counter to keep track of questions
var cnt = 0;
//counter to keep track of time 
var timeLeft = document.getElementById("timer");
var secondsLeft = 40;
var questionNumber = 0;
var myVar="";
var Highscore = 0;
var questionCount = 1;

//function to keep track of time
function countdown() {
        
    var timerInterval = setInterval(function () {

      secondsLeft--;
      timeLeft.textContent = "Time left: " + secondsLeft + " s";

        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            timeLeft.textContent = "Time is up!"; 
            // if time is up, show on score board content instead of "all done!"
            finish.textContent = "Time is up!";
            ;

        } else  if(questionCount >= questArray.length +1) {
            clearInterval(timerInterval);
            ;
            } 
}, 1000);
}

//function to show results once questions over
var showResult = function()
{
    clearInterval(myVar);
    if (secondsLeft<0)
    {
    document.getElementById("timer").innerHTML = 0;
    Highscore = 0;    
    }
    else{
        document.getElementById("timer").innerHTML = secondsLeft;
    Highscore = secondsLeft;
    }
    localStorage.setItem("hScore",Highscore);
    questionsEl.parentNode.removeChild(questionsEl);
    body.appendChild(subFormEl);
    body.appendChild(resultEl);
    document.getElementById("fscore").textContent = Highscore;
};


//capture event when answers selected
var buttonclick = function(event)
{   
    var Seletedans = document.getElementById(this.id).innerText; 
    if((cnt < questArray.length && secondsLeft>0) ||(cnt < questArray.length && secondsLeft===0))
    {
        if (Seletedans === correctAns)
        {
            verifyEl.innerText = "Correct!" ;
        }
        else
        {   secondsLeft=secondsLeft-10;
            verifyEl.innerText = "Wrong!";            
        }  
    
        cnt = cnt+1; 
        if ((cnt === questArray.length && secondsLeft>0) || (secondsLeft<0) || (cnt === questArray.length && secondsLeft===0))
        {
            showResult();       
        }
        else
        {
        loadQuestions();  
        } 
    }  
    else if((cnt < questArray.length && secondsLeft<0))
    {
        showResult();
    } 
    else if(cnt === questArray.length-1 && secondsLeft<0)
    {
        showResult();
    }    
};

//load questions 
var loadQuestions = function()
{
    questionEl.textContent = questArray[cnt].questionText;
    option1El.textContent = questArray[cnt].opt1;
    option2El.textContent = questArray[cnt].opt2;
    option3El.textContent = questArray[cnt].opt3;
    option4El.textContent = questArray[cnt].opt4;
    correctAns = questArray[cnt].correct;  
};

//Start quiz button clicked
var startQuiz = function(event){

        countdown();
        mainpage.parentNode.removeChild(mainpage);
        loadQuestions();     
        body.appendChild(questionsEl); 
        body.appendChild(resultEl);    
};

//remove the results section on keyup event
var inputText = function(event){
    verifyEl.innerText = "";
    if(document.body.contains(resultEl))
    {
        resultEl.parentNode.removeChild(resultEl); 
    }  
};

//load scores from local storage
var loadScores = function(){
    var getScores = localStorage.getItem("scores");
    
    if (getScores!== null)
    {
        getScores = JSON.parse(getScores);
        for(var i=0;i<getScores.length;i++)
        {
            scores[i]=getScores[i];
        }
    }

};

//submit form event with scores and initial
var submitForm = function(event)
{
    event.preventDefault();
    loadScores();
    var nameInitial = inputEl.value;
    var scoreFinal = Highscore;
    var storeLocal = nameInitial+" - "+scoreFinal;
    scores.push(storeLocal);
    localStorage.setItem("scores",JSON.stringify(scores));
    if(document.body.contains(subFormEl))
    {
    
    subFormEl.parentNode.removeChild(subFormEl);
    }
    if(document.body.contains(headerEl))
    {
    document.getElementById("timer").innerHTML = 0;
    headerEl.parentNode.removeChild(headerEl);
    }
    if(document.body.contains(resultEl))
    {
        verifyEl.innerText = "";
        resultEl.parentNode.removeChild(resultEl);
    }
    cnt = 0;
    clearInterval(myVar);
    myVar="";
    Highscore = 0;
    secondsLeft= 40;
    loadHighscores(true);
};

//view high scores
var loadHighscores = function(flag)
{       
   var getScores = localStorage.getItem("scores");
   if (flag===true)
   {  
    loadHighscoresEl.className = "load-scores";

    loadHighscoresEl.innerHTML = "<h1 class='high'>High Scores</h1>";

    olistItemEl = document.createElement("ol");
    olistItemEl.setAttribute("id","ollist");
    loadHighscoresEl.appendChild(olistItemEl);
    
    //create a li element and show scores from local storage
    if (getScores!== null)
    {
        
        getScores = JSON.parse(getScores);
        for(var i=0;i<getScores.length;i++)
        {
            var listItemEl = document.createElement("li");
            listItemEl.className = "list-item";
            listItemEl.id = "listitems";
            listItemEl.innerText = getScores[i];
            olistItemEl.appendChild(listItemEl);
        }
    }
            // create Go Back button
        gobackButtonEl.textContent = "Go Back";
        gobackButtonEl.className = "btn hscores-gobtn";       
        
            //create clear high scores button
        clearButtonEl.textContent = "Clear high scores";
        clearButtonEl.className = "btn hscores-clbtn";

        if(getScores===null)
        {
            clearButtonEl.disabled=true;
        }
        else
        {
            clearButtonEl.disabled=false;
        }
                
        loadHighscoresEl.appendChild(gobackButtonEl);
        loadHighscoresEl.appendChild(clearButtonEl);
        body.appendChild(loadHighscoresEl);
}
else if((getScores === null) && flag === false)
    {
        while(olistItemEl.hasChildNodes())
        {
            olistItemEl.removeChild(olistItemEl.firstChild);
        }
    }
 
};
//On click of View High score link
var viewhscores = function(event)
{   
    if(document.body.contains(questionsEl))
    {
        correctAns="";
        cnt = 0;
        clearInterval(myVar);
        myVar="";
        Highscore = 0;
        secondsLeft= 40;
        document.getElementById("timer").innerHTML = 0;
        questionsEl.parentNode.removeChild(questionsEl);
    }
    else if(document.body.contains(subFormEl))
    {
        correctAns="";
        cnt = 0;
        clearInterval(myVar);
        myVar="";
        Highscore = 0;
        secondsLeft=40;
        document.getElementById("timer").innerHTML = 0;
        subFormEl.parentNode.removeChild(subFormEl);
    }
    else if(document.body.contains(mainpage))
    {
        mainpage.parentNode.removeChild(mainpage);
    }
    if(document.body.contains(resultEl))
    {
        verifyEl.innerText = "";
        resultEl.parentNode.removeChild(resultEl);
    }
    headerEl.parentNode.removeChild(headerEl); 
    loadHighscores(true);    
};

//go back button cliked
var goback = function(event){
    body.removeChild(loadHighscoresEl);
    body.appendChild(headerEl);
    body.appendChild(mainpage);
};

//clear high scores button clicked
var clearHighsores = function(event){

    localStorage.clear();
    scores.splice(0,scores.length);
    alert("cleared high scores");
    clearButtonEl.disabled=true;
    loadHighscores(false);
};

//event handlers
questionsEl.parentNode.removeChild(questionsEl);
resultEl.parentNode.removeChild(resultEl);
subFormEl.parentNode.removeChild(subFormEl);
startquizEl.addEventListener("click",startQuiz);
option1El.addEventListener("click",buttonclick);
option2El.addEventListener("click",buttonclick);
option3El.addEventListener("click",buttonclick);
option4El.addEventListener("click",buttonclick);
subFormEl.addEventListener("keyup",inputText);
subFormEl.addEventListener("submit",submitForm);
viewscoreEl.addEventListener("click",viewhscores);
gobackButtonEl.addEventListener("click",goback);
clearButtonEl.addEventListener("click",clearHighsores);



    


