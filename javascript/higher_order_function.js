// 고차 함수

// 🎁 filter 함수

// filter 함수를 대략 표현
function filterCallback(func, arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      newArr.push((arr[i]))
    }
  }
  return newArr;
}
// filter 함수의 정확한 정의
Array.prototype.filter = function(func) {
  const arr = this;
    const newArr = []
    for(let i = 0; i < arr.length; i++) {
      if (func(arr[i]) === true) {
        newArr.push(this[i])
      }
    }
    return newArr;
  }

// 🎁 map 함수

function mapCallback(func, arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}