/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // console.log(arguments);

  //함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사한 형태를 가지고 있는 것은? : arguments
  let total = 0;

  //   for (let i = 0; i < arguments.length; i++) {
  //     // console.log(arguments[i]);
  //     // 누적 변수가 필요..
  //     total += arguments[i];
  //   }
  //   return total;
  //2.for of
  // for (let key of arguments) {
  //   console.log(key);
  //   total += key;
  // }
  // return total;

  //3.배열의 능력 사용. 배열의 능력을 빌려쓰기  Array.prototype.forEach.call(arguments,function(){})

  // Array.prototype.forEach.call(arguments, function (item) {
  //   // console.log(item);
  //   total +=item
  // });
  // return total

  // let reaelArray = Array.prototype.slice.call(arguments);
  // console.log(reaelArray);

  // reaelArray.forEach(function (item) {
  //   total += item;
  // });

  // return total;

  // 5;
  // let realArray = Array.from(arguments);
  // console.log(realArray);

  // realArray.forEach(function (item) {
  //   total += item;
  // });

  // return total;

  // 6. 스프레드 신택스 spread syntax
  let realArray = [...arguments];
  console.log(realArray);
  realArray.forEach(function (item) {
    total += item;
  });

  // return total;

  //7 . Array.reduce
  // let realArray = [...arguments];
  // return realArray.reduce((acc, crr) => {
  //   return acc + crr;
  // }, 0);
};
let result = calculateTotal(1000, 500, 200, 6500);
console.log(result);

//아규먼트를 한번에 받아서 처리하는 방법은 ?

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;

// 콜백 함수 (표현)식
let callbackFunctionExpression;

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;

// (function () {})();
