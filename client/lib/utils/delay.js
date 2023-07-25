import { getNode } from '../dom/getNode.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   console.log(1);
//   first.style.top = '-100px';
//   delay(() => {
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     // second.style.transform = 'rotate(360deg)';
//     delay(() => {
//       console.log(3);
//       first.style.top = '0';
//     });
//     second.style.top = '100px';
//   });
// });

function delayP() {
  return new Promise((resolve, reject) => {
    resolve('성공임');
  });
}
console.log(delayP());
