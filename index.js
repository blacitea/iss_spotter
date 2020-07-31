const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

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

let cood = {
  "latitude": 49.26030,
  "longitude": -123.14600
};

fetchISSFlyOverTimes(cood, (error, time) => {
  if (error) {
    console.log("It didn't work:", error);
    return;
  }
  console.log("It worked! ISS flies over at time:", time);
});
