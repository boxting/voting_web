
var urlParams = new URLSearchParams(window.location.search);


const btnSend1 = document.getElementById("1");
const btnSend2 = document.getElementById("2");
const btnSend3 = document.getElementById("3");
const btnSend4 = document.getElementById("4");


const dni= urlParams.get("dni");

const url = 'http://localhost:9002/vote/broadcast';

const candidate1 = {
    votername: dni,
    candidateid: "1",
    candidatename: "Mesías Guevara"
};

const candidate2 = {
    votername: dni,
    candidateid: "2",
    candidatename: "Keiko Fujimori"
};

const candidate3 = {
    votername: dni,
    candidateid: "3",
    candidatename: "César Acuña Peralta"
};
const candidate4 = {
    votername: dni,
    candidateid: "4",
    candidatename: "César Trelles Lara"
};

btnSend1.onclick = e => {
    console.log(JSON.stringify(candidate1));
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(candidate1)
    }).then(res => res.json())
    .catch(error => {
        swal("Oops!", "Something went wrong!", "error");
        console.error('Error:', error);})
    .then(response => {

        swal("Good job!", "Listo!","success"
        ).then(function() {
            window.location = "http://localhost:3000/end";
        });
        console.log('Success:', response);

        
    });

};

btnSend2.onclick = e => {
    console.log(JSON.stringify(candidate2));
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(candidate2)
    }).then(res => res.json())
    .catch(error => {
        swal("Oops!", "Something went wrong!", "error");
        console.error('Error:', error)})
    .then(response => {
        swal("Good job!", "Listo!","success"
        ).then(function() {
            window.location = "http://localhost:3000/end";
        });
        console.log('Success:', response)
        
    });
};
btnSend3.onclick = e => {
    console.log(JSON.stringify(candidate3));
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(candidate3)
    }).then(res => res.json())
    .catch(error => {
        swal("Oops!", "Something went wrong!", "error");
        console.error('Error:', error)})
    .then(response => {
        swal("Good job!", "Listo!","success"
        ).then(function() {
            window.location = "http://localhost:3000/end";
        });
        console.log('Success:', response)
        
    });
};

btnSend4.onclick = e => {
    console.log(JSON.stringify(candidate4));
    fetch(url,{
        method: 'POST',
        body: JSON.stringify(candidate4)
    }).then(res => res.json())
    .catch(error => {
        swal("Oops!", "Something went wrong!", "error");
        console.error('Error:', error)})
    .then(response => {
        swal("Good job!", "Listo!","success"
        ).then(function() {
            window.location = "http://localhost:3000/end";
        });
        console.log('Success:', response)
        
    });
};

