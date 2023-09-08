"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
	let rootOfEquation1 = (-b + Math.sqrt(discriminant)) / (2 * a);
	let rootOfEquation2 = (-b - Math.sqrt(discriminant)) / (2 * a);
	arr.push(rootOfEquation1,rootOfEquation2)
  } else if (discriminant === 0) {
	  let rootOfEquation3 = -b / (2 * a);
	  arr.push(rootOfEquation3);
  };
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = (parseInt(percent) / 100) / 12;
  let amountReturnedBank = parseInt(amount) - parseInt(contribution);
  let numberMonths = parseInt(countMonths);
  let payment = amountReturnedBank * (percentMonth + (percentMonth / (((1 + percentMonth) ** numberMonths) - 1)));
  let totalAmount = payment * numberMonths;
  return +totalAmount.toFixed(2);
};