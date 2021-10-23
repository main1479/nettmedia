const floating = document.querySelector('.floating');
const floatingLinks = document.querySelectorAll('.floating__link');
const floatingTriggers = document.querySelectorAll('.floating__trigger');
const floatingOverlay = document.querySelectorAll('.floating-overlay');
const profile = document.querySelector('.profile');

floatingLinks.forEach((link, i) => {
	link.style.setProperty('--delay', `0.${i + 1}s`);
});

floatingTriggers.forEach((btn) => {
	btn.addEventListener('click', function () {
		floating.classList.toggle('active');
	});
});

profile.addEventListener('click', (e) => {
	const body = profile.querySelector('.profile__body');
	profile.classList.toggle('active');
	if (body.style.maxHeight) {
		body.style.maxHeight = null;
	} else {
		body.style.maxHeight = body.scrollHeight + 5 + 'px';
	}
	if (e.target.closest('.profile__overlay')) body.style.maxHeight = null;
});
