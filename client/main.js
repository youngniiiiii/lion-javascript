import { diceAnimation, getNode, getNodes, toggleClass } from './lib/index.js';

//part-1
// 1.dice animation 불러오기

const [startButton, recordButton, resertButton] = getNodes(
  '.buttonGroup> button'
); // 1-3주사위 굴리기 버튼을 가져온다 // 버튼그룹 버틐들중 첫번째로 잡기 or 클래스 //이벤트위임!! 방법  전체부모 클릭하게해서 대상이 뭔지 체크해서 가져오게하기 , 모든버튼들을 배열로 가져오기

let isClicked = false; //3-2
let stopAnimation; //함수 안에 있으면 계속 재할당이 된다. 함수 밖에 설정해줘야해

function handleRollingDice(e) {
  // 1-5애니메이션 코드를 작성한다. diceAnimation() 실행되게 코드작성
  if (!isClicked) {
    //3-3
    stopAnimation = setInterval(diceAnimation, 100); // 1-2 애니메이션이 주기적으로 움직여져 //
    // console.log(stopAnimation);//6,9,12,15,등등등....
  } else {
    clearInterval(stopAnimation); //3-4 id값을 받아야해 setInterval 변수에 담기
  }
  isClicked = !isClicked;
  // toggleClass(startButton, 'is-active'); //3-1 애니메이션 토글제어  변수를 만들어서 트루냐 펄스냐 조건처리
}

startButton.addEventListener('click', handleRollingDice); // 1-4이벤트 핸들러를 연결한다 주사위 굴리기 버튼을 클릭하면
