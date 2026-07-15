const fetchButton = document.getElementById("fetchButton");
const quoteText = document.getElementById("quoteText");
const authorText = document.getElementById("authorText");


fetchButton.addEventListener("click",function(){
    quoteText.textContent = "取得中..."
    authorText.textContent = "-"


    fetch("https://dummyjson.com/quotes/random")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        quoteText.textContent = data.quote;
        authorText.textContent = data.author;

    })
    .catch(function(){
        quoteText.textContent = "取得に失敗しました"
        authorText.textContent="-"
    });


});
