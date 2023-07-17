/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling  (이전 형제 요소)
// - nextSibling
// 노드만 찾을일이 많지않아서 요소노드만 따로 접근할수있는것도 있어 Element

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children ( 모든 자식 요소들 )
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest 가장인접한 h1은 누구야? 해서 반환해준다.  가장인접한 부모를 찾아가는거야. 안에를 찾아가는게 아니야

/* 문서 대상 확인 */
// - matches
// 너 () 이거 가지고있어? 블린형으로 반환된다.

// - contains

// console.log(first.contains(secondSpan));

// getNode('.first');
const first = getNode('.first'); //span class='first' /span

// getNodes('span');
const span = getNodes('span');
console.log(span);
