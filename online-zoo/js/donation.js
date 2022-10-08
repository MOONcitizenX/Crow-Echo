import { burger } from './burgerMenu.js';

let amountsList = [...document.getElementsByClassName('donation_radio')];

window.addEventListener('resize', () => {
	if (window.innerWidth > 1000) {
		amountsList = [...document.getElementsByClassName('donation_radio')];
	}
	if (window.innerWidth <= 1000 && window.innerWidth > 640) {
		amountsList = [
			...document.getElementsByClassName('donation_radio')
		].filter(
			(el) => !el.parentElement.classList.contains('s5000-container')
		);
	}
	if (window.innerWidth <= 640) {
		amountsList = [
			...document.getElementsByClassName('donation_radio')
		].filter(
			(el) =>
				!el.parentElement.classList.contains('s5000-container') &&
				!el.parentElement.classList.contains('s2000-container') &&
				!el.parentElement.classList.contains('s1000-container')
		);
	}
});

const amountInput = document.getElementById('donation_amount');

document.getElementById('s100').checked = true;
amountInput.value = '100';
amountsList.forEach((el) =>
	el.addEventListener('click', (e) => {
		amountInput.value = e.target.value;
	})
);
amountInput.addEventListener('input', () => {
	if (
		amountsList.filter((el) => el.id === `s${amountInput.value}`).length > 0
	) {
		amountsList.filter(
			(el) => el.id === `s${amountInput.value}`
		)[0].checked = true;
	} else {
		amountsList.forEach((el) => (el.checked = false));
	}
});

burger();
