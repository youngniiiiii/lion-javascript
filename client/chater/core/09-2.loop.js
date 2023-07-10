/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 100;
// do {
//   console.log(i);

//   i++;
// } while (i < 10); //이조건은 거짓이지만 한번 실행은 된다. 100출력된다.

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let repeat = +prompt('순환횟수를 적어주세요');
// do {
//   console.log(repeat);
//   repeat--;
// } while (repeat);

// console.log('최초 실행된 메세지 입니다. 이 메세지는 조건이 거짓이어도 볼 수 있습니다. ')
// break;

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// js로 html에 접금하기 dom
// 하나의대상을잡고 다음대상을 알아서 잡아줄수있는 코드를 짜보자
// first = first.nextSibling.nextSibling.nextSibling.nextSibling;
// console.log(first);

/* 
let first = document.querySelector('.first');

do {
  first.nextSibling;
} while (first.nodeType !== document.ELEMENT_NODE);
console.log(first);
 */

let first = document.querySelector('.first');

function next(node) {
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);
  return node;
}
const second = next(first);
console.log(second);

// 다음 태그요소가 선택되길 원함

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);
  return node;
}

console.log(prev(second));
