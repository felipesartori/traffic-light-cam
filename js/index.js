const asyncGetCall = async () => {
    try {
        const response = await fetch('https://arcane-stream-30681.herokuapp.com/state');
        const data = await response.json();

        var state = data[0].state
        if (state === 'green') {
            var element = document.getElementById("box");
            element.style.backgroundColor = 'green';
        } else if (state === 'red') {
            var element = document.getElementById("box");
            element.style.backgroundColor = 'red';
        }
    } catch (error) {
        return error
    }
}

const asyncPostCall = async (color) => {
    try {
        await fetch('https://arcane-stream-30681.herokuapp.com/state', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ state: color })
        })
        asyncGetCall()
    } catch (error) {
        return error
    }
}

// Desativado no gerenciador
// setInterval('asyncGetCall()', 3000);