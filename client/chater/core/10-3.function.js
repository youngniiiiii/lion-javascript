/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, ...args) => {
  // console.log(args);

  //유사배열인 arguments
  // let total = 0;
  // args.forEach((item) => {
  //   total += item;
  // });

  // return total;

  return args.reduce((acc, item) => acc + item, 0);
};

const result = calcAllMoney(1000, 500, 200, 2000);
// console.log(result);

// 화살표 함수와 this

//1.함수선언문 2.함수표현식  3.화살표함수식

//1.
function normalFunction() {
  console.log(this);

  // 윈도우꺼야 전역 오염중
}

//2.
const expressionFunction = function () {
  console.log(this);

  //ㅇㅒ도 윈동우가 호출해주고있어
};
//3.
const arrowFunction = () => {
  console.log(this);

  //윈도우에 의해 호출된게아니라 나자신이 호출된거고 여기서의 this 는 부모의 windeow를 가져오는것.
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;



const user = {
  total:0,
  name:'tiger',
  age:32,
  address:'서울시',
  totalGrades:function({
    
  })
}