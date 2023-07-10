/* ---------------- */
/* Condition        */
/* ---------------- */

/* if ('') {
  console.log('이 조건은 항상 실행됩니다.');
} else {
  console.log('조건에 부합하지 않습니다.');
}
 */
/* 
let result = prompt('자바스크립트의 공식 이름은 무엇일까요?', '').toLowerCase();
if (result === 'ecma') {
  alert('정답');
} else {
  alert('땡! 에크마입니다');
}
*/
/* 
let result = prompt('숫자 하나만 입력해주세요', '0');
if (result > 0) {
  console.log(1);
} else if (result < 0) {
  console.log(-1);
} else {
  console.log(0);
} */

// let result = a + b < 4 ? '미만' : '이상';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No
/* 
// 영화 봤니?
let didWatchMovie = confirm('너 엘리멘탈 영화 봤니?', '');
// 영화 볼거니?

if (!didWatchMovie) {
  // 영화 볼거니?
  let goingToWatchMovie = confirm('영화 볼거니?');

  if (goingToWatchMovie) {
    let withWho = prompt('누구랑 볼거니?', '');

    if (withWho === '여자친구') {
      console.log('zzz');
    } else if (withWho === '가족') {
      console.log('화목하네');
    } else {
      console.log('재밌게보구와~~~~');
    }
  }
} else {
  let alone = confirm('너 혼자 봤니?');

  if (alone) {
    let didCry = confirm('너 울었니..?');

    if (didCry) {
      console.log('너..찌질했네..');
    } else {
      console.log('너 T야?');
    }
  }
}
 */
let movie = confirm('영화봣어?');
if (movie) {
  let alone = confirm('혼자봤니?');
  if (alone) {
    let cry = confirm('울었니?');
    if (cry) {
      console.log('찌질하네');
    } else {
      console.log('너 T야?');
    }
  } else {
    console.log('플러팅끝');
  }
} else {
  let see = confirm('볼거니?');
  if (see) {
    let who = prompt('누구랑볼거니?');
    if (who === '애인') {
      console.log('zzz');
    } else if (who === '가족') {
      console.log('화목하네');
    } else {
      console.log('재밌게봐~');
    }
  } else {
    console.log('플러팅끝');
  }
}

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

/* 
let name2 = prompt('숫자를입력해');

if (name2 > 0) {
  console.log(1);
} else if (name2 < 0) {
  console.log(-1);
} else if (name2 == 0) {
  console.log(0);
}
let message =
  login == '직원'
    ? '안녕하세요.'
    : login == '임원'
    ? '환영합니다.'
    : login == ''
    ? '로그인이 필요합니다.'
    : '';

let userName = prompt('이름 입력해주세요.', '');
if (userName == '영은') {
  let pass = prompt('비번 입력해주세요.', '');
  if (pass == 'duddms') {
    alert('웰컴');
  } else if (pass == '' || pass == null) {
    alert('취소');
  } else {
    alert('모르겠어');
  }
} else if (userName == '' || userName == null) {
  alert('취소');
} else {
  alert('모르겠어');
} */
