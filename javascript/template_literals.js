//  template literals(string)
//  backtick/backquote을 이용하여 문자열을 나타내는 방법

//  bakctick 문자열의 장점
//  1. 엔터키 사용 가능
let enter = `<div>
              </div>`
//  2. 중간 중간 변수를 넣기 쉬움
let fruit = 'apple';
let insert_fruit = `${fruit}는 맛있습니다.`
console.log(insert_fruit); // 사과는 맛있습니다.

//  tagged literals
//  함수 뒤에 backtick을 붙여서 사용 가능
//  ${}를 기준으로 `문자`를 해체할 수 있음
//  문자순서를 변경하거나 제거하거나 위치를 옮김
//  파라미터1: 문자들을 Array로 바꿔줌
//  파라미터2: ${변수}
//  파라미터3,4,...: ${변수}가 여러개일 때
let age = 30;

function tag(Letters, variable){
  console.log(Letters);    // ['저는 ', '입니다']
  console.log(variable);   // 30
  console.log(Letters[1]); // 입니다
}
tag`저는 ${age}입니다`