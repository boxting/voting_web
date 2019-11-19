fetch('http://localhost:9002/vote/broadcast')
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed!');
    },networkError => console.log(networkError.message))
    .then(data => {
        console.log(data);


        //document.getElementById("candidate1").style.width = "50%"; 

    });


document.getElementById("candidate1").style.width = "50%"; 
document.getElementById("candidate2").style.width = "85%"; 
document.getElementById("candidate3").style.width = "60%"; 
document.getElementById("candidate4").style.width = "40%"; 
