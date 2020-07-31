const { fetchMyIP } = require("./iss");

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */


fetchMyIP((err, ip) => {
  if (err) {
    console.log("It didn't work:", err);
    return;
  }
  console.log("It worked! Returned IP:", ip);
});
