const updateOnResize = () => {
	if (window.innerWidth <= 640 && window.innerWidth >= 320) {
		document.getElementById('s100').checked = true;
	} else {
		document.getElementById('s1000').checked = true;
	}
};

window.addEventListener('resize', updateOnResize);
