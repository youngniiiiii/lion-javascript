/* global gsap */

export const shake = gsap.to('form', {
  duration: 0.1,
  x: -10,
  repeat: 5,
  yoyo: true,
  clearProp: 'x',
  paused: true, // 일시정지 된다. 이게없으면 처음에 무조건 재생이 된다.
});

//shake.restart() 이렇게 사용
