// data comes back parsed
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log(res.data.ticker.price)
    })
    .catch(err => {
        console.log("ERROR!", err)
    })


const fetchBitcoinPrice = async () => {
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}

// select jokes 
const jokes = document.querySelector('#jokes');

// select button to add click listener 
const button = document.querySelector('button');


// async function to add new joke
const addNewJoke = async () => {
    // calls the getDadJoke function and stores the joke text
    const jokeText = await getDadJoke()
    // create new li
    const newLI = document.createElement('LI');
    // add joke to li  
    newLI.append(jokeText);
    // add li to ul
    jokes.append(newLI);
}

// Setting Headers with Axios
// Make a async function that returns a promise and returns the joke text
const getDadJoke = async () => {
    // use try catch to handle errors
    try {
        // With axios we can pass in second argument with configuration information
        // each API is configured differently, some may require you to add
        // the query string or an end point - you have to read the docs
        // for the API to figure it out. The dad joke API requires a header
        const config = {headers: {Accept: 'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com', config)
        return res.data.joke;
    } catch(e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
    
}

// add event listener after the function is defined
button.addEventListener('click', addNewJoke)