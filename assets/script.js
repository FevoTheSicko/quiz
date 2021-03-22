const myquestion = [
    {question:"who invented javascript",
    answers:{
        a:'Douglas Crockford',
        b:'Sheryl Sandberg',
        c:'Brendan Eich'
    },
    correctanswer : "answer-c"
},
{question:"when was javascript made",
    answers:{
        a:'1995',
        b:'1896',
        c:'1991'
    },
    correctanswer : "answer-a"
},
{question:"what does www stand for",
    answers:{
        a:'spiderman',
        b:'world wide web',
        c:'web web web'
    },
    correctanswer : "answer-b"
},
{question:"in javascript you can start with a",
    answers:{
        a:'semi colon',
        b:'fullstop',
        c:'comma'
    },
    correctanswer : "answer-a"
},
{question:"The first programming language was",
    answers:{
        a:'basic',
        b:'javascript',
        c:'fortran'
    },
    correctanswer : "answer-c"
},
{question:"The invention of coding was in which era",
    answers:{
        a:'1940s',
        b:'1950s',
        c:'1960s'
    },
    correctanswer : "answer-b"
},
{question:"the first coded game was",
    answers:{
        a:'mario',
        b:'pong',
        c:'dota 2'
    },
    correctanswer : "answer-a"
},
{question:"",
    answers:{
        a:'submit score',
        
    },
    correctanswer : "answer-a"
},
];
var seconds = 30
var i = 0
document.getElementById("startbutton").addEventListener("click",renderquestion);
document.getElementById("startbutton").addEventListener("click",incrementSeconds);
var div = document.getElementById('divid');
var scoreboard = document.getElementById("scoreboard")

document.getElementById("answer-a").addEventListener("click", checkanswer);
document.getElementById("answer-b").addEventListener("click", checkanswer);
document.getElementById("answer-c").addEventListener("click", checkanswer);


const answera = document.getElementById("answer-a");
const answerb = document.getElementById("answer-b");
const answerc = document.getElementById("answer-c");
currentscore = 0;
//window.localStorage.setItem("score", currentscore);

function startquiz(event){
    event.preventDefault();
 
}
function renderquestion(){
answera.textContent = myquestion[i].answers.a
answerb.textContent = myquestion[i].answers.b
answerc.textContent = myquestion[i].answers.c

}
function nextquestion(){
     i++;
    renderquestion();
    
}
function checkanswer(event){
    
    if(i > 6){
     scoreboard.style.display = "flex";
    }


     else if (event.target.id === myquestion[i].correctanswer){
    
    nextquestion();
    console.log(" u are right")
    currentscore++ ; 
    console.log(currentscore)
    div.innerHTML = ' u are right'
    }
    else{
       
    nextquestion();
    console.log("u are wrong")
    div.innerHTML = ' u are wrong'
    seconds = seconds - 5
    }
    
  
};

var el = document.getElementById('counter');

function incrementSeconds(evt) {
    
    seconds -= 1;
    el.textContent = seconds;
    if( seconds === 0)
    i = 7;
    renderquestion();
    checkanswer();
    seconds = 0
}

var cancel = setInterval(incrementSeconds, 1000);
var name = document.getElementById("name").addEventListener("click", sumbitinfo());
var input = document.getElementById("info");
var form = document.getElementById("scoreboard");





