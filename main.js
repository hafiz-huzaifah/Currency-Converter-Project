#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue("\n\tWelcome to Code With Huzaifah - Currency Convertor\n "));
// define the list of curriencies and their exchange rates
let exchange_rate = {
    "USD": 1, // Base Currency
    "EUR": 0.9, // European Currency(Euro)
    "JYP": 113, // Japanese Currency (Yen)
    "CAD": 1.3, // Canadian Currency (Dollar)
    "AUD": 1.65, // Australian Currency (Dollar)
    "PKR": 277.70, // Pakistani Currency (Rupee)
    // Add more curriencies & their exchange rates here
};
// prompt the user to select the  currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.cyanBright("Select the currency to convert from:"),
        choices: ["USD", "ERU", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.magenta("Select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.yellow("Enter the amount to convert:")
    },
]);
// perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// display the converted amount 
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
