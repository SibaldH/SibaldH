$(document).ready(function () {
    let r = 0;
    let g = 0;
    let b = 0;

	$('button').click(function (e) {
        update();
	});

	function getRandomRGB() {
		r = Math.floor(Math.random() * 256);
		g = Math.floor(Math.random() * 256);
		b = Math.floor(Math.random() * 256);
	}

	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? '0' + hex : hex;
	}

	function rgb2hex() {
		return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

    function update() {
		getRandomRGB();
        $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
		$('#first').html(`Hex Value: ${rgb2hex()}`);
		$('#second').html(`RGB value: ${r}, ${g}, ${b}`);
    }

    update();
});
