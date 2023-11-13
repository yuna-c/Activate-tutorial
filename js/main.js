const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');

console.log(h1.innerText); //"Title" 해당요소의 문자값 출력
console.log(h2.innerHTML); //"<span>Title2</span>" 해당요소 자식의 태그구조까지 문자값으로 출력
h3.innerText = '제목3'; //h3안쪽의 "Title3"이라는 문자값을 "제목3"으로 변경가능
h4.innerHTML = '<span>제목4</span>'; //h4안쪽의 구조를 태그형태로 변경가능

//DOM안에서 자주 쓰이는 유용한 property
//DOM.innerText : 해당 돔에 연결되어 있는 text값을 확인가능
//DOM.innerHTML : 해당 돔에 연결되어 있는 자식 tag구조를 확인가능
//DOM.className : 해당 돔에 연결되어 있는 모든 클래스명을 문자열로 확인가능
