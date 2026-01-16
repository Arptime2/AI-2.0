let stop = false;
let clockTick = null;

async function startClockInit(...flows) {
    stop = false;
    clockTick = async () => startClock(flows);  // SINGLE fn created ONCE per start

    clockTick();

    console.log(flows);
}

async function startClock(...flows) {
    if(!stop) {
        console.log("Clock");
        {
            setTimeout(clockTick, 30);  // REUSES same fn forever


            //Do tests here later
            //And also sometimes just output matricies to see



            //First update the age of every node
            flow.updateAges();

            //Score first
            flow.setScore();

            //Then update the chances
            //Has to still get a different function for node -1 and -2 and also still the limiters for 0%, 100%, 70% and 30%
            flow.updateChances();

            //Then delete/create nodes
            flow.manageNodes();

            //Then reroll connections and letters with chances
            flow.rerollConnections();
            flow.rerollLetters();
        }
    }
    //console.log(flows);
}

async function stopClockInit() {
    stop = true;
}
