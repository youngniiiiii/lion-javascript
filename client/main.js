import { getNode, insertLast, tiger, xhrPromise } from './lib/index.js';

// xhr.get(주소넣고);
// .then 성공하면 여기 실행
// .catch 실패하면 여기 실행
// 이렇게 만들고 싶어   => 콜백이 불편해서 나온게 Promise
// const data = await tiger.get('https://jsonplaceholder.typicode.com/users');
// console.log(data);

const URL = 'https://jsonplaceholder.typicode.com/users';

// 1.타이거함수 사용해서 유저데이타 가져오기
// 2.함수안으로넣기 유저리스트를 렌더해주는 함수 어웨잇은 함수안에서 쓸때는 어싱크를 써야해 !! 중요
// 3.userData 랜더링해주세요
//   - html template 만든다 (크리에이트...)
//   - userData 넘겨주기.
//   - user 정보 렌더링 (insertLast)
//4.함수 분리 - 생성과 랜더

async function randerUserList() {
  //2

  const response = await tiger.get(URL); //1
  const userData = response.data; //tiger에서 미리 await을 해줘서 여기서 리스폰 앞에 안붙혀도 된다. 1
  // console.log(userData);

  userData.forEach((item) => {
    //각각아이템 뿌려주기위해 forEach돌리기 2-2
    console.log(item);
    const template = `
    <article class="user-card" data-index="user-${item.id}">
      <h3 class="user-name">${item.name}</h3>
      <div class="user-resouce-info">
        <div>
          <a class="user-email" href="mailto:${item.email}">${item.email}</a>
        </div>
        <div>
          <a class="user-website" href="http://${item.website}" target="_blank" rel="noopener noreferer">${item.website}</a>
        </div>
      </div>
      <button class="delete">삭제</button>
    </article>
  `;

    const list = getNode('.user-card-inner');
    insertLast(list, template);
  });
}

randerUserList();
