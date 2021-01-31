function decimalToBinary(convertNumber) {
  let binary = 0;
  let remainder, i = 1;
  while (convertNumber != 0) {
    remainder = convertNumber % 2;
    convertNumber = parseInt(convertNumber / 2);
    binary = binary + remainder * i;
    i = i * 10;
  }
  return binary;
}

function main(input) {
  let arrOutput = input.split(' ');
  let convertNumber = parseInt(arrOutput[0]);
  let convertFrom = parseInt(arrOutput[1]);
  let convertTo = parseInt(arrOutput[2]);
  decimalToBinary(convertNumber);

  if (arrOutput[1] == 10 && arrOutput[2] == 2) {
    console.log(decimalToBinary(convertNumber))
  }
}

module.exports = main;
