/* 

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

/* callback --------------------------------------------- */

// 객체 구조 분해 할당

export function xhr({
  //매개변수가 {} 객체로 들어왔어  //통신된 결과를 가지고오고싶었어 비동기니까 콜백함수사용해서 가져오기!
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  // ={} 기본값 설정해준것뿐...
  const xhr = new XMLHttpRequest(); //생성자함수로 담아서 많이 사용한다.
  xhr.open(method, url); //open메서드 사용

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    // readystatechange 상태가 변경되는 결과를 받아와서 처리해준다.
    const { status, readyState, response } = xhr; //구조분해할당

    //readyState 현재 상태가 어떤지 알려준다 1,2,3,4
    //response는 받아진 결과물을 받기 그걸 문자로 해석해줬다
    if (readyState === 4) {
      //상태가 4 (완료)되면 해석해서 문자화해서 서버로 보내 주라는뜻.
      if (status >= 200 && status < 400) {
        //200-400사이라면 통과한것이라는 조건걸어줬음
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body)); //닫아주는 send영역
}

// method, url, onSuccess, onFail, body, headers

// xhr({
//   method:'PUT',
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result){
//     console.log( result );
//   },
//   onFail(err){
//     console.log( err );
//   },
//   body:{
//     name:'tiger'
//   },
// });

// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자 !!

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};
