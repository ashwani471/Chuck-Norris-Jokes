const xhr1 = new XMLHttpRequest();

xhr1.open('GET',`https://api.chucknorris.io/jokes/categories
`,true);

xhr1.onload = function(){
  let output = '';
  if(this.status === 200){
    const response1 = JSON.parse(this.responseText);
    
    response1.forEach((list)=>{
      output+=`<li>${list}</li>`;
    })
  }
  document.querySelector('.List').innerHTML = output;
}

xhr1.send();

document.querySelector('.get-jokes').addEventListener('click',getjokes);

function getjokes(e){

  const number = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();

  // xhr.open('GET',`https://api.chucknorris.io/jokes/search?query=${number}
  // `);
 
  xhr.open('GET',`https://api.chucknorris.io/jokes/random?categary=${number}`,true);

  xhr.onload = function(){
    let output1='';
    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      console.log(response);
      document.querySelector('.jokes').innerHTML = response.value;

    }
  }

  xhr.send();

  e.preventDefault();
}