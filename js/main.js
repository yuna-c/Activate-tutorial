const main = document.querySelector('main'); //메인 찾기
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

// console.log(boxs);
// console.log(btns);

// 버튼 클릭 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		/* 
    console.log(e);
		console.log('currentTarget', e.currentTarget);
		console.log('target', e.target); 
    */
		// e.currentTarget : js이벤트 구문에 연결되어 있는 선택, 클릭한 자기 자신의 요소
		// e.target : 실제 화면상에서 이벤트가 발생한 대상 선택, 동적 이벤트 요소 발생 시킬 때 사용
		// 만약 연결되어 있는 선택자가 a의 링크이동처럼 특정 기능이 있는 요소면 해당기능 막아야 될 필요있음 (링크기능 막고 스크립트 실행 시킴)
		e.preventDefault();
		if (/*btns[idx]*/ e.currentTarget.classList.contains('on')) return;
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

function activation(arr, idx) {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}
