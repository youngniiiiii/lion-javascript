/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */

/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거

/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)

/* 특정 위치에 삽입 --------------------------------------------------------- */

// - elementNode.insertAdjacentHTML(어디에넣을건데?,뿌려줄값적기)
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

const h1 = getNode('h1');
const template = `<div class = "box"></div>`;
h1.insertAdjacentHTML('beforeend', '<div class = "box">상자 </div>');

// const body = document.body;
// body.insertAdjacentHTML('beforeend', '<div class = "box">상자 </div>');
//js로 동적으로 태그 생성하고 원하는 곳에 뿌리기 위해 사용하는것.

const data = ['빨래하기', '게임하기', '유튜브 보기', '산책하기'];

/* 
forEach 반환x 
reduce 아무거나
filter = 배열반환 걸러냄
map = 배열반환 순환

*/
const todo = getNode('.todo');
// 1.태그를 생성하고
// `<li></li>`
// 2.태그 안에 아이템값 넣기
`<li>${data[0]}</li>`;

// 맵을통해 배열생성
data.map((item) => {
  `<li>${data[0]}</li>`;
});

// 3.생성된 태그를 내보내기 (배열로)
const todoList = data.map((item) => {
  return `<li>${data[0]}</li>`;
});

console.log(todoList);
// document.body.insertAdjacentHTML('beforeend', todoList);
//배열을 렌더링하니까 점까지나와 그래서 forEach 돌기.

// 4.내보낸 배열을 순환하기

todoList.forEach((item) => {
  // 5.반복문 안에서 랜더링하기
  // todo.insertAdjacentHTML('beforeend', item);
  insertLast(todo.item);
});

// 6.랜더링 (html에 태그 뿌려주는거 insertAdjacentHTML)

// 리액트에서는 4,5번 생략해도된다. 알아서 랜더가된다. 우린 배열만 만들면된다.

//함수만들기

/* function insertLast(node, text) {
  if (typeof node === 'string') node = getNode(node);

  if (node.nodeType !== document.ELEMENT_NODE) {
    throw new ReferenceError(
      'insertLast 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.'
    );
  }
  node.insertAdjacentHTML('beforeend', text);
}

insertLast('.todo', '<div>문자</div>'); */
