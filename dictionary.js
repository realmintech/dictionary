let display = document.getElementById('display')
let content = document.getElementById('content')
function press() {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' +display.value)
    .then(response => response.json())
    .then(data=>{
        let result = "";
        for (let i = 0; i < data[0].meanings.length; i++) {
           result += `
           <div id="innerContent">
           <div> <p id="speech">Part of speech:${data[0].meanings[i].partOfSpeech}</p></div>
           <div><p id="phonics">Phonetics:</i>${data[0].phonetic}</p></div>
           <div> <p id="meaning">Meaning:${data[0].meanings[i].definitions[0].definition}</p></div>
           <div>
               <p><i class="fas fa-volume-up"><audio controls autoplay src="${data[0].phonetics[0].audio}"></audio></i></p>
           </div>
           <div>
               <p id="example">Example:${data[0].meanings[i].definitions[0].example}</p>
           </div> 
       </div>
           ` 
           +"<br>"
        }
        content.innerHTML = result;
    }
    )}
    // if(data[0].meanings[i].definitions[0].example == undefined){
    //     example.style.display = "none"
    // }
    

  
