function changeRed() {
    var element = document.getElementById("box");
    element.style.backgroundColor = 'red';
}

function changeGreen() {
    var element = document.getElementById("box");
    element.style.backgroundColor = 'green';
}

// fetch('http://example.com/api', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json'}
// });

// const getState = async (color) => {
//     await fetch('https://arcane-stream-30681.herokuapp.com/state'), {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ state: color })
//     }
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             // var state = data[0].state
//             // if (state === 'green') {
//             //     var element = document.getElementById("box");
//             //     element.style.backgroundColor = 'green';
//             // } else if (state === 'red') {
//             //     var element = document.getElementById("box");
//             //     element.style.backgroundColor = 'red';
//             // }
//         })
// }

(async () => {
    const rawResponse = await fetch('https://arcane-stream-30681.herokuapp.com/state', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ state: 'green' })
    });
    const content = await rawResponse.json();

    console.log(content);
})();


// function onGet() {
//     const url = "https://arcane-stream-30681.herokuapp.com/state";
//     var headers = {}

//     fetch(url, {
//         method: "GET",
//         mode: 'cors',
//         headers: headers
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.error)
//             }
//             console.log(response.json())
//             return response.json();
//         })
//         .then(data => {
//             console.log(data)
//             // document.getElementById('messages').value = data.messages;
//         })
//         .catch(function (error) {
//             console.log(error)
//             // document.getElementById('messages').value = error;
//         });
// }
// onGet()


// function ler() {
//     fetch('https://arcane-stream-30681.herokuapp.com/state')
//         .then(response => response.text())
//         .then(text => {
//             const array = text.split("\n");
//             console.log(array);
//         })
// }

// function ler() {
//     const url = 'https://arcane-stream-30681.herokuapp.com/state';
//     fetch(url)
//         .then((resp) => resp.json())
//         .then(function (data) {
//             let authors = data.results;
//             console.log(authors)
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// }
// ler()

