# Storage

변수: 새로고침하면 저장된 데이터가 리셋됩니다.

- local : key value 형태로 데이터 저장, 사이트 재접속시 유지
- session : key value 형태로 데이터 저장, 사이트 재접속시 삭제
- indexDB 구조화된 대용량 데이터 저장
- cookies 유저의 인증 정보 저장
- cache : html css js 파일 저장

# localstorage

1. key: value 형태로 저장 가능
2. 최대 5MB까지 문자만 저장 가능
3. 브라우저를 청소하지 않으면 사이트를 재접속해도 남아있음 (반영구)

- 저장: `localStorage.setItem("key", "value");`
- 출력: `localStorage.getItem("key");`
- 삭제: `localStorage.removeItem("key");`
- 수정: 저장된 데이터의 수정은 직접할 수 없고 데이터를 꺼낸 후 수정하고 다시 저장해야한다.

## array/object 저장하기

JSON 형태로 저장해야한다.

### JSON 변환없이 저장한 경우

```js
let obj = { name: "kim" };
localStorage.setItem("data", obj);

let get = localStorage.getItem("data");
console.log(get);
// [object Object] (오브젝트 자료를 문자로 강제로 변환한 경우)

localStorage.setItem("arr", [1, 2, 3]);
console.log(arr);
// '1,2,3'
```

> local storage에 저장된 값

| key  | data            |
| ---- | --------------- |
| data | [object Object] |

| key | data  |
| --- | ----- |
| arr | 1,2,3 |

### JSON 변환 후 저장

```js
let obj = { name: "kim" };
localStorage.setItem("data", JSON.stringify(obj));

let get = localStorage.getItem(data);
console.log(get); // {"name":"kim"} (객체가 아님)
console.log(JSON.parse(get));
```

> local storage에 저장된 값

| key  | data           |
| ---- | -------------- |
| data | {"name":"kim"} |

---

> 참고
> redux-persist
> 모든 state를 localStorage에 자동저장
