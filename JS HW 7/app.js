

const radioBtns = document.querySelectorAll("input[type=radio]");

const highlightWord = (word) =>  `<span>${word}</span>`;

function highlightText(btnId){
    const text = document.querySelector("p");
    const words = text.innerText.split("-");
    
    const highlightedText = [];
    for (const word of words){
        switch (btnId){
        case "radio1":
            highlightedText.push( word.length > 8? highlightWord(word) : word);
            break;
        case "radio2":
            highlightedText.push( ['а', 'у', 'я','и'].includes(word[0].toLowerCase()) & word.length > 2
             ? highlightWord(word) : word);
            break;
        case "radio3":
            highlightedText.push(word.endsWith("тся") || word.endsWith("ться") ? highlightWord(word) : word);
            break;
        }
        text.innerHTML = highlightedText.join(" ");
    }
}

radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('change',(event)=>{
        const btnId = event.target.id;
        

    })
})




