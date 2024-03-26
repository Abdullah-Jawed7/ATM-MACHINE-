#!  /usr/bin/env node

import inquirer from "inquirer";

// ATM MACHINE

let myBalance = 10000;
let myPin = 78612;

// take pin from user

let userPin = await inquirer.prompt([
  {
    name: "Pin",
    message: "Enter your Pin :",
    type: "number",
  },
]);
if (userPin.Pin === myPin) {
  let userOperation = await inquirer.prompt([
    {
      name: "Operation",
      message: "Select your operation  :",
      type: "list",
      choices: ["Withdraw", "CheckBalance"],
    },
  ]);

  if (userOperation.Operation === "Withdraw") {
    let selectedAmount = await inquirer.prompt([
      {
        name: "SelectedAmount",
        message: "Select your Amount  :",
        type: "list",
        choices: ["1000", "2000", "5000", "10000", "Enter Amount"],
      },
    ]);
    if (selectedAmount.SelectedAmount === "Enter Amount") {
      let userAmount = await inquirer.prompt([
        {
          name: "Amount",
          message: "Enter your Amount :",
          type: "number",
        },
      ]);
      if (userAmount.Amount <= myBalance) {
        myBalance -= userAmount.Amount;
        console.log(
          `Your amount ${userAmount.Amount} is Withdrawed`
        );
        console.log(`Your reamaning balance is ${myBalance}`);
      } else {
        console.log("Your balance is insufficient");
      }
    } else {
      if (selectedAmount.SelectedAmount <= myBalance) {
        myBalance -= selectedAmount.SelectedAmount;
        console.log(
          `Your amount ${selectedAmount.SelectedAmount} is Withdrawed`
        );
        console.log(`Your reamaning balance is ${myBalance}`);
      } else {
        console.log("Your balance is insufficient");
      }
    }
  } else {
    console.log(`Your balance is ${myBalance}`);
  }
} else {
  console.log("Invalid Pin");
  console.log("Please! Enter correct Pin ");
}
