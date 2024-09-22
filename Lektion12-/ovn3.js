function checkNumber(num) {
  if (num > 0) {
    return "talet är postivt";
  } else if (num < 0) {
    return "talet är negativt";
  } else {
    return "talet är 0";
  }
}

const message1 = checkNumber(-3); // "talet är negativt"
const message2 = checkNumber(101); // "talet är positivt"
const message3 = checkNumber(0); // "talet är 0"
