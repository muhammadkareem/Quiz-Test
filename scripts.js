var atmpques = 0; //0 counter var creat for attemp ques....
var corected = 0; //0 colection right ans but use counter colection.....
var testq = document.getElementById("tstq");
//only one array created index wise add object ...!!!
var quizques = [
    {
        qno: 1,
        ques:  "Q1: Inside which HTML element do we put the JavaScript?",
        opt1: "&ltscripting&gt",
        opt2: "&ltscript&gt",
        opt3: "&ltjs&gt",
        opt4: "&ltjavascript&gt"  ,

         corct: "&ltscript&gt"
    },
    {
        qno: 2,
        ques:  "Q2: Where is the correct place to insert a JavaScript?",
        opt1: "The &lthead&gt section",
        opt2: "The &ltbody&gt section",
        opt3: "The &lthead&gt section &amp The &ltbody&gt section",
        opt4: "None of these"  ,

        corct: "The &lthead&gt section &amp The &ltbody&gt section"
    },
     {
        qno: 3,
        ques: " Q3: What is the correct syntax for referring to an external script called 'script.js?'",
        opt1: "&ltscript href='script.js'&gt",
        opt2: "&ltscript src='script.js'&gt",
        opt3: "&ltscript name='script.js'&gt",
        opt4: "&ltjavascript href='script.js'&gt"  ,

        corct: "&ltscript src='script.js'&gt"
    },
    {
        qno: 4,
        ques:  "Q4: What is the correct JavaScript syntax to change the content of the HTML element below ? <br> <br> &ltp id='demo'&gtThis is a demonstration.&lt/p&gt",
        opt1: '#demo.innerHTML = "Hello World!";',
        opt2: 'document.getElementByName("p").innerHTML = "Hello World!";',
        opt3: 'document.getElementByTagName("p").innerHTML = "Hello World!";',
        opt4:  'document.getElement("p").innerHTML = "Hello World!";' ,

        corct: 'document.getElementByTagName("p").innerHTML = "Hello World!";' 
    },
    {
        qno: 5,
        ques: 'Q5: How do you create a function in JavaScript?' ,
        opt1:  'function myFunction()',
        opt2: 'function:myFunction()',
        opt3: 'function = myFunction()',
        opt4:  'None of these'  ,

        corct: 'function myFunction()'
    },
    {
        qno: 6,
        ques:  'Q6: How do you call a function named "myFunction"?',
        opt1: "call function myFunction()",
        opt2:  "call myFunction()",
        opt3:  "myFunction()",
        opt4: "calling function()",

        corct:  "myFunction()" 
    },
    {
        qno: 7,
        ques:  'Q7: How to write an IF statement in JavaScript?',
        opt1:  "if i == 5 then",
        opt2: "if i = 5",
        opt3: "if i =5 then",
        opt4: "if(i == 5)",

        corct: "if(i == 5)"
    },
    {
        qno: 8,
        ques: 'Q8: How to write an IF statement for executing some code if "i" is NOT equal to 5?' ,
        opt1: 'if (i &lt&gt 5)',
        opt2: 'if i &lt&gt 5',
        opt3: 'if (i != 5)',
        opt4: 'if i =! 5 then',

        corct:'if (i != 5)'
    },
    {
        qno: 9,
        ques:  "Q9: How does a WHILE loop start?",
        opt1:  "while i = 1 to 10",
        opt2:  "while (i <= 10; i++)",
        opt3: "while (i <== 10++)",
        opt4: "while (i <= 10)" ,

        corct: "while (i <= 10)"
    },
    {
        qno: 10,
        ques:  "Q10: How does a FOR loop start?",
        opt1: "for i = 1 to 5",
        opt2: "for (i = 0; i <= 5)",
        opt3:  "for (i = 0; i <= 5; i++)",
        opt4:  "for (i <= 5; i++)",

        corct:  "for (i = 0; i <= 5; i++)"
    },
    {
        qno: 11,
        ques: "Q11: How can you add a comment in a JavaScript?",
        opt1: "&lt!--This is a comment--&gt",
        opt2: "'This is a comment",
        opt3:  "//This is a comment",
        opt4: "//This is a comment*/" ,

        corct:  "//This is a comment"
    },
      {
        qno: 12,
        ques:  'Q12: What is the correct way to write a JavaScript array?',
        opt1: 'var colors = (1:"red", 2:"green", 3:"blue")',
        opt2:  'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        opt3: 'var colors = "red", "green", "blue"',
        opt4:  'var colors = ["red", "green", "blue"]' ,

        corct:  'var colors = ["red", "green", "blue"]'
    },
      {
        qno: 13,
        ques: "Q13: How do you round the number 7.25, to the nearest integer?" ,
        opt1:  "Math.round(7.25)",
        opt2: "rnd(7.25)",
        opt3: "round(7.25)",
        opt4:  "Math.rnd(7.25)" ,

        corct:  "Math.round(7.25)"
    },
      {
        qno: 14,
        ques:  "Q14: How do you find the number with the highest value of x and y?",
        opt1: "ceil(x, y)",
        opt2: "Math.max(x, y)",
        opt3:  "top(x, y)",
        opt4:"Math.ceil(x, y)"  ,

        corct: "Math.ceil(x, y)"
    },
      {
        qno: 15,
        ques: "Q15: Which event occurs when the user clicks on an HTML element?" ,
        opt1: "onmouseclick",
        opt2: "onclick" ,
        opt3: "onchange",
        opt4: "onmouseover" ,

        corcat:  "onclick"
    }
]

