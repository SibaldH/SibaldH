$(document).ready(function () {
	let numSquares = 6;
	let colors = [];
	let pickedColor = 0;
    let resetTimeout = 0;

	let squares = $('.square');

	$('button').on('click', function () {
		setupMode($(this).attr('id'));
	});

	$('body').keypress(function (e) {
		if (e.keyCode == 32) {
			reset();
		}
	});

	$('#reset').on('click', function () {
		reset();
	});

	$(squares).on('click', function () {
        clearTimeout(resetTimeout);
		victor(this);
	});

	function victor(Color) {
		let clickedColor = $(Color).css('background-color');
		if (clickedColor === pickedColor) {
			$('#message').html('Correct');
			$('#reset').html('Play Again');
			changeColors(pickedColor);
            resetTimeout = setTimeout(reset, 5000);
		} else {
			$('#message').html('Try Again');
			$(Color).css('background-color', '#232323');
		}
	}

	function setupMode(mode) {
		if (mode === 'easy') {
			$('#easy').addClass('selected');
			$('#hard').removeClass('selected');

			numSquares = 3;
		}
		if (mode === 'hard') {
			$('#hard').addClass('selected');
			$('#easy').removeClass('selected');

			numSquares = 6;
		}
		reset();
	}

	function reset() {
        clearTimeout(resetTimeout);
		colors = getRandomColors(numSquares);
		pickedColor = chooseColor();
		$('#color-display').html(pickedColor);
		$('h1').css('background-color', '#2C8E99');
		$('#reset').html('New Colors');
		$('#message').html('');
		for (i = 0; i < squares.length; i++) {
			if (colors[i]) {
				$(squares[i]).show();
				$(squares[i]).css('background-color', colors[i]);
			} else {
				$(squares[i]).hide();
			}
		}
	}

	function chooseColor() {
		let random = Math.floor(Math.random() * colors.length);
		return colors[random];
	}

	function getRandomColors(num) {
		var arr = [];
		for (i = 0; i < num; i++) {
			arr.push(makeColor());
		}
		return arr;
	}

	function makeColor() {
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);
		return `rgb(${r}, ${g}, ${b})`;
	}

	function changeColors(color) {
		for (var i = 0; i < squares.length; i++) {
            $(squares[i]).css("background-color", color);
            $("h1").css("background-color", color);
		}
	}

	setupMode();
	reset();
});