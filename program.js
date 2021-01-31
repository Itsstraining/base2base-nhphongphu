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

function octalToDecimal(convertNumber) {
  let octal = 0, i = 0;
  let remainder;
  while (convertNumber != 0) {
    remainder = convertNumber % 10;
    convertNumber = parseInt(convertNumber / 10);
    octal = octal + remainder * Math.pow(8, i);
    i++;
  }
  return octal;
}

function decimalToOctal(convertNumber) {
  let decimal = 0, i = 1;
  let remainder;
  while (convertNumber != 0) {
    remainder = convertNumber % 8;
    decimal = decimal + remainder * i;
    convertNumber = parseInt(convertNumber / 8);
    i = i * 10;
  }
  return decimal;
}

function octalToBinary(convertNumber) {
  let octal = 0, i = 0;
  let remainder;
  while (convertNumber != 0) {
    remainder = convertNumber % 10;
    convertNumber = parseInt(convertNumber / 10);
    octal = octal + remainder * Math.pow(8, i);
    i++;
  }
  i = 1;
  let binary = 0;
  let remainder1;
  while (octal != 0) {
    remainder1 = octal % 2;
    octal = parseInt(octal / 2);
    binary = binary + remainder1 * i;
    i = i * 10;
  }
  return binary;
}







function main(input) {
  let arrOutput = input.split(' ');
  let convertNumber = parseInt(arrOutput[0]);
  let convertFrom = parseInt(arrOutput[1]);
  let convertTo = parseInt(arrOutput[2]);

  if (arrOutput[1] == 10 && arrOutput[2] == 2) {
    console.log(decimalToBinary(convertNumber));
  }
  else if (arrOutput[1] == 2 && arrOutput[2] == 10) {
    console.log(binaryToDecimal(convertNumber));
  }
  else if (arrOutput[1] == 10 && arrOutput[2] == 8) {
    console.log(decimalToOctal(convertNumber));
  }
  else if (arrOutput[1] == 8 && arrOutput[2] == 10) {
    console.log(octalToDecimal(convertNumber));
  }
  else if (arrOutput[1] == 8 && arrOutput[2] == 2) {
    console.log(octalToBinary(convertNumber));
  }
}

module.exports = main;
