// 📚 default parameter

// 함수의 매개변수는 undefined가 기본값이다.
// default parameter는 undefined를 다른 기본값으로 설정한 것을 말한다.

// parameter b에 10을 할당하면 b에 아무값도 전달 되지 않아도 자동으로 10을 입력
// b= 2 * a 이런식으로 연산도 가능, 함수도 입력 가능

function defaultParam(a, b = 10){
  console.log(a + b);
}
defaultParam(1, 2); // 3
defaultParam(1);    // 11


// 📚 arguments

// arguments 객체는 함수에 전달된 인수에 해당하는 배열 형태입니다.
// 배열 형태란 arguments가 length 속성과 index를 가지고 있지만 forEach, map과 같은 내장 메서드는 가지고 있지 않습니다.
// arguments는 모든 파라미터를 []안에 넣은 변수라고 생각하면 쉽다.
// arguments는 옛날 문법이므로 rest parameter 사용을 지양한다.

function argu(a, b, c){
  console.log(arguments) // [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  console.log(arguments[0]) // 1
  console.log(arguments[1]) // 2
}
argu(1,2,3);  // 1,2,3을 모두 담고있는 array와 유사한 자료형

// 입력한 parameter를 전부 콘솔창에 출력해주는 함수
function paramPrint(a,b,c){
  for(let i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
}
paramPrint(2,3,4); // 2,3,4


// 📚 rest parameters
// arguments는 모든 parameter를 담지만 rest parameters는 특정 parameter만 담을 수 있다.
// arguments는 처음에 parameter 개수를 선언하지만 rest는 미리 선언하지 않아도 된다.
// arguments 객체는 실제 배열이 아니지만, rest parameters는 Array instance이다.
// rest prameters는 남아있는 모든 인자를 하나의 배열에 담는다.
// parameter를 모두 array로 감싼다.

// 사용법 
// 파라미터자리에 "...rest"
// rest 파라미터는 항상 마지막에 쓴다 (...rest, a)는 안된다.
// 한번만 쓸 수 있다.
// 함수 parameter 자리에 ...이 붙으면 rest parameters이다.

function restParam(a,b, ...rest){
  console.log(rest)
}
restParam(1,2,3,4,5,6,7); // [3,4,5,6,7]