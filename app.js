var billAmt = document.querySelector("#bill-Amt");
var billAmtBtn = document.querySelector("#bill-AmtBtn");
var givAmt = document.querySelector("#giv-Amt");
var givAmtBtn = document.querySelector("#giv-AmtBtn");
var givAmtDisplay = document.querySelector("#giv-amt-display");
var message = document.querySelector("#err-message");
var tabValues = document.querySelectorAll(".tab-values");
var output = document.querySelector("#output");
var notes = [2000, 500, 100, 20, 10, 5, 1];
function checkBillAmount() {
	hideContent();
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
		!(billAmt.value === "") &&
		!(givAmt.value === "")
	) {
		var bill = Number(billAmt.value);
		var given = Number(givAmt.value);
		hideContent();
		if (given >= bill) {
			var amount = given - bill;
			calcDenomination(amount);
		} else {
			showMessage("The given amount is not sufficient");
		}
	} else {
		showMessage("Please give proper values for both");
		output.style.display = "none";
	}
}

function showMessage(msg) {
	message.style.display = "block";
	message.innerText = msg;
}

function hideContent() {
	message.style.display = "none";
	output.style.display = "none";
}

function calcDenomination(amount) {
	for (var i = 0; i < notes.length; i++) {
		tabValues[i].innerText = Math.floor(amount / notes[i]);
		amount %= notes[i];
	}
	output.style.display = "block";
}

billAmtBtn.addEventListener("click", checkBillAmount);
givAmtBtn.addEventListener("click", checkGivenAmount);
