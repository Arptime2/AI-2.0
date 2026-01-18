let flow = new Flow();

flow.init();

flow.manageNodes();

flow.rerollConnections();
flow.rerollLetters();


flow.updateAges();

flow.manageNodes();


document.getElementById("startClock").addEventListener("click", () => startClockInit(flow));
document.getElementById("stopClock").addEventListener("click", stopClockInit);