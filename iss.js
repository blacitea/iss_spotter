const request = require("request");

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (err, response, body) => {
    if (err) {
      callback(err);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Reponse: ${body}`;
      callback(Error(msg), null);
      return;
    }
    callback(null, JSON.parse(body).ip);
  });
};

const fetchCoordsByIP = function (ip, callback) {
  let requestURL = "https://ipvigilante.com/" + ip;
  request(requestURL, (err, response, body) => {
    if (err) {
      callback(err);
      return;
    }
    const { latitude, longitude } = JSON.parse(body).data;
    const data = { latitude, longitude, };
    callback(null, data);
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
};