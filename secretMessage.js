let secretMessage = ["Learning", "is", "not", "about", "what", "you", "get", "easily", "the", "first", "time,", "it", "is", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn",
                     "JavaScript",];

//The .pop method is used to remove the last element of the array.
secretMessage.pop();
//The .push method is used to add one or more elements to the end of an array.
secretMessage.push("to", "Program.");
//In this example, we called the 7th element of the array and make it equal to the new string "right".
secretMessage[7] = "right";
//The .shift method is used to remove the first element of an array. Sort of the opposite of the .pop method.
secretMessage.shift();
//The .unshift method is used to add one or more elements to the beginning of the array. Sort of the opposite of the .push method.
secretMessage.unshift("Programming");
//The .splice method can be used to replace a specific part of the array, and if the deleteCount is set to 0, it can be used to just add rather than replacing.
secretMessage.splice(6, 5, "know");

//The .join method is used to join the array elements, the "" hold the character that we want to introduce between the elements, in this case a simple space.
console.log(secretMessage.join(" "));
