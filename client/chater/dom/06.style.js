/* -------------------- */
/* DOM Styling          */
/* -------------------- */

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
console.log(first.className);
// console.log((first.className = 'box'));

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용
first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active');

// 클래스명 전체지우기 -> className
// 토글 - 있으면 넣어주고 없으면 뺴줘  블린값 반환
console.log(first.classList.contains('hello')); //first엘리먼트에 hello라는 클래스가 포함되어있어 ? 불리언으로반환

function addClass(node, className) {
  if (typeof node === 'string') {
    node = getNode(node);
  }
  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  node.classList.add(className); //셋팅만할거라 리턴필요없음
}

addClass('.first', 'hello');

// attr(first,'class','') //되어야하는데 '' 이값 조건처리를 더해줘야할듯

/* 스타일 변경 방법 --------------------------------------------------------- */
first.style;
//객체 열어보면 css에서 사용할수있는 모든 속성들 나열해준다
first.style.backgroundColor = 'orange'; //setter
first.style.backgroundColor; //getter -> getComputedStyle 해줘야해
first.style.fontSize; // -> 그냥은 안나와 dom에서 생성할때 style생성하고 넘겨준다음에 가져와야하는데 순서때문에 computed 계산이 끝난 css들을 가져와야해 생성되기 이전에 가져오려고했으니까 안나오게찌

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

// getComputedStyle(first).fontSize;
// getComputedStyle(first).getPropertyValue('font-size');

function setCss(node, prop, value) {
  if (typeof node === 'string') node = getNode(node);

  if (!(prop in document.body.style)) {
    throw new SyntaxError(
      'setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.'
    );
  }

  if (!value)
    throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값 입니다.');

  node.style[prop] = value;
}
setCss('.first', 'color', '#fff');
