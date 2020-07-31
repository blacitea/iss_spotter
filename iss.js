const request = require("request");

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (err, response, body) => {
    if (err) {
      callback(err);
      return;
    }
    if (response.statusCode !== 200) {
      const msgIP = `Status Code ${response.statusCode} when fetching IP. Reponse: ${body}`;
      callback(Error(msgIP), null);
      return;
    }
    callback(null, JSON.parse(body).ip);
  });
};

const fetchCoordsByIP = function (ip, callback) {
  //let requestURL = "https://ipvigilante.com/" + ip;
  request(`https://ipvigilante.com/${ip}`, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (response.statusCode !== 200) {
      const msgCoord = `Status Code ${response.statusCode} when fetching coordinates. Reponse: ${body}`;
      callback(msgCoord, null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;

    callback(null, { latitude, longitude, });
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
};