let flow = new Flow();

flow.init();

flow.manageNodes();

flow.rerollConnections();
flow.rerollLetters();


document.getElementById("startClock").addEventListener("click", () => startClockInit(flow));
document.getElementById("stopClock").addEventListener("click", stopClockInit);