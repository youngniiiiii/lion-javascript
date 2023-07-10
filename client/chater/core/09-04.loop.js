/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// const key = 'creator';
Object.prototype.nickName = 'youngni';
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty(key));
// console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

for (let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
const tens = [10, 100, 1000, 10000];

for (let key in tens) {
  console.log(tens[key]);
}

// for in은 객체를 순환하는 용도로 사용이 가능함
// 배열을 순환하기는 애매함  -> 이상한 값이 출력되고 , 인덱스값만 출력도 어렵고 mdn 자체에서도 for in 을 검색해보면 []에서 사용불가하대. 순서확정할수없대. 중구난방으로 내보내기도해. 적합하지않다. 굳이 배열을 반복해야한다면. 어레이 포이치나 포 오브를 권장한다.
