#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([{message:"Enter first number" , type:"number", name:"firstNumber"},
{message:"Enter secondnumber" , type:"number", name:"secondNumber"},
{message:"select one of the operator to perform action", type:"list",
name:"operator", choices:["Addition" , "Subtraction",  "Multiplacation", "Division"]},
]);
console.log(answer);
// conditinal statement
if (answer.operator==="Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator==="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator==="Multiplacation"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator==="Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
