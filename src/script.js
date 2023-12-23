const keypress = require('keypress');


console.log("Hello World!");

setTimeout(() =>{
    console.log( "Welcome to GreekMytholoMe!");
},3000)

setInterval(() =>{
    console.log("Like this website? Visit forums for updates!")
},60000);

//two-dimensional array, where number keys each have a "text" value
let messages = [
    {god:'Aphrodite', message: 'Goddess of love'},
    {god:"Apollo",message:"God of the Sun"},
    {god:"Ares", message:"God of war"},
    {god:'Artemis', message: 'Goddess of the hunt'},
    {god:"Athena",message:"Goddess of war"},
    {god:"Demeter", message:"Goddess of harvest"},
    {god:'Dionysus', message: 'God of wine'},
    {god:"Hephaestus",message:"God of the forge"},
    {god:"Hera", message:"Goddess of marriage"},
    {god:'Hermes', message: 'God of travel'},
    {god:"Poseidon",message:"God of the seas"},
    {god:"Zeus", message:"God of the sky"},

]; // [{:}]

//random selection through range of 'messages'
let randomizer = Math.floor(Math.random() * messages.length);

//redirect input to single key press
keypress(process.stdin);

setTimeout(() =>{
    console.log("press m to receive a random Greek deity");
    //Create an event for user pressing the correct key, "m"
    process.stdin.on('keypress', function (ch, key) {
        if (key && key.name === 'm') {
            //logic for when the user presses 'm'
            console.log("You are: " + messages[randomizer].god + "\n" + messages[randomizer].message);
            process.exit(); // Optional: exit the program after processing the keypress
        }
    });
}, 5000);

process.stdin.setRawMode(true);
process.stdin.resume();
