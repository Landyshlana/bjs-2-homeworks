"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let i;
	let j;
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d > 0) {
		i = (-b + Math.sqrt(d)) / (2 * a);
		j = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(i) && arr.push(j)
	} else
	if (d < 0) {
		arr = [];
	} else
	if (d === 0) {
		i = -b / (2 * a);
		arr.push(i);
	};
	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(parseInt(percent)) === true || isNaN(parseInt(contribution)) === true || isNaN(parseInt(amount)) === true ||
		isNaN(parseInt(countMonths)) === true ||
		parseInt(percent) === 0 || parseInt(amount) === 0 ||
		parseInt(countMonths) === 0
	) {
		return false;
	}
	let P = (parseInt(percent) / 100) / 12;
	let S = parseInt(amount) - parseInt(contribution);
	let n = parseInt(countMonths);
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));
	let totalAmount = payment * n;
	return +totalAmount.toFixed(2);
};