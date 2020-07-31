const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation, convertPrint } = require("./iss");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


// fetchMyIP((err, ip) => {
//   if (err) {
//     console.log("It didn't work:", err);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("notIP", (error, coords) => {
//   if (error) {
//     console.log("It didn't work:", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coords);
// });

// let coord = {
//   "latitude": 49.26030,
//   "longitude": -123.14600
// };

// fetchISSFlyOverTimes(coord, (error, time) => {
//   if (error) {
//     console.log("It didn't work:", error);
//     return;
//   }
//   console.log("It worked! ISS flies over at time:  \n", time);
// });


nextISSTimesForMyLocation((error, passTimes) => {

  if (error) {
    return console.log("It didn't work!", error);
  }

  console.log(passTimes);
});


// const convertPrint = arrayOfTimes => {
//   for (let time of arrayOfTimes) {
//     console.log(`Next pass at ${Date(time.risetime).toUTCString()}`);
//   }
// };


fetchMyIP((err, ip) => {
  if (err) return `It's not working! ${err}`;
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) return `It didn't work! ${error}`;
    fetchISSFlyOverTimes(coords, (error, passTimes) => {
      if (error) return `It didn't work! ${error}`;

      convertPrint(passTimes);
    });
  });
});


// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) return `It didn't work! ${error}`;
//   console.log(passTimes);
// });