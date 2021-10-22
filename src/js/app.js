const floating = document.querySelector('.floating');
const floatingLinks = document.querySelectorAll('.floating__link');
const floatingTriggers = document.querySelectorAll('.floating__trigger');
const floatingOverlay = document.querySelectorAll('.floating-overlay');

floatingLinks.forEach((link, i) => {
	link.style.setProperty('--delay', `0.${i + 1}s`);
});

floatingTriggers.forEach((btn) => {
	btn.addEventListener('click', function () {
		floating.classList.toggle('active');
	});
});
