function sumBetween(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

const sum1 = sumBetween(1, 4); //  10
const sum2 = sumBetween(-1, 1); //  0
const sum3 = sumBetween(7, 8); //  15
