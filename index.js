const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, convertPrint, printPassTimes } = require("./iss");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


const nextISSTimesForMyLocation = (timeArray, callback) => {
  callback(timeArray);
};



fetchMyIP((err, ip) => {
  if (err) {
    console.log(`It's not working! ${err}`);
    return;
  } else {
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        console.log(`It didn't work! ${error}`);
        return;
      } else {
        fetchISSFlyOverTimes(coords, (error, passTimes) => {
          if (error) {
            console.log(`It didn't work! ${error}`);
            return;
          } else {
            nextISSTimesForMyLocation(passTimes, printPassTimes);
          }
        });
      }
    });
  }
});


// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) return `It didn't work! ${error}`;
//   console.log(passTimes);
// });