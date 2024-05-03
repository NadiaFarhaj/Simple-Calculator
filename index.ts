#! /usr/bin/env node

import inquirer from "inquirer";

// Printing a Welcome Message
console.log("\n\tWelcome To \'Nadia Farhaj\' -CLI Simple Calculator\n");

// Asking Question from Users through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter your First Number", type: "number", name: "firstNumber"},
    {message: "Enter your Second Number", type: "number", name: "secondNumber"},
    {
        message: "Select one Operator to perform Operations",
        type: "list",
        name: "operator",
        choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);

// Conditional statements If-Else

if(answers.operator === "ADDITION"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "SUBTRACTION"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "MULTIPLICATION"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "DIVISION"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}