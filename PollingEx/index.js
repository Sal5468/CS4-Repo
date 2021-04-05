//Copy this code to a file named pollingEx.js.  Bring up a command prompt and go to the
//folder with this file and type node pollingEx.js
//You will see the function polling get called once a second over and over again.

polling();

function polling()
{
  // your code goes here
  console.log("This is your code");

  let numMilliSeconds = 1000;   // 1000 milliseconds = 1 second
  setTimeout(polling, numMilliSeconds);//recall this function after this number of miliseconds.
}//fakes a way for server to initate sending server info to the client
