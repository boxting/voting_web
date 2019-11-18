const btnSend = document.getElementById("1");

btnSend.onclick = e => {
    const body = { 
        votername: "72861219",
        candidateid: "1",
        candidatename: "PPK2"
    };
    console.log(JSON.stringify(body));
    const headers = new Headers({
        "Content-Type": "application/json"
    });
    fetch('http://localhost:9002/vote/broadcast',{
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request Failed!');
    },networkError => console.log(networkError.message))
    .then(jsonResponse => {
        votername = "";
        candidateid = "";
        candidatename = "";
        Swal.fire(
            'Listo',
            'Tu mensaje ha sido enviado satisfactoriamente',
            'success')
        console.log(jsonResponse);
    });
};


