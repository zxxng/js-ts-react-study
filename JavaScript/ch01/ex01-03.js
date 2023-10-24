var maxNum = Number.MAX_VALUE;
var maxSafeNum = Number.MAX_SAFE_INTEGER;

// BigInt
var bn1 = 12345n;
var bn2 = BigInt(maxSafeNum);

console.log(maxNum, maxSafeNum, bn1, bn2);
console.log(typeof maxNum, typeof maxSafeNum, typeof bn1, typeof bn2);

console.log(maxSafeNum, maxSafeNum + 1, maxSafeNum + 2, maxSafeNum + 3);
console.log(
  Number.isSafeInteger(maxSafeNum),
  Number.isSafeInteger(maxSafeNum + 1),
);
console.log(bn2, bn2 + 1n, bn2 + 2n, bn2 + 3n);
