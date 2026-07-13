const progress=document.getElementById("progress");
const scoreText = document.getElementById("score");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const nextButton = document.getElementById("nextButton");


const quizData = [
    {
        question:"JavaScriptでHTML要素をidで取得する命令は？",
        choices:["getElementById","console.log","appendChaild","length"],
        answer:"getElementById"
    },

    {
        question:"入力欄の文字を取得する時に使うものは？",
        choices:["value","textContent","appendChild","length"],
        answer:"value"
    },

    {
        question:"配列の最後に要素を追加する命令は？",
        choices:["push","splice","return","Number"],
        answer:"push"
    },

    {
        question:"同じ処理を繰り返すために使う文は？",
        choices:["for","if","const","style"],
        answer:"for"
    },

    {
        question:"HTML要素を新しく作る命令は？",
        choices:["createElement","appendChild","addEventListener","innerHTML"],
        answer:"createElement"
    }

];

let currentQuestionIndex = 0;
let score = 0;


function showQuestion(){
    const currentQuiz = quizData[currentQuestionIndex];

    progress.textContent = `進捗：${currentQuestionIndex + 1}/${quizData.length}`;
    scoreText.textContent = `スコア：${score}`;
    question.textContent = currentQuiz.question;
    result.textContent = `結果：-`

    choices.innerHTML="";

    for(let i=0; i< currentQuiz.choices.length;i++){
        const choiceButton = document.createElement("button");
        choiceButton.textContent=currentQuiz.choices[i];

        choiceButton.addEventListener("click",function(){
            checkAnswer(currentQuiz.choices[i]);
        });

        choices.appendChild(choiceButton);
    }

}

showQuestion();


function checkAnswer(selectedChoice){
    const currentQuiz = quizData[currentQuestionIndex];

    if (selectedChoice === currentQuiz.answer){
        result.textContent = "正解！";
        score++;
        scoreText.textContent=`スコア${score}`;
    }

    else {
        result.textContent = `不正解。正解は${currentQuiz.answer}です。`
    }

    const choiceButtons = choices.querySelectorAll("button");

    for(let i=0; i< choiceButtons.length;i++){choiceButtons[i].disabled=true;

    }

}


nextButton.addEventListener("click",function(){
    currentQuestionIndex++;

    if (currentQuestionIndex<quizData.length){
        showQuestion();
    }

    else {
        showFinalResult();
    }
});

function showFinalResult(){
    progress.textContent = "完了";
    question.textContent = "クイズ終了";
    choices.innerHTML="";
    result.textContent = `あなたのスコアは${score}/${quizData.length}です。`;
    nextButton.style.display = "none";
}