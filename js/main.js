const main = document.querySelector('main'); //메인 찾기
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
console.log(boxs.length);
console.log(btns.length);

btns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
		//인수 콜백함수
		//직전의 모든 요소 초기화
		btns.forEach((btn) => btn.classList.remove('on'));
		//클릭한 순번에 해당하는 버튼만 활성화
		btns[idx].classList.add('on');
	});
});

// boxs.forEach((box, idx) => {
// 	box.addEventListener('click', () => {
// 		boxs.forEach((box) => box.classList.remove('on'));
// 		boxs[idx].classList.add('on');
// 	});
// });
