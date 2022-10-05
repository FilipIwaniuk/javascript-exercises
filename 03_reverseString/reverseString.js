// TODO TRIM THE STRING PRIOR TO CONVERSION TO THE ARRAY

const reverseString = function (input) {

  const reverseAssist = [];
  let stringJoin = ``;

  for (let x = 0; x < input.length; x++) {

    reverseAssist.unshift(input[x])
    stringJoin = reverseAssist.join('');
  }
  return stringJoin
}
console.log(reverseString(`red`));

// Do not edit below this line
module.exports = reverseString;
