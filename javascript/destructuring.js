// 구조 분해 할당(destructuring assignment)

// 🎁 배열

// 위치 맞추기!
// let [변수,변수,변수] = [값, 값, 값];
// let [변수,변수,변수] = arr;
let [a,b,c] = [2,3,4];
console.log(a); // 2
console.log(b); // 3
console.log(c); // 4

let [d,e,f = 10] = [1,2];
console.log(d); // 1
console.log(e); // 2
console.log(f); // 10

let [g,h] = [];
console.log(g); // undefined
console.log(h); // undefined


// 🎁 객체

// value를 변수에 담기
// 객체는 위치가 아닌 변수명과 key를 같게 맞추기!
let { name, age } = { name: 'kim', age: 30 }
console.log(name); // kim
console.log(age);  // 30

// 변수를 객체에 담기
// 변수명이 key가 되고 값이 value가 된다.
let math = 100;
let english = 99;
let student = {math, english}
console.log(student) // {math: 100, english: 99}

// 활용
// 함수 파라미터 만들 때도 destructuring 문법 사용가능

let obj = {name: 'kim', age: 30};
function func1(param) {
  console.log(param);      // {name: 'kim', age: 30}
  console.log(param.name); // kim
}
func1(obj);

function func2( {name, age} ) {
  console.log(name); // park
  console.log(age);  // 20
}
func2( {name: 'park', age: 20} )

function func3( [name, age] ) {
  console.log(name);
  console.log(age);
}
func3( ["jo", 10] );

// 참고
// default parameter
let { ha, ho = 31 } = { ha: 'kim' };