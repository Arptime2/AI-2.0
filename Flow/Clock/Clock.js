let stop = false;
let clockTick = null;

async function startClockInit(...flows) {
    stop = false;
    clockTick = async () => startClock(flows);  // SINGLE fn created ONCE per start



    //Create starting population
    flow.startingPopulation(10);

    clockTick();

    console.log(flows);
}

async function startClock(...flows) {
    // flow.tests();
    if(!stop) {
        console.log("Clock");
        {
            setTimeout(clockTick, 200);  // REUSES same fn forever


            //Update IN and get OUTput????
            //Set input each time ()
            //Get output each time and add it to test text
            flow.setInput();
            flow.setOutput();



            //First update the age of every node
            flow.tests();
            flow.updateAges(); //easy test ---- works
            
            //Score first
            flow.setScore(); //easy test  ----- works

            //Then update the chances
            //Has to still get a different function for node -1 and -2 and also still the limiters for 0%, 100%, 70% and 30%
            flow.updateChances(); //test with different scores and chances and also for IN and OUT

            //Then delete/create nodes
            flow.manageNodes(); //I think there is an error ther with this: ((this.connectionChances[i] == 100) || (this.connectionChances[i] == 0)) what do i actually want to check there??? connectionChances is 2D
            //flow.tests();

            //Then reroll connections and letters with chances
            flow.rerollConnections(); //test with different scores and chances and also for IN and OUT and with different nodes in general
            flow.rerollLetters(); //test with different scores and chances and also for IN and OUT and diffrent nodes in general



            //
            flow.math();
        }
    }
    //console.log(flows);
}

async function stopClockInit() {
    stop = true;
}
