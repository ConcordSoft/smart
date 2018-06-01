var screen = $(window).width();
console.log(screen);
if (screen > 768) {
	function Smooth () {
		this.$container = document.querySelector('.main');
		this.$placeholder = document.createElement('div');
	}

	Smooth.prototype.init = function () {
		var instance = this;

		setContainer.call(instance);
		setPlaceholder.call(instance);
		bindEvents.call(instance);
	}

	function bindEvents () {
		window.addEventListener('scroll', handleScroll.bind(this), false);
	}

	function setContainer () {
		var style = this.$container.style;

		style.position = 'fixed';
		style.width = '100%';
		style.top = '0';
		style.left = '0';
		style.transition = '1s ease-out';
	}

	function setPlaceholder () {
		var instance = this,
			$container = instance.$container,
			$placeholder = instance.$placeholder;

		$placeholder.setAttribute('class', 'levit-smooth');
		$placeholder.style.height = $container.scrollHeight + 'px';
		document.body.insertBefore($placeholder, $container);
	}

	function handleScroll () {
		this.$container.style.transform = 'translateZ(0) translateY(' + (window.scrollY * (- 1)) + 'px)';
	}

	var smooth = new Smooth();
	smooth.init();

}