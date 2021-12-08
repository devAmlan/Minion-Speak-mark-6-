const inputtext = document.getElementById('inputtext')
const translatebtn = document.getElementById('translatebtn')
const outputresult = document.getElementById('outputresult')
const url =  'https://api.funtranslations.com/translate/minion.json?text='

function translateText(){

   if(inputtext.value == ""){
    alert('Enter a word')
   }
  else{
  fetch(`${url}${inputtext.value}`)
  .then(resp=>resp.json())
  .then(data=>{
    outputresult.innerText = data.contents.translated;
  })
  .catch((err)=>{alert("Something went wrong please try again")})
 }

}

translatebtn.addEventListener('click',translateText)