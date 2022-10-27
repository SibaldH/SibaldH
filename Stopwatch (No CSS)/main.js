$(document).ready(function () {
    const appendTenMillis = document.getElementById("tenMillis");
    const appendSeconds = document.getElementById("seconds");
    const startStopButton = document.getElementById("startStop");
    const resetButton = document.getElementById("reset");

    let Interval;
    let on = false;

    let seconds = "00";
    let tenMillis = "00";

    $(startStopButton).on("click", function () {
        on = !on;
        if(on){
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
            $(startStopButton).html("Stop");
        } else {
            clearInterval(Interval);
            startStopButton.innerHTML = "Start"
        }
    });

    $(resetButton).on("click", function () {
        clearInterval(Interval);
        on = false;
        seconds = "00";
        tenMillis = "00";
        startStopButton.innerHTML = "Start";
        appendSeconds.innerHTML = seconds;
        appendTenMillis.innerHTML = tenMillis;
    });


    function startTimer(){
        tenMillis++;

        if(tenMillis <= 9){
            appendTenMillis.innerHTML = "0" + tenMillis;
        }
        if(tenMillis > 9){
            appendTenMillis.innerHTML = tenMillis;
        }
        if(tenMillis > 99){
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tenMillis = "0";
            appendTenMillis.innerHTML = "00";
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
});