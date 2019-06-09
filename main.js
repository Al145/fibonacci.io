const part_1 = document.querySelector('.part_1');
const part_2 = document.querySelector('.part_2');
const part_3 = document.querySelector('.part_3');

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

function boxfib(min, max, container) {
  for (let i = min; i < max; i++) {
    const callback = document.createElement('div');
    callback.classList = 'boxes';
    callback.innerHTML = fib(i);
    container.appendChild(callback);
  }
};

boxfib(0, 4, part_1);
boxfib(4, 13, part_2);
boxfib(13, 29, part_3);