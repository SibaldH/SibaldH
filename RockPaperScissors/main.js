$(document).ready(function () {
	let compPlay = "";
	let playerPlay = "";

	let playerScore = 0;
	let compScore = 0;

	$("#playerScore").html(playerScore);
	$("#compScore").html(compScore);

	$("#tie").hide();

	$("#rock").on("click", function () {
		playerPlay = "rock";
		getCompPlay();
		getVictor();
	});
	$("#paper").on("click", function () {
		playerPlay = "paper";
		getCompPlay();
		getVictor();
	});
	$("#scissors").on("click", function () {
		playerPlay = "scissors";
		getCompPlay();
		getVictor();
	});

	function getCompPlay() {
		var compOptions = ["rock", "paper", "scissors"];

		compPlay = compOptions[Math.floor(compOptions.length * Math.random())];
		return compPlay;
	}
	function getVictor() {
		if(playerPlay === compPlay){
			$("#tie").show();
			$("#compChose").html(compPlay);
		}
		if((playerPlay === "rock") && (compPlay === "paper")){
			compScore++;
			$("#compScore").html(compScore);
			$("#compChose").html(compPlay);
			$("#tie").hide();
		}
		if((playerPlay === "scissors") && (compPlay === "paper")){
			playerScore++;
			$("#playerScore").html(playerScore);
			$("#compChose").html(compPlay);
			$("#tie").hide();
		}
		if((playerPlay === "rock") && (compPlay === "scissors")){
			playerScore++;
			$("#playerScore").html(playerScore);
			$("#compChose").html(compPlay);
			$("#tie").hide();
		}
		if((playerPlay === "paper") && (compPlay === "scissors")){
			compScore++;
			$("#compScore").html(compScore);
			$("#compChose").html(compPlay);
			$("#tie").hide();
		}
		if((playerPlay === "scissors") && (compPlay === "rock")){
			compScore++;
			$("#compScore").html(compScore);
			$("#compChose").html(compPlay);
			$("#tie").hide();
		}
		if((playerPlay === "paper") && (compPlay === "rock")){
			playerScore++;
			$("#playerScore").html(playerScore);
			$("#compChose").html(compPlay);
			$("#tie").hide();
		}
	}
});