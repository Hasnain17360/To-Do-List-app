#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n***Welcome to List-E!***");
let todos = [];
let condition = true;
function displayTasks() {
    console.log("\nYour To-Dos:");
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}. ${todos[i]}`);
    }
}
while (condition) {
    let Task = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "\nAdd item(s) to your list:",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "\nDo you want to add more item(s)?",
            default: "false",
        },
    ]);
    todos.push(Task.todo);
    condition = Task.addMore;
    displayTasks();
}
if (!condition) {
    console.log("\nThank you for using List-E!");
}
