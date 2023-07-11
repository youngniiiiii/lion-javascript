/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;
authUser = {
  uid: 'user-id-zQajwiefj3123',
  name: 'ye',
  email: 'hanmejiad@nadkf.com',
  isSingin: true,
  permission: 'paid', //free | paid
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);

// 계산된 프로퍼티 (computed property)
let computedProperty = 'phone'; // phone | tel
function createUser() {
  return {
    name: 'ye2',
    email: 'hanmejiad@nadkf.com2',
  };
}

const user = createUser();

// 프로퍼티 포함 여부 확인
// Object.prototype.hasOwnProperty.call();

// 프로퍼티 나열

let keyArray = Object.keys(authUser);

//getProp(object)

// 프로퍼티 제거 or 삭제
// function removeProperty(object, key) {
//   if (key === 'all') {
//     for (let key of object.keys(object)) {
//       object[key] = null;
//     }
//     return object;
//   }

//   object[key] = null;
//   return object;
// }

// removeProperty(authUser, 'all');

function deleteProperty(object, key) {
  delete object[key];
  return object;
}

deleteProperty(authUser, 'all');

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성   //t,f 반환하는 함수 오브젝트가 비엇는지 아닌지 확인하는 함수
function isEmptyObject() {
  return null;
}
isEmptyObject();

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
