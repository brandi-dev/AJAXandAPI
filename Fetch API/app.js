// // fetch resolves the promise triggering the .then as soon as it receives
// // the headers back from the api
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
// .then(res => {
//     // this does not guarantee that I have all of the data
//     console.log("RESPONSE, WAITING TO PARSE...", res)
//     // use this .json method to resolve the promise when all of the data 
//     // is recieved and it is parsed as json
//     return res.json()
// })
// .then(data => {
//     console.log("DATA PARSED...", data)
//     console.log(data.ticker.price)
// })
// .catch(e => {
//     console.log("OH NO! ERROR", e)
// })

const fetchBitcoinPrice = async () => {
    try{
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log("SOMETHING WENT WRONG!", e)
    }
}