function startbtn() {
    var nxtb = document.getElementById("nxt");
    nxtb.setAttribute("disabled","disabled");


    document.getElementById("que").innerHTML = quizques[0].ques ;
    document.getElementById("op1").innerHTML = quizques[0].opt1;
    document.getElementById("opt1").value = quizques[0].opt1;
    document.getElementById("op2").innerHTML = quizques[0].opt2;
    document.getElementById("opt2").value = quizques[0].opt2;
    document.getElementById("op3").innerHTML = quizques[0].opt3;
    document.getElementById("opt3").value = quizques[0].opt3;
    document.getElementById("op4").innerHTML = quizques[0].opt4;
    document.getElementById("opt4").value = quizques[0].opt4;
}
function enablenxt() {
    var radioname = document.querySelector('input[name="radio"]:checked');
    if(radioname) {
        var nxtbnt = document.getElementById("nxt");
        nxtbnt.removeAttribute("disabled","disabled");
    }
}
function next() {
    atmpques += 1;
    var rightans = quizques[atmpques-1].corct;
    var radionam = document.querySelector('input[name="radio"]:checked').value; 

    if(radionam == rightans) {
corected++
    }
    else{
        corected;
    }
    if(quizques[atmpques] !== undefined) {

    document.getElementById("que").innerHTML = quizques[atmpques].ques ;
    document.getElementById("op1").innerHTML = quizques[atmpques].opt1;
    document.getElementById("opt1").value = quizques[atmpques].opt1;
    document.getElementById("op2").innerHTML = quizques[atmpques].opt2;
    document.getElementById("opt2").value = quizques[atmpques].opt2;
    document.getElementById("op3").innerHTML = quizques[atmpques].opt3;
    document.getElementById("opt3").value = quizques[atmpques].opt3;
    document.getElementById("op4").innerHTML = quizques[atmpques].opt4;
    document.getElementById("opt4").value = quizques[atmpques].opt4;
    }
    else{
        var crtans = corected/quizques.length * 100;
        var scor = document.getElementById("scrper").innerHTML= Math.round(crtans) + "%";

        var que = document.getElementById("rightques").innerHTML = corected;
        document.getElementById("tstq").setAttribute('style','visibility:hidden;');
        document.getElementById("scorediv").setAttribute('style', 'visibility:visible;');
          if(crtans <= 60 ){
        document.getElementById("passdiv").innerHTML = "FAILED! TRY AGAIN";
    }
    else if(crtans > 60 ){
        document.getElementById("passdiv").innerHTML = "CONGRATULATIONS...PASS!";
    }
    }
}
 var p = document.getElementById("ctimes");
  function timers(){
    var min = 4;
    var sec = 59;
    var int = setInterval(function(){
        if(min < 10 && sec < 10){
            p.innerHTML = "0" + min + ":" + "0" + sec;
        }
        else if( min < 10){
            p.innerHTML = "0" + min + ":" + sec;
        }
        else if( sec < 10){
            p.innerHTML = min + ":"+ "0" + sec;
        }
        
       else{ p.innerHTML = min + ":" + sec;}
        sec--;
        
         if(min < 0){
            clearInterval(int);
            p.innerHTML = "Time out...!";
            result();
        
        }
        else if(sec == 0){
            min--;
            sec = 60;
        }
    }, 1000);
}

function result(){
 var crtans = corected/quizques.length * 100;
        var scor = document.getElementById("scrper").innerHTML= Math.round(crtans);
        scor + "%"
        var que = document.getElementById("rightques").innerHTML = corected;
        document.getElementById("tstq").setAttribute('style','visibility:hidden;');
        document.getElementById("scorediv").setAttribute('style', 'visibility:visible;');
        if(prcntge <= 60 ){
        document.getElementById("passdiv").innerHTML = "SORRY! TRY AGAIN";
    }
    else if(prcntge > 60 ){
        document.getElementById("passdiv").innerHTML = "CONGRATULATIONS!";
    }
}