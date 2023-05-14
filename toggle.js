const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	// localStorage.setItem
	document.body.classList.toggle('dark');
});