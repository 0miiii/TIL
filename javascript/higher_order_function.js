// ęł ě°¨ í¨ě

// đ filter í¨ě

// filter í¨ěëĽź ëëľ íí
function filterCallback(func, arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(func(arr[i])) {
      newArr.push((arr[i]))
    }
  }
  return newArr;
}
// filter í¨ěě ě íí ě ě
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

// đ map í¨ě

function mapCallback(func, arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}