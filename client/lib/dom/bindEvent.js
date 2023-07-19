function bindEvent(node, type, handler) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  if (!/\bmouseenter|click|mousemove|mouseout|mouseover\b/g.test(type)) {
    throw new TypeError(
      'bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.'
    );
  }
  node.addEventListener(type, handler);
  return () => node.removeEventListener(type, handler);
}
// bindEvent('.first', 'click', handler);
//함수안에 함수 클로저사용
