function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
	if (arr[i] > max) {
      max = arr[i];
	}
	if (arr[i] < min) {
	  min = arr[i];
	}
	sum += arr[i];
	}
  let avg = sum / arr.length;
  return {
		min: min,
		max: max,
		avg: +avg.toFixed(2)
  };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
	return 0;
  };
  let sum = arr.reduce(function(a, b) {
	return a + b;
  });
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
	return 0;
  };
  let differenceMaxMin = Math.max.apply(null, arr) - Math.min.apply(null, arr);
  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  sumEvenElement = 0;
  sumOddElement = 0;
  if (arr.length === 0) {
	return 0;
  };
  for (let i = 0; i < arr.length; i++) {
 	if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
	} else {
	    sumOddElement += arr[i];
	}
  }	
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
	return 0;
   };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
	  sumEvenElement += arr[i];
	  countEvenElement += 1;
	}
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  for (let i = 0; i < arrOfArr.length; i++) {
	const result = func(...arrOfArr[i]);
	if (maxWorkerResult < result) {
	  maxWorkerResult = result
	}
  }
  return maxWorkerResult;
}