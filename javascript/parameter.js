// ๐ default parameter

// ํจ์์ ๋งค๊ฐ๋ณ์๋ undefined๊ฐ ๊ธฐ๋ณธ๊ฐ์ด๋ค.
// default parameter๋ undefined๋ฅผ ๋ค๋ฅธ ๊ธฐ๋ณธ๊ฐ์ผ๋ก ์ค์ ํ ๊ฒ์ ๋งํ๋ค.

// parameter b์ 10์ ํ ๋นํ๋ฉด b์ ์๋ฌด๊ฐ๋ ์ ๋ฌ ๋์ง ์์๋ ์๋์ผ๋ก 10์ ์๋ ฅ
// b= 2 * a ์ด๋ฐ์์ผ๋ก ์ฐ์ฐ๋ ๊ฐ๋ฅ, ํจ์๋ ์๋ ฅ ๊ฐ๋ฅ

function defaultParam(a, b = 10){
  console.log(a + b);
}
defaultParam(1, 2); // 3
defaultParam(1);    // 11


// ๐ arguments

// arguments ๊ฐ์ฒด๋ ํจ์์ ์ ๋ฌ๋ ์ธ์์ ํด๋นํ๋ ๋ฐฐ์ด ํํ์๋๋ค.
// ๋ฐฐ์ด ํํ๋ arguments๊ฐ length ์์ฑ๊ณผ index๋ฅผ ๊ฐ์ง๊ณ  ์์ง๋ง forEach, map๊ณผ ๊ฐ์ ๋ด์ฅ ๋ฉ์๋๋ ๊ฐ์ง๊ณ  ์์ง ์์ต๋๋ค.
// arguments๋ ๋ชจ๋  ํ๋ผ๋ฏธํฐ๋ฅผ []์์ ๋ฃ์ ๋ณ์๋ผ๊ณ  ์๊ฐํ๋ฉด ์ฝ๋ค.
// arguments๋ ์๋  ๋ฌธ๋ฒ์ด๋ฏ๋ก rest parameter ์ฌ์ฉ์ ์ง์ํ๋ค.

function argu(a, b, c){
  console.log(arguments) // [1, 2, 3, callee: ฦ, Symbol(Symbol.iterator): ฦ]
  console.log(arguments[0]) // 1
  console.log(arguments[1]) // 2
}
argu(1,2,3);  // 1,2,3์ ๋ชจ๋ ๋ด๊ณ ์๋ array์ ์ ์ฌํ ์๋ฃํ

// ์๋ ฅํ parameter๋ฅผ ์ ๋ถ ์ฝ์์ฐฝ์ ์ถ๋ ฅํด์ฃผ๋ ํจ์
function paramPrint(a,b,c){
  for(let i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
}
paramPrint(2,3,4); // 2,3,4


// ๐ rest parameters
// arguments๋ ๋ชจ๋  parameter๋ฅผ ๋ด์ง๋ง rest parameters๋ ํน์  parameter๋ง ๋ด์ ์ ์๋ค.
// arguments๋ ์ฒ์์ parameter ๊ฐ์๋ฅผ ์ ์ธํ์ง๋ง rest๋ ๋ฏธ๋ฆฌ ์ ์ธํ์ง ์์๋ ๋๋ค.
// arguments ๊ฐ์ฒด๋ ์ค์  ๋ฐฐ์ด์ด ์๋์ง๋ง, rest parameters๋ Array instance์ด๋ค.
// rest prameters๋ ๋จ์์๋ ๋ชจ๋  ์ธ์๋ฅผ ํ๋์ ๋ฐฐ์ด์ ๋ด๋๋ค.
// parameter๋ฅผ ๋ชจ๋ array๋ก ๊ฐ์ผ๋ค.

// ์ฌ์ฉ๋ฒ 
// ํ๋ผ๋ฏธํฐ์๋ฆฌ์ "...rest"
// rest ํ๋ผ๋ฏธํฐ๋ ํญ์ ๋ง์ง๋ง์ ์ด๋ค (...rest, a)๋ ์๋๋ค.
// ํ๋ฒ๋ง ์ธ ์ ์๋ค.
// ํจ์ parameter ์๋ฆฌ์ ...์ด ๋ถ์ผ๋ฉด rest parameters์ด๋ค.

function restParam(a,b, ...rest){
  console.log(rest)
}
restParam(1,2,3,4,5,6,7); // [3,4,5,6,7]