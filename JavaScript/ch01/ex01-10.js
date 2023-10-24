var stack = [];
// 100, 200, 300 저장
// stack.unshift(); 거꾸로 담고 -> 성능상 push가 낫다
stack.push(100);
stack.push(200);
stack.push(300);
// 300, 200, 100 출력
// stack.shift() 가능
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

var queue = [];
// 100, 200, 300 저장
// queue.unshift(); 거꾸로 담고
queue.push(100);
queue.push(200);
queue.push(300);
// 100, 200, 300 출력
// queue.pop() 가능
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

// 비어있어야 함
console.log(stack, queue);
