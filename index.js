// Code your solutions in this file
function writeCards(names, message) {
  const newArray = [];
  for (let name of names) {
    newArray.push(`Thank you, ${name}, for the wonderful ${message} gift!`);
  }
  return newArray;
}

function countDown(number) {
  let i = parseInt(number);
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
// 1) invokes console.log once for each number, counting down from the number provided to zero
// 2) logs each number when counting down, starting from the number provided
