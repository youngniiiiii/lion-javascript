/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

const empty = null;
console.log(empty);

// 2. 값이 할당되지 않은 상태
let unknown;
console.log(unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
//문자 생성자 방식
const hi = new String('hello'); //이렇게 생성할수도 있다. 똑같이 문자를 생성해주는것
console.log(hi); //객체로 나와

// 문자 리터럴 방식
const double = 'hello'; //큰따옴표가 변경되어써
const double2 = 'hello';
const double3 = `hello${1 + 3}`; // 템플릿 리터럴 / 템플릿 스트링

// 4. 정수, 부동 소수점 숫자(길이 제약)
const number = new Number(123);
console.log(typeof number);

const integer = 123;
const floatingPointNumber = 10.45;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

// 6. 참(true, yes) 또는 거짓(false, no)

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

// 8. 고유한 식별자(unique identifier)

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof

// 2) 함수 typeof()

// 언어 상, 오류

// Object

// Array
const arr = [10, 100, 1000, 1, 2, 3];
console.log(arr[2]);

// function

// this
