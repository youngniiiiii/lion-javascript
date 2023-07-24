import { jujeobData } from './data/data.js';
import {
  addClass,
  clearContents,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  shake,
  showAlert,
} from './lib/index.js';

//[1]
//1-1.주접 떨기 버튼을 클릭할 수 있는 핸드럴를 연결
// 1-2.nameField에 있는 값을 가져와주세요

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

function handleSubmit(e) {
  e.preventDefault();
  let name = nameField.value;
  const list = jujeobData(name);
  //1-3.jujeob데이터 가져오기  data.js
  // console.log(jujeobData(name));
  //1-4.배열중 n번째만 가져오기 getRandom ->pick에 담기
  const pick = list[getRandom(list.length)];
  //2-1조건처리 - 아무값도 입력받지 못했을때 예외처리
  //2-2조건처리. replace->regEXP 사용해서 공백처리하기
  //2-3조건처리 숫자형 문자를 받았을때 (123 실패, 기안84 통과)
  if (!name || name.replace(/\s*/g, '') === '') {
    //@@@@@@@@@@@@@@@@@@@@@@@

    showAlert('.alert-error', '이름을 입력해 주세요!', 2000); // 3-3 showAlert.js 유틸함수로 만들기
    // addClass('.alert-error', 'is-active'); //3-1 잘못된 정보를 받으면 사용자에게 알려주세요

    // setTimeout(() => {
    //   removeClass('.alert-error', 'is-active'); //3-2 2초뒤 제거해주기 // 유틸함수로 만들기
    // }, 2000);

    //3-5 잘못된 정보입력시 인풋창이 흔들리게하는 애니메이션 -> 한번 .shake가 들어가면 계속남아 ->몇초뒤에 빠지게 하려면 비동기처리해야해 이러면 귀찮아 애니메이션쓸때마다 이렇게해야하나?
    //애니메이션은 그래서 라이브러리로 처리하면 쉽게 사용할수 있다. greenSock 애니메이션 플렛폼
    //<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script> 추가해주기
    /* global gsap */ // -> 입력시 오류 꺼진다.
    // gsap.to('form', {     //3-6 animation 유틸함수로 만들어서 사용
    //   duration: 0.1,
    //   x: -10,
    //   // rotation: 360,
    //   repeat: 5,
    //   yoyo: true, // 이거안하면 한쪽방향으로만 가는 애니메이션이 된다.
    // paused: true, // 일시정지 된다.
    // });
    shake.restart();
    return;
  }
  // 2-4 Number(name) => 명시적 형변환을 isNaN 안에 넣으면 true,false값 반환한다.
  if (!isNumericString(name)) {
    //@@@@@@@@@@@@@@@@@@@@@@@
    showAlert('.alert-error', '제대로된 이름을 입력해 주세요', 2000); //3-4  숫자입력시 나온다.
    shake.restart(); // gsap.stop()  gsap.play()  gsap.restart() 제공해준다. restart애니메이션 재생시키는 메서드 paly는 한번 재생하면 끝까지 가서 종료된다.
    return;
  }

  //result안에 렌더링
  // insertLast(resultArea, pick); -> 이렇게만 입력하면 문제가있어 기존글자가 그대로 남아져있어 clearcontent 함수만들었었어 이거사용하기
  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener('click', handleSubmit);
//[2]조건처리
// [phase-3]
//[3]잘못된 정보를 받으면 사용자에게 알려주세요 alert-error에  is-active 넣어주면 뜬다.
// 1. 잘못된 정보를 입력 받으면 사용자에게 알려주세요.
// 2. 재사용 가능한 함수 (showAlert)
// 3. gsap shake 기능 구현
// 4. animation 모듈화

// 버튼 [4] 클릭했을때 복사가 된다.
//result 클릭이벤트 바인딩
function handleCopy() {
  const text = resultArea.textContent; //4-3 text 변수에 담아줬어
  navigator.clipboard.writeText(text); //4-2 클릭시 복사가 되게하기 @@@@@@@@@@@@@@@@@@@@ navigator는 BOM안에있는 기능중하나
  // 4-4 클립보드 복사가 완료되면 그때! alert을 띄워야함  -> 이게 가장 정확할거야 지금은 성공하든 실패하던 상관없이 함수가 실행돼 사실 윗줄 없어도 얼럿은 잘떠
  //4-5 복사 다됐어? 그러면 얼럿 띄어줘 -> promise 사용

  //4-1showAlert 사용해서 클립보드 복사시 복사완료 뜨게해주고 2초뒤에 사라지게해주기
  showAlert('.alert-success', '클립보드 복사 완료!');
}
resultArea.addEventListener('click', handleCopy);
