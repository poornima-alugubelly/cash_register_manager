const billAmt = document.querySelector("#bill-Amt");
const billAmtBtn = document.querySelector("#bill-AmtBtn");
const givAmt = document.querySelector("#giv-Amt");
const givAmtBtn = document.querySelector("#giv-AmtBtn");
const givAmtDisplay = document.querySelector("#giv-amt-display");
const message = document.querySelector("#err-message");
const tabValues = document.querySelectorAll(".tab-values");
const outputTable = document.querySelector("#outputTable");
const notes = [2000, 500, 100, 20, 10, 5, 1];

const checkBillAmount = () => {
  hideContent(); // error message needs to removed after user enters correct value
  const bill = Number(billAmt.value);
  if (bill > 0) {
    givAmtDisplay.style.display = "block";
    billAmtBtn.style.display = "none";
  } else {
    showMessage("Please enter a valid bill amount");
  }
};

const checkGivenAmount = () => {
  if (
    !(billAmt.value < 0) &&
    !(billAmt.value === "") && // checking for both values for the case where user may go back and delete a value
    !(givAmt.value === "")
  ) {
    const bill = Number(billAmt.value);
    const given = Number(givAmt.value);
    hideContent(); // error message needs to removed after user enters correct value
    if (given > bill) {
      const amount = given - bill;
      calcDenomination(amount);
    } else if (given === bill) {
      showMessage("No need for change!Have a nice day :)");
    } else {
      showMessage("The given amount is not sufficient");
    }
  } else {
    showMessage("Please give proper values for both");
    outputTable.style.display = "none";
  }
};

const showMessage = (msg) => {
  message.style.display = "block";
  message.innerText = msg;
};

const hideContent = () => {
  message.style.display = "none";
  outputTable.style.display = "none";
};

const calcDenomination = (amount) => {
  for (let i = 0; i < notes.length; i++) {
    tabValues[i].innerText = Math.floor(amount / notes[i]);
    amount %= notes[i];
  }
  outputTable.style.display = "block";
};

billAmtBtn.addEventListener("click", checkBillAmount);
givAmtBtn.addEventListener("click", checkGivenAmount);
