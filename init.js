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