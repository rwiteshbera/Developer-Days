// Prealoader function
var preloader = document.getElementById('loading');

setInterval(function myLoading(){
    preloader.style.display = 'none';
}, 3000);

function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput(num) {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    document.getElementById("output-value").innerText = num;
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "C") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "CE") {
            var output = getOutput().slice(0, -1);
            printOutput(output);
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output != "" || history != "") {

                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    result = Math.round(result * 1000000) / 1000000;
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var Numb = document.getElementsByClassName("Number");
for (var i = 0; i < Numb.length; i++) {
    Numb[i].addEventListener('click', function () {
        var output = getOutput();
        if (output != NaN) {
            output = output + this.id;
            if (output.length <= 16) {
                printOutput(output);
            }
        }
    })
}


// Microphone - Voice Input Functionality
var microphone = document.getElementById('mic');
microphone.onclick = function () {
    var speech = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    microphone.classList.add("record");
    speech.lang = 'en-US';
    speech.start();

    operations = {
        "plus": "+",
        "minus": "-",
        "multiply": "*",
        "into": "*",
        "multiplied": "*",
        "divide": "/",
        "divided": "/",
        "reminder": "%",
        "point": "."
    }

    speech.onresult = function (event) {
        var input = event.results[0][0].transcript;
        for (property in operations) {
            input = input.replace(property, operations[property]);
        }
        document.getElementById("output-value").innerText = input;
        setTimeout(function () {
            evaluate(input);
        }, 2500);
        microphone.classList.remove("record");
    }
}

function evaluate(input) {
    try {
        var result = eval(input);
        document.getElementById("output-value").innerText = result;
    }
    catch (e) {
        console.log(e);
        document.getElementById("output-value").innerText = "";
    }
}

