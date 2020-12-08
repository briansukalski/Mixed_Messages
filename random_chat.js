//Imports all dialogue from messages file
const messageArrays = require("./messages.js");

//Function will generate a message using a randomly generated element from each of the three dialogue arrays
function generateMessage(dialogueArrays) {
    //Initializes message as a blank string
    let message = "";
    //Loop through each dialogue array
    dialogueArrays.forEach(dialogueArray => {
        //Selects random element in array and adds it to message
        let randIndex = Math.floor(Math.random() * dialogueArray.length);
        message += dialogueArray[randIndex] + " ";
    });
    //Trims off trailing space from message
    message = message.trim();
    return message;
}



//Calls function using imported dialogue array and prints to console
console.log(generateMessage(messageArrays.allDialogue));