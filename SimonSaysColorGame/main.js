$(document).ready(function () {
    console.log("ready");

    let order = [];
    let playerOrder = [];
    let flash;
    let turn;
    let good;
    let compTurn;
    let intervalId;
    let strict = false;
    let noise = true;
    let power = false;
    let win = false;
    let speed = 800;
    let roundsToWin = 10;

    const greenButton = document.getElementById("topLeft");
    const redButton = document.getElementById("topRight");
    const yellowButton = document.getElementById("bottomLeft");
    const blueButton = document.getElementById("bottomRight");

    const turnCounter = document.getElementById("turn");
    const startButton = document.getElementById("start");
    const powerButton = document.getElementById("power");
    const strictButton = document.getElementById("strict");
    
    
    $(greenButton).on("click", function () {
        if(power){
            playerOrder.push(1);
            checkCorrect();
            greenPressed();
            if(!win){
                setTimeout(() => {
                    clearColor();
                }, 300);
            }
        }
    });
    $(redButton).on("click", function () {
        if(power){
            playerOrder.push(2);
            checkCorrect();
            redPressed();
            if(!win){
                setTimeout(() => {
                    clearColor();
                }, 300);
            }
        }
    });
    $(yellowButton).on("click", function () {
        console.log()
        if(power){
            playerOrder.push(3);
            checkCorrect();
            yellowPressed();
            if(!win){
                setTimeout(() => {
                    clearColor();
                }, 300);
            }
        }
    });
    $(blueButton).on("click", function () {
        if(power){
            playerOrder.push(4);
            checkCorrect();
            bluePressed();
            if(!win){
                setTimeout(() => {
                    clearColor();
                }, 300);
            }
        }
    });

    $(strictButton).on("click", function () {
        strict = strictButton.checked;
    });
    
    $(powerButton).on("click", function () {
        power = powerButton.checked;
        if(power){
            turnCounter.innerHTML = "-";
        } else {
            turnCounter.innerHTML = "";
            clearColor();
            clearInterval(intervalId);
        }
    });

    $(startButton).on("click", function () {
        if(power || win) {
            play();
        }
    });
    
    function checkCorrect(){
        if(playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) 
            good = false;

        if(playerOrder.length == roundsToWin && good){
            winGame();
        }

        if(!good){
            flashColor();
            turnCounter.innerHTML = "NO!";
            setTimeout(() => {
                turnCounter.innerHTML = turn;
                clearColor();

                if(strict){
                    play();
                } else {
                    compTurn = true;
                    flash = 0;
                    playerOrder = [];
                    good = true;
                    intervalId = setInterval(gameTurn, speed);
                }
            }, 800)
            noise = false;
        }

        if(turn == playerOrder.length && good && !win){
            turn++;
            playerOrder = [];
            compTurn = true;
            flash = 0;
            turnCounter.innerHTML = turn;
            intervalId = setInterval(gameTurn, speed);
        }
    }

    function winGame(){
        flashColor();
        turnCounter.innerHTML = "WIN!";
        power = false;
        win = true;
    }
    
    function play(){
        setup();
        
        for(i = 0; i < 20; i++){
            order.push(Math.floor(Math.random() * 4) + 1)
        }
        compTurn = true;
        intervalId = setInterval(gameTurn, speed);
    }
    
    function gameTurn(){
        power = false;

        if(flash == turn){
            clearInterval(intervalId);
            clearColor();
            compTurn = false;
            power = true;
        }
        if(compTurn){
            clearColor();
            setTimeout(() => {
                if(order[flash] == 1) greenPressed();
                if(order[flash] == 2) redPressed();
                if(order[flash] == 3) yellowPressed();
                if(order[flash] == 4) bluePressed();
                flash++;
            }, (speed/4));
        }
    }
    
    function greenPressed(){
        if(noise){
            let audio = document.getElementById("clip1");
            audio.play();
        }
        noise = true;
        greenButton.style.backgroundColor = "lightGreen";
    }
    function redPressed(){
        if(noise){
            let audio = document.getElementById("clip2");
            audio.play();
        }
        noise = true;
        redButton.style.backgroundColor = "tomato";
    }
    function yellowPressed(){
        if(noise){
            let audio = document.getElementById("clip3");
            audio.play();
        }
        noise = true;
        yellowButton.style.backgroundColor = "yellow";
    }
    function bluePressed(){
        if(noise){
            let audio = document.getElementById("clip4");
            audio.play();
        }
        noise = true;
        blueButton.style.backgroundColor = "lightskyblue";
    }
    
    function clearColor(){
        greenButton.style.backgroundColor = "darkgreen";
        redButton.style.backgroundColor = "darkred";
        yellowButton.style.backgroundColor = "goldenrod";
        blueButton.style.backgroundColor = "darkblue";
    }

    function flashColor(){
        greenButton.style.backgroundColor = "lightGreen";
        redButton.style.backgroundColor = "tomato";
        yellowButton.style.backgroundColor = "yellow";
        blueButton.style.backgroundColor = "lightskyblue";
    }
    
    function setup (){
        win = false;
        order = [];
        playerOrder = [];
        flash = 0;
        intervalId = 0;
        turn = 1;
        turnCounter.innerHTML = turn;
        good = true;
    }
});