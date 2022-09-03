// Variable
var hide = document.querySelector(".hide");
var correctCounter = 0;
var incorrectCounter = 0;
var score = correctCounter *10;
var questionContainerEl = document.getElementById('questionContainer');
var rules = document.querySelector('.rules');
let shuffleQuestions, currentQuestionIndex;
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('anwerBTN');


// BTN
startBTN = document.querySelector("#startBTN");
nextBTN = document.querySelector("#nextBTN");
finishBTN = document.querySelector("#finishBTN");

// Start BTN
startBTN.addEventListener("click", startGame);
nextBTN.addEventListener('click',()=>{
    currentQuestionIndex++;
    nextQuestion()
})


// Start Game
function startGame(){

    startBTN.classList.add('hide')
    rules.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    shuffleQuestions = question.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    nextQuestion()

}
// Set the Qestions
function nextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function resetState(){

    clearStatusClass(document.body)
    nextBTN.classList.add('hide')
    while(answerEl.firstChild){

        answerEl.removeChild(answerEl.firstChild)

    }

};

// Show Question
function showQuestion(question){

    questionEl.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("BTN")
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnwser)
        answerEl.appendChild(button);
    });

}

// Select Answer
function selectAnwser(event){

    const selectedBTN = event.target
    const correct = selectedBTN.dataset.correct
    setStatueClass(document.body, correct)
    Array.from(answerEl.children).forEach(button =>{

        setStatueClass(button, button.dataset.correct)
        

    })
    if (shuffleQuestions.length > currentQuestionIndex + 1){

        nextBTN.classList.remove('hide')
        
    }
    else{

        finishBTN.classList.remove('hide')

    }

};

function setStatueClass(element, correct){

    clearStatusClass(element)
    if (correct){

        element.classList.add('correct')
        correctCounter++;

    }
    else{

        element.classList.add('incorrect')
        incorrectCounter++;


    }

}

function clearStatusClass(element){

    element.classList.remove('correct')
    element.classList.remove('incorrect')

}

// Result Page


// Question & Answer
const question = [
    {
        // 1
        question: 'Which of the following is correct about JavaScript?',
        answer:[
            {text: 'JavaScript is a lightweight, interpreted programming language.', correct:false},
            {text: 'JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages..', correct:false},
            {text: 'The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.', correct:false},
            {text: 'All of the above..', correct:true},
        ]
    },
    {
        // 2
        question: 'Which of the following is a valid type of function javascript supports?',
        answer:[
            {text: 'named function.', correct:false},
            {text: 'anonymous function', correct:false},
            {text: 'Both of the above.', correct:true},
            {text: 'None of the above..', correct:false},
        ]
    },
    {
        // 3
        question: 'Which built-in method returns the characters in a string beginning at the specified location?',
        answer:[
            {text: 'append()', correct:false},
            {text: 'concat()', correct:true},
            {text: 'attach()', correct:false},
            {text: 'None of the above..', correct:false},
        ]
    },
    {
        // 4
        question: "Which built-in method returns the characters in a string beginning at the specified location?",
        answer:[
            {text: 'toSource()', correct:true},
            {text: 'valueOf()', correct:false},
            {text: 'toString()', correct:false},
            {text: 'None of the above..', correct:false},
        ]
    },
    {
        // 5
        question: "Which of the following function of Boolean object returns a string of either 'true' or 'false' depending upon the value of the object?",
        answer:[
            {text: 'toSource()', correct:false},
            {text: 'valueOf()', correct:false},
            {text: 'toString()', correct:true},
            {text: 'None of the above.', correct:false},
        ]
    },
    {
        // 6
        question: 'Which of the following function of String object is used to match a regular expression against a string?',
        answer:[
            {text: 'concat()', correct:false},
            {text: 'match()', correct:true},
            {text: 'search()', correct:false},
            {text: 'replace()', correct:false},
        ]
    },
    {
        // 7
        question: 'Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?',
        answer:[
            {text: 'anchor()', correct:false},
            {text: 'big()', correct:false},
            {text: 'blink()', correct:false},
            {text: 'bold()', correct:true},
        ]
    },
    {
        // 8
        question: 'Which of the following function of String object causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag?',
        answer:[
            {text: 'fixed()', correct:true},
            {text: 'big()', correct:false},
            {text: 'blink()', correct:false},
            {text: 'bold()', correct:false},
        ]
    },
    {
        // 9
        question: 'Which of the following function of Array object removes the last element from an array and returns that element?',
        answer:[
            {text: 'join()', correct:false},
            {text: 'push()', correct:false},
            {text: 'pop()', correct:true},
            {text: 'map()', correct:false},
        ]
    },
    {
        // 10
        question: 'Which of the following function of Array object adds and/or removes elements from an array?',
        answer:[
            {text: 'toSource()', correct:false},
            {text: 'sort()', correct:false},
            {text: 'splice()', correct:false},
            {text: 'unshift()', correct:true},
        ]
    },
]