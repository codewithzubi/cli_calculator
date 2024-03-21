#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter the First  Value", type: "number", name: "firstNumber" },
    { message: "Enter the Second Value", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statment
if (answer.operator === "Addition") {
    console.log(`Your Answer is ${answer.firstNumber + answer.secondNumber}`);
}
else if (answer.operator === "Subtraction") {
    console.log(` Your Answer is ${answer.firstNumber - answer.secondNumber}`);
}
else if (answer.operator === "Multiplication") {
    console.log(` Your Answer is ${answer.firstNumber * answer.secondNumber}`);
}
else if (answer.operator === "Division") {
    console.log(` Your Answer is ${answer.firstNumber / answer.secondNumber}`);
}
else {
    console.log("please select valid operator");
}
