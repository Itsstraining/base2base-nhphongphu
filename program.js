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


function binaryToDecimal(convertNumber) {
  let decimal = 0;
  let remainder, i = 0;
  while (convertNumber != 0) {
    remainder = convertNumber % 10;
    convertNumber = parseInt(convertNumber / 10);
    decimal = decimal + remainder * Math.pow(2, i);
    i++;
  }
  return decimal;
}








function main(input) {
  let arrOutput = input.split(' ');
  let convertNumber = parseInt(arrOutput[0]);
  let convertFrom = parseInt(arrOutput[1]);
  let convertTo = parseInt(arrOutput[2]);
  decimalToBinary(convertNumber);
  binaryToDecimal(convertNumber);



  if (arrOutput[1] == 10 && arrOutput[2] == 2) {
    console.log(decimalToBinary(convertNumber));
  }
  else if (arrOutput[1] == 2 && arrOutput[2] == 10) {
    console.log(binaryToDecimal(convertNumber));
  }
}

module.exports = main;
