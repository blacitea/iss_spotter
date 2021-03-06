const request = require("request-promise-native");

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */


const fetchMyIP = () => {
  // the request here return a promise at run, we want the outer function to return the promise from inner to outside
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = function (body) {
  let ip = JSON.parse(body).ip;
  return request(`https://ipvigilante.com/${ip}`);
};

const fetchISSFlyOverTimes = function (body) {
  const { latitude, longitude } = JSON.parse(body).data;
  let coordsString = `lat=${latitude}&lon=${longitude}`;
  return request(`http://api.open-notify.org/iss-pass.json?${coordsString}`);
};

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };