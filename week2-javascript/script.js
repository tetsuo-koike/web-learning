const message = document.getElementById("message");
const button=document.getElementById("changebutton");

button.addEventListener ( "click",function() {
    message.textContent = "ボタンが押されました！";
    message.style.backgroundColor = "#dbeafe";
} );


const userName = "Koike";
const studyDay = 9;

console.log(userName);
console.log(studyDay);

const nextDay = studyDay + 1;

console.log(nextDay);

const textNumber = "9";
const realNumber = 9;

console.log(textNumber+1);
console.log(realNumber+1);

const greeting = "こんにちは、" + userName + "さん";
console.log(greeting);

const greeting2 = `こんにちは、${userName}さん`;
console.log(greeting2);

message.textContent=greeting2;

message.textContent = `${greeting2}。今日はJavaScript学習のDay${studyDay}です。`


const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");

greetButton.addEventListener("click",function(){
    const inputName = nameInput.value;

    if (inputName === ""){
        message.textContent = "名前を入力してください";
        message.style.backgroundColor = "#fee2e2";
    }
    else {
        message.textContent = `こんにちは、${inputName}さん`;
        message.style.backgroundColor = "#dbeafe";
    }

});


const studyItems=["HTML","CSS","JavaScript","GitHub","DOM"];
const studyList = document.getElementById("studyList");

// console.log(studyItems);

// const firstItem = document.createElement("li");
// firstItem.textContent = studyItems[0];
// studyList.appendChild(firstItem);

// const secondItem = document.createElement("li");
// secondItem.textContent = studyItems[1];
// studyList.appendChild(secondItem);

// const thirdItem = document.createElement("li");
// thirdItem.textContent = studyItems[2];
// studyList.appendChild(thirdItem);

for (let i = 0; i < studyItems.length; i++){
    const item = document.createElement("li");
    item.textContent = studyItems[i];
    studyList.appendChild(item);
}