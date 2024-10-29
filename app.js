let question =[{

'que' :' which of the following is a markup language ?',
'a' : ' HTML',
'b' : 'CSS', 
'c': 'JavaScript',
'd': 'PHP',
'correct' : 'a'
},


{
'que' :' what year was JavaScript launched ?',
    'a' : '1996',
    'b' : '1995', 
    'c': '1994',
    'd': 'none of the above',
    'correct' : 'b'},

    {
        'que' :' what does css stands for?',
            'a' : 'HayperText Markup Language',
            'b' : 'Cascading Style Sheet', 
            'c': 'Jason Object Notation',
            'd': 'Python',
            'correct' : 'b'}
    
    ]

// second creat index
    let index = 0 ;
let total = question.length;
let right=0, wrong=0;

console.log(total)

let quesBox = document.getElementById("quesBox");
// 6th
let optionInput = document.querySelectorAll(".option");


// first we create loadQuestion
    let loadQuestion = ()=>{

if (index===total) {
    return endQuiz()
}


// 14) now we creat reset function and put in loadQuestion
        reset()
  // third create      
let data = question[index]

// 4th step & 5th
quesBox.innerText= `  ${index+1} ) ${data.que}`

// 7th step
optionInput[0].nextElementSibling.innerText= data.a;
optionInput[1].nextElementSibling.innerText= data.b;
optionInput[2].nextElementSibling.innerText= data.c;
optionInput[3].nextElementSibling.innerText= data.d;
// 7th step end
}
// loadQuiz end


// 8th step
let submitQuiz = ()=>{
    //
let data = question[index];
 // 9th step   
let ans = getAnswer()
// 12) now we pickup getanswer() value and now we  check with if statement like 
// if(ans == dta.correct)
// now we creat right = 0 and wrong = 0 varible and if ans== data.correct the right++ and else wrong ++ 

    if (ans === data.correct) {
       right++
        
    }

    else{
wrong++
    }
// 13)  now we put index++  and loadQuestion() and return after else part 
// index ++ for go next page 
    index++
    loadQuestion()
    return;
}

let getAnswer = ()=>{
    let answer;
    // step 10th creat forEach for option input to get value of input class
optionInput.forEach(
    (input)=>{
// step 11 now we creat if statment if inputoption value is chacked 
// we "return input value" means answer
if (input.checked) {
    answer = input.value;

}


})
return answer;
}


// 14) now we creat reset function and put in loadQuestion
let reset = ()=>{
    optionInput.forEach(
        (input)=>{

input.checked = false

        })



}

// endQuiz
let endQuiz = ()=>{

    document.getElementById("box").innerHTML=`
    <h3> thank you for palying the quiz </h3>
<h2>${right} / ${total} are the correct </h2>

    `
    
}



// loadQuestion function call
loadQuestion()





// 1) first we creat function loadQuestion()
// 2) second we creat index veribel index "index=0"
// 3) third we creat another queston  veribel in loadQuestion like let data = question[index]
// 4) forth we selection h2 to tag with documentgetelementbyid to outside of loadQuestion function
// 5) five we select quesBox varible in inside of loadQuestion function and put value of data.que
// 6) now we creat optioninput varible outside od loadQuestion and selectd all input with class
// 7) now we put value in input option with optioninput like "optioninput[0].nextElementSibling.innerText" 
// 8) now we creat submitQuiz function for submit button.
// 9) now we creat getanswer function  " let ans = getanswer()  ";
// 10) now we use forEach method for get value of optionInput
// 11)now we creat if statment if inputoption value is chacked then we "return input value" means answer
// 12) now we pickup getanswer() value and now we  check with if statement like 
// if(ans == dta.correct)
// now we creat right = 0 and wrong = 0 varible and if ans== data.correct the right++ and else wrong ++ 
// 13) now we put index++ and loadQuestion() and return after else part 
// 14) now we creat reset function and put in loadQuestion
// 15) now we creat end function with the help of if method (index== total)