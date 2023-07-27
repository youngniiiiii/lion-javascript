/* global gsap */

import {
  tiger,
  delayP,
  insertLast,
  getNode as $,
  renderUserCard,
  changeColor,
  renderSpinner,
  renderEmptyCard,
  attr,
} from './lib/index.js';

// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링
//      - html template을 만든다.
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기

const userCardInner = $('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    // await delayP({ timeout: 2000 });

    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        $('.loadingSpinner').remove();
      },
    });

    // $('.loadingSpinner').remove();

    const response = await tiger.get('http://localhost:3000/users');

    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor('.user-card');

    gsap.to('.user-card', {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardInner);
  }
}

renderUserList();

/* 
- 삭제버튼누르면 삭제되게 딜리트통신을 하기
    - 버튼클릭시 해당 아티클의 아이디값을 가져와야한다.
    - 이빈트위임-button 선탣하기-클릭대상의 가장 가까운 메서든..
    - -attr() , dataset 등으로 값을 가져오기
     */

function hendleDelete(e) {
  const button = e.target.closest('button');
  const article = e.target.closest('article');

  if (!article || !button) return;
  // console.log(article);

  // console.log(article.dataset.index);

  const id = attr(article, 'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`);

  //data-index="user-${id}"
}

userCardInner.addEventListener('click', hendleDelete);
