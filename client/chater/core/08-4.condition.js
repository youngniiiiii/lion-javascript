/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';
// 다른점을 꼭 기억하기 !!
console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환
const WIDTH = '10px';
console.log(null || WIDTH);
console.log(null ?? WIDTH);
console.log(undefined || WIDTH);

// Logical Assignment Operators
// 자바스크리튼 발전하기때문에 새로운게 나왔어.
let x;
let y;
x = x || y;
//최근에 이런게 나왔어
x ||= y; //  x 가 false면 y값을 x에 바로 할당하겠다.  빠져나온 값을 다시 x 에 할당해줄 필요가 없다
x &&= y; // x가 true일때 y 값을 x 에 할당
x ??= y; // x가 undefined,null일때 y값을 x에 할당
