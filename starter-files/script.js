// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let button = document.getElementById("button");
let answer = document.getElementById("answer"); 
let input = document.getElementById("input");


/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function fetchAnswer(url){
    return fetch(url);
}


button.addEventListener("click", function() {
    if(input.value.length > 0){
        fetchAnswer(API_ENDPOINT).then(response => response.json()).then(data => answer.innerHTML = "<br>"+data.answer);
    }
    setTimeout(() => {
        input.value = "";
        answer.innerHTML = "";
    }, 5000);
});


