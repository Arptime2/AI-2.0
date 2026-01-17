AI 2.0



So i will need to initialize a flow
Then be able to start the clock and in clock on every cycle: (event listener button)
 (- Get input and output from html elements or something)
 - Update Age of each node
 - Update scores (get output and compare with input for scoring)
 - from scores, update chances
 - delete/add new nodes
 - reroll the connections and letters

 - - Test everything here

 ------- I also need to make it so that -2 and -1 wont roll letters abd wont filter or apply the NALL

 - Flow through nodes (get input)



 --------------------- I still have to make node -1 and -2 to handle all their special cases



I will have to define a way to use the current letter/connection to update the chances with the score(s) and also check if a node got deleted or created (or rathe make it so that gets automatically added as an own object to the array of objects and gets initialized with the correct amount of array positions and all other nodes arrays also get updated to that more or less position)




The clock will execute a function each cycle that is in it run async and the clock will be async more or less globally active



How to implement the global clock (always only one will be needed)?????????





So i still have to:
- Do reroll letters function
- Do manage nodes function
- check and fix and exclude -1 nd -2 for chances in update chances for connections  -----Done

-> limit -2 and remove -1

Then test