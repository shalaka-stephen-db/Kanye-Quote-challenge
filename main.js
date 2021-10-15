const heading = document.querySelector("h1")
console.log(heading);

const button = document.getElementById('add-button');
console.log(button);

const input = document.querySelector('input');
console.log(input);

button.addEventListener('click',(event)=>{
  event.preventDefault();

  const getQuotes = () =>{
  return fetch('https://api.kanye.rest/')
  .then(res => res.json())
  .then(json=>heading.innerHTML= json.quote)
  .catch(err => console.log(err))
} 
getQuotes();
});




