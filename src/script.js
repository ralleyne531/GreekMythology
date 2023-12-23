const keypress = require('keypress');


console.log("Hello World!");

setTimeout(() =>{
    console.log( "Welcome to mixed messages!");
},3000)

setInterval(() =>{
    console.log("Like this website? Visit forums for updates!")
},60000);

//two-dimensional array, where number keys each have a "text" value
let messages = [
    {god:'Aries', message: 'wise'},
    {god:"Athena",message:"war"},
    {god:"Apollo", message:"discovery"}
]; // [{:}]

//random selection through range of 'messages'
let randomizer = Math.floor(Math.random() * messages.length);

//redirect input to single key press
keypress(process.stdin);

setTimeout(() =>{
    console.log("press m to receive a random message");
    //Create an event for user pressing the correct key, "m"
    process.stdin.on('keypress', function (ch, key) {
        if (key && key.name === 'm') {
            //logic for when the user presses 'm'
            console.log(messages[randomizer].god + "\n" + messages[randomizer].message,randomizer);
            process.exit(); // Optional: exit the program after processing the keypress
        }
    });
}, 5000);

process.stdin.setRawMode(true);
process.stdin.resume();
