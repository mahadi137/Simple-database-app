const readlineSync = require("readline-sync");
const asciitable = require("asciitable");

//Command list
const command = ["[1] Add", "[2] Remove", "[3] Display", "[0] Cancel"];
const choice = [1, 2, 3, 0];

let database = [];
let data = [];

// Functions for Command
function add(name) {
  return database.push(name);
}

function remove(id) {
  //(position, No. of elements)
  return database.splice(id, 1);
}

function display(data) {
  data = [];
  // Table formate
  let options = {
    skinny: true,
    intersectionCharacter: "0",
    columns: [
      { field: "a", name: "Student ID Number" },
      { field: "b", name: "Student Name" },
    ],
  };

  for (let i = 0; i < database.length; i++) {
    data.push({ a: database.indexOf(database[i]), b: database[i] });
  }

  let table = asciitable(options, data);
  return console.log(table);
}

// Starting point of our app
function main() {
  while (true) {
    let displayCommand = "";

    for (let i = 0; i < 4; i++) {
      displayCommand += command[i] + "\n";
    }
    console.log(displayCommand);

    // Wait for user's choice.
    let userChoice = readlineSync.question(`Choice? [${choice}]: `);

    if (userChoice == 1) {
      //Asking data:name
      let userName = readlineSync.question("May I have student name? ");
      if (userName) {
        add(userName);
      }
    }
    if (userChoice == 2) {
      //Asking data:id
      let userId = readlineSync.question("May I have student Id? ");
      if (userId) {
        let x = remove(userId);
        console.log(`Removed: ${x}`);
      }
    }
    if (userChoice == 3) {
      //Showing data: Display?
      display(data);
    }
    if (userChoice == 0) {
      break;
    }
  }
}

main();
