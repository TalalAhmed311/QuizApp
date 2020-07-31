var score=0;
var count=0;
var interval;
var sec=0;
var flag=true;

var btn1=document.getElementById('opt1');
var btn2=document.getElementById('opt2');
var btn3=document.getElementById('opt3');
var btn4=document.getElementById('opt4');
var q=document.getElementById('ques');
var counter=document.getElementById('time');

var questions=[

    {
        ques:"When Pakistan came into being",
        o1:"1857",
        o2:"1948",
        o3:"1947",
        o4:"1944",
        right_ans:"1947",
    },

    {
        ques:"Who is the first Gover general of Pakistan",
        o1:"Muhammad Ali Jauhar",
        o2:"Muhammad Ali Jinnah",
        o3:"Liaquat Ali Khan",
        o4:"Khwaja Nazimuddin",
        right_ans:"Muhammad Ali Jinnah"

    },
    
    {
        ques:"What is the formula of Water",
        o1:"H2O",
        o2:"COOH",
        o3:"OH",
        o4:"H2O2",
        right_ans:"H2O"

    },


    {
        ques:"Which is the largest country of of by population",
        o1:"Russia",
        o2:"Pakistan",
        o3:"China",
        o4:"America",
        right_ans:"China"

    },



    {
        ques:"When Islamabad became the Capital of Pakistan",
        o1:"1987",
        o2:"1959",
        o3:"1967",
        o4:"1999",
        right_ans:"1967"

    },
];


// When quiz start then firstly loader will shown 
// and then it hides and questions will apprear

function startQuiz(){
    
    var load=document.querySelector('.loader-container');
    load.style.display="block";
    setTimeout(showLoader,3000);

    var pg=document.getElementById('starting');
    pg.classList.add('hide');


}


// Here we are un hindding loader
// Unhidding everthing
// Set our first question
// with an interval of 10 sec
function showLoader(){

    var loaderConatiner=document.getElementsByClassName('loader-container')[0];
    loaderConatiner.style.display="none";
  
    showEverything();
    setQuestions();
    interval=setInterval(timer,1000);
    
}


// after 10 sec question will reset and time start again
function timer(){

    if(sec<10){

        sec++;
        time.innerHTML=sec;
   }else{
        sec=0;      
        time.innerHTML=sec;
        setQuestions();
    }
  
}


//  Here we are setting our questions in divs
function setQuestions(){
 
    if(count<questions.length){

        q.innerHTML=questions[count].ques;
        btn1.innerHTML=questions[count].o1;
        btn2.innerHTML=questions[count].o2;
        btn3.innerHTML=questions[count].o3;
        btn4.innerHTML=questions[count].o4;
        count++;
    }else{
        
        
        clearInterval(interval);
        result();
    }
}


// Here i am unhidding every object
function showEverything(){
 

    
    var select=document.getElementById('mainQuiz');
    select.style.display="block"

 
}


//  this method works on next button
function nextQues(){

    flag=true;

  
        // setting again orginal color of buttons
    var optBtn=document.querySelectorAll('.optbtn');
    for (let i = 0; i < optBtn.length; i++) {

        optBtn[i].style.backgroundColor="#4056A1";
    }
  
    setQuestions();
    sec=0;
    time.innerHTML=sec 
   
   
}


// this will run when user click on an option
//  and also disabling every button
function optAns(event){

    if(flag){

        if(event.innerHTML==questions[count-1].right_ans){
            score++;
            event.style.backgroundColor="green";
            setTimeout(nextQues,1000);
          
            
    
        }else{
            event.style.backgroundColor="red";
            setTimeout(nextQues,1000);
        }
        flag=false;
    }
}


function result(){




    document.getElementById('mainQuiz').style.display="none";

    var resultModal=document.getElementById('resultSheet');
    resultModal.style.display="block";

    var s=document.getElementById('score');
    s.innerHTML=score;
    score=0;
    count=0;


}

function tryagain(){
    
    startQuiz();
    document.getElementById('resultSheet').style.display="none";

}