document.querySelector('.get-jokes').addEventListener('click',getJokes);


async function getJokes(e){

    const number= document.querySelector('input[type="number"]').value;

  
    e.preventDefault();
    const response = await fetch(`http://api.icndb.com/jokes/random/${number}`);
    const resData = await response.json();
    console.log (resData.value);
    let output='';
    resData.value.forEach(joke=>{
        output+=`<li>${joke.joke}</li>`;
    })
    document.querySelector('.jokes').innerHTML=output;



    

}