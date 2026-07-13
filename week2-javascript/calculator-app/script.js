const num1=document.getElementById("num1");
const num2=document.getElementById("num2");

const addButton=document.getElementById("addButton");
const subtractButton=document.getElementById("subtractButton");
const multiplyButton=document.getElementById("multiplyButton");
const divideButton=document.getElementById("divideButton");

const result=document.getElementById("result");


addButton.addEventListener("click",function(){
    const value1=Number(num1.value);
    const value2=Number(num2.value);

    const answer = value1+value2;

    result.textContent=`結果：${answer}`;

})

subtractButton.addEventListener("click",function(){
    const value1=Number(num1.value);
    const value2=Number(num2.value);

    const answer = value1 - value2

    result.textContent=`結果：${answer}`;
})

multiplyButton.addEventListener("click",function(){
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);

    const answer = value1 * value2

    result.textContent=`結果：${answer}`;
})

divideButton.addEventListener("click",function(){
    const value1 = Number(num1.value);
    const value2 = Number(num2.value);

    if (value2 === 0){
        result.textContent = "0ではわれません";
        return
    }

    const answer = value1 / value2

    result.textContent = `結果：${answer}`;
})