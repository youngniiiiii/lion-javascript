/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength:', stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter:', extractCharacter);
// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;

// 부분 문자열 추출
let slice = message.slice(8, -1);
console.log('slice:', slice);
//slice([begin[, end]])  [,end]는 생략가능을 의미
// end : -1을 지정하면 맨 마지막 스트링 제외

let subString = message.substring(1, 3);
console.log('subString:', subString);

let subStr = message.substr(1, 3);
console.log('subStr:', subStr);
//요즘잘안써 레거시야 1부터3개

// 문자열 포함 여부 확인
let indexOf = message.indexOf('p');
console.log('indexOf:', indexOf);
//값이 없으면 -1 있으면 인덱스번호

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf:', lastIndexOf);
//s 몇번째에있어 ?  뒤쪽에서부터 읽어서 마지막에있는 s 를 찾아주는것
//indexOf 했으면 2가나와

let includes = message.includes('more');
console.log('includes:', includes);
//포함여부확인 t, f 반환

let startsWith = message.startsWith('Less');
console.log('startsWith:', startsWith);
//Less를 시작으로 가지고있어? Less로 시작해? t,f반환

let endsWith = message.endsWith('more.');
console.log('endsWith:', endsWith);
//more.으로 끝나니?

let str = '     adf  daf    ';
// 앞쪽 공백 잘라내기
let trimStart = str.trimStart();
console.log('trimStart:', trimStart);

// 뒤쪽 공백 잘라내기
let trimEnd = str.trimEnd();
console.log('trimEnd:', trimEnd);

//양쪽공백 제거
let trim = str.trim();
console.log('trim:', trim);

//사이공백 제거방법
let replace = str.replace(/\s*/g, '');
console.log('replace:', replace);
//유틸 함수만들어서 사용
function normailText(string) {
  return str.replace(/\s*/g, '');
}
normailText(str);

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat:', repeat);

// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase:', toLowerCase);
let toUpperCase = message.toUpperCase();
console.log('toUpperCase:', toUpperCase);

// 텍스트 이름 변환 유틸리티 함수만들기
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );
}
toCamelCase(message);

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
toPascalCase(message);
