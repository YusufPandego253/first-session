/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  const odd = [];
  const even = [];
  const dividedByThree = [];
  
  numbers.forEach(number => {
    if (number % 3 === 0) {
      dividedByThree.push(number);
    }
    else if (number % 2 ===0) {
      even.push(number);
    }
    else {
      odd.push(number);
    }
  });

  return console.log([even, odd, dividedByThree]);
}

numberGrouping([1, 2, 4, 6, 8]) // Output: [[2, 4, 8], [1], [6]]
