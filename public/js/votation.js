const btnSend = document.getElementById("1");
const url = 'http://localhost:9002/vote/broadcast';
const headers = new Headers({
    'Content-Type': 'application/json'
});
const body = { 
    votername: "123",
    candidateid: "1",
    candidatename: "PPK2"
};

btnSend.onclick = e => {
    
    console.log(JSON.stringify(body));
    
    fetch(url,{
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));


};

