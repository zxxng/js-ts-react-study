Array.prototype.min = function () {
  return Math.min(...this);
};

// 모든 함수에 memozation 기능 추가
// isPrime(8) -> 캐시x
// isPrime.memo(1000000007) -> 캐시o
Function.prototype.memo = function (key) {
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    // 캐시를 위한 코드
    return (this._cache[key] = this(key));
  }
};

// 모든 함수에 memozation 기능 추가
// isPrime(3) -> 캐시 x
// isPrime = isPrime.memoize();
// isPrime(123213112); -> 캐시 o
Function.prototype.memoize = function () {
  var fn = this; // isPrime
  return function () {
    return fn.memo.apply(fn, arguments);
  };
};
