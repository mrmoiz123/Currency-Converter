#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright("\n \t Welcome to 1mr2joy6-Currency-conversion-Application \n"))
let currencyConversion = {
    "PKR": {
        "USD" : 0.0036,
        "GBP" : 0.0029,
        "PKR" : 1,
    },
    "GBP" : {
        "USD" : 1.24,
        "GBP" : 1,
        "PKR" : 345.58,
    },
    "USD" : {
        "USD" : 1,
        "GBP" : 0.81,
        "PKR" : 278.40
    },
};


const answer: {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number,
} = await inquirer.prompt(
    [
        {
            type: "list",
            name: "from",
            message: chalk.greenBright("Please selest your currency:"),
            choices: ["PKR" , "USD" , "GBP"]
        },
        {
            type: "list",
            name: "to",
            message: chalk.green("Please selesct your conversion rate:"),
            choices: ["PKR" , "USD" , "GBP"]
        },
        {
            type: "number",
            name: "amount",
            message: chalk.greenBright("Enter your amount you want to convert:")
        },

    ]
);

// Destructuring User Input...

const {from, to, amount} = answer;

if (from && to && amount){
    let result = currencyConversion[from][to] * amount;
    console.log(chalk.cyanBright(`\n \t Your conversion from ${from} to ${to} is: ${result} \n`));
    console.log(chalk.yellowBright("*Thank You For Using Our Application*"));
}else {
    console.log("Invalid Conversion");
}

