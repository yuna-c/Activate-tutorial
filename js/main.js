const main = document.querySelector('main'); //메인 찾기
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');

// console.log(boxs);
// console.log(btns);

// 버튼 클릭 이벤트문
btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		// activation(btns, idx);
		// activation(boxs, idx);
		// 만약 클릭한 버튼에 class on이 있다면 return으로 함수 실행 중지
		// 만약 on이 없다면 해당 조건문 무시되면서 정상적으로 activation 함수 호출
		if (btns[idx].classList.contains('on')) return;
		[btns, boxs].forEach((el) => activation(el, idx));
	});
});

// 인수로 그룹 선택자와, 순번을 받아서
// 순번의 요소만 활성화 시켜주는 함수
function activation(arr, idx) {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}
