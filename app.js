document.querySelector('.get-jokes').addEventListener('click',getJokes);


function getJokes(e){

    const number= document.querySelector('input[type="number"]').value;


    fetch(`http://api.icndb.com/jokes/random/${number}`)
    .then(response => {
        return response.json();
    }).then( data=>{
        let output='';
        data.value.forEach(joke=>{
            output+=`<li>${joke.joke}</li>`
        })
        document.querySelector('.jokes').innerHTML=output;
    }).catch(err=> {
        console.log('rejected',err.message);
    })

    
    e.preventDefault();
}