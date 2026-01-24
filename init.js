let flow = new Flow();

flow.init();
flow.tests();

// flow.manageNodes();

// flow.rerollConnections();
// flow.rerollLetters();
// function startTestInterval(testFunction) {
//     return setInterval(testFunction, 100);
// }

// const intervalId = startTestInterval(() => flow.tests());

// flow.updateAges();

// flow.manageNodes();


document.getElementById("startClock").addEventListener("click", () => startClockInit(flow));
document.getElementById("stopClock").addEventListener("click", stopClockInit);



//always update input text variable
let inputTextField = "";
let inputLength = 0;
let userInput = document.getElementById("userInput").addEventListener('input', function() {
    inputTextField = this.value;
    console.log(inputTextField);
});

//set output variable
let outputTextField = ""; //Set this in the OUT function in clock
let userOutput = document.getElementById("output");