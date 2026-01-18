let stop = false;
let clockTick = null;

async function startClockInit(...flows) {
    stop = false;
    clockTick = async () => startClock(flows);  // SINGLE fn created ONCE per start

    clockTick();

    console.log(flows);
}

async function startClock(...flows) {
    //Create starting population
    flow.startingPopulation(10);

    if(!stop) {
        console.log("Clock");
        {
            setTimeout(clockTick, 30);  // REUSES same fn forever


            //Do tests here later
            //And also sometimes just output matricies to see



            //First update the age of every node
            flow.updateAges(); //easy test

            //Score first
            flow.setScore(); //easy test

            //Then update the chances
            //Has to still get a different function for node -1 and -2 and also still the limiters for 0%, 100%, 70% and 30%
            flow.updateChances(); //test with different scores and chances and also for IN and OUT

            //Then delete/create nodes
            flow.manageNodes(); //fairly easy test

            //Then reroll connections and letters with chances
            flow.rerollConnections(); //test with different scores and chances and also for IN and OUT and with different nodes in general
            flow.rerollLetters(); //test with different scores and chances and also for IN and OUT and diffrent nodes in general
        }
    }
    //console.log(flows);
}

async function stopClockInit() {
    stop = true;
}
