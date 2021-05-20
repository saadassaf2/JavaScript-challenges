
let search = document.querySelector("#search");
let searchB = document.querySelector("#searchB");
let apiKey = `93e327a6ccb14d6297b6399e06e28f18`;


//  (e) => { searchResult(e)});
document.querySelector("#form").addEventListener("submit", event => {
    event.preventDefault();
    searchResult(event)
});





 

 function searchResult() {
     
     let searchInput = search.value;
     let results = `https://newsapi.org/v2/everything?q=${searchInput}&apiKey=${apiKey}`
     fetch(results)
     .then((response) => response.json())
     .then((data) => {
         document.write(data);
         console.log(data);
     } );
}





