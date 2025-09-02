    // Strings = text
    const string = "The revolution will not be televised.";
    console.log(string);
    const badString = string;
    console.log(badString); // this work if a string is definied before 

    const name = "Chris";
    const greeting = `Hello, ${name}`;
    console.log(greeting); // "Hello, Chris"
    const one = "Hello, ";
    const two = "how are you?";
    const joined = `${one}${two}`;
    console.log(joined); // "Hello, how are you?"

    const button = document.querySelector("button");

    function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
    }

    button.addEventListener("click", greet);

    const greeting2 = "Hello";
    const name2 = "Bob";
    console.log(greeting2 + ", " + name2); // "Hello, Bob"

    const greeting3 = "Howdy";
    const name3 = "Ramesh";
    console.log(`${greeting3}, ${name3}`); // "Howdy, Ramesh"
    
    const song = "Fight the Youth";
    const score = 9;
    const highestScore = 10;
    const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
    }%.`;
    console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."

    const newline = `One day you finally knew
what you had to do, and began,`;
    console.log(newline);

    /*
    is the same as this 
    */
    const newline2 = "One day you finally knew\nwhat you had to do, and began,";
    console.log(newline2);
// Quote 
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
console.log(goodQuotes1)
console.log(goodQuotes2)
//escape problematic mark 
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
console.log(typeof myString);
console.log(myNum);
console.log(myString);
// number