var billAmt = document.querySelector("#bill-Amt");
var billAmtBtn = document.querySelector("#bill-AmtBtn");
var givAmt = document.querySelector("#giv-Amt");
var givAmtBtn = document.querySelector("#giv-AmtBtn");
var givAmtDisplay = document.querySelector("#giv-amt-display");
var message = document.querySelector("#err-message");
var tabValues = document.querySelectorAll(".tab-values");
var outputTable = document.querySelector("#outputTable");
var notes = [2000, 500, 100, 20, 10, 5, 1];
function checkBillAmount() {
	hideContent(); // error message needs to removed after user enters correct value
	var bill = Number(billAmt.value);
	if (bill > 0) {
		givAmtDisplay.style.display = "block";
		billAmtBtn.style.display = "none";
	} else {
		showMessage("Please enter a valid bill amount");
	}
}

function checkGivenAmount() {
	if (
		!(billAmt.value < 0) &&
		!(billAmt.value === "") && // checking for both values for the case where user may go back and delete a value
		!(givAmt.value === "")
	) {
		var bill = Number(billAmt.value);
		var given = Number(givAmt.value);
		hideContent(); // error message needs to removed after user enters correct value
		if (given >= bill) {
			var amount = given - bill;
			calcDenomination(amount);
		} else {
			showMessage("The given amount is not sufficient");
		}
	} else {
		showMessage("Please give proper values for both");
		outputTable.style.display = "none";
	}
}

function showMessage(msg) {
	message.style.display = "block";
	message.innerText = msg;
}

function hideContent() {
	message.style.display = "none";
	outputTable.style.display = "none";
}

function calcDenomination(amount) {
	for (var i = 0; i < notes.length; i++) {
		tabValues[i].innerText = Math.floor(amount / notes[i]);
		amount %= notes[i];
	}
	outputTable.style.display = "block";
}

billAmtBtn.addEventListener("click", checkBillAmount);
givAmtBtn.addEventListener("click", checkGivenAmount);
