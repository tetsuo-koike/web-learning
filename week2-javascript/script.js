const message = document.getElementById("message");
const button=document.getElementById("changebutton");

button.addEventListener ( "click",function() {
    message.textContent = "ボタンが押されました！";
    message.style.backgroundColor = "#dbeafe";
} );
