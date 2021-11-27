
const quizDB = [
    {
        question:"Q1: Inside which HTML element do we put the JavaScript?",
        a: "<javascript>",
        b:  "<script>",
        c:  "<css>",
        d:  "<htmlScript>",
       ans:  "ans2"
    },
    {
        question:"Q2: Which type of language JavaScript is ___?",
        a: "oject-oriented",
        b:  "assembly-language",
        c:  "object-based",
        d:  "high-language",
       ans:  "ans3"
    },
    {
        question:"Q3: Which is not valid data type in Javascript ?",
        a: "undefined",
        b:  "boolean",
        c:  "number",
        d:  "float",
       ans:  "ans4"
    },
    {
        question:"Q4: Which one is Ternary Operator ?",
        a: " ?*",
        b:  ".?",
        c:  "?:",
        d:  "?/",
       ans:  "ans3"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const button = document.querySelector('button');
const showScore = document.querySelector('#showScore');

const answers = document.querySelectorAll('.ans')

let questionCount = 0;
let score = 0;


const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}


loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAns) => {
        if(currAns.checked){
            answer = currAns.id;
        }
    });
    return answer;
};

const deSelect = () =>{
    answers.forEach((currAns) => currAns.checked = false)
}

button.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer)
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    }

    deSelect();

    questionCount++;
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    
    else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play again </button>
         `;
         showScore.classList.remove("score-area")
    }
    
});