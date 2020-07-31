const request = require("request");

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (err, response, body) => {
    if (err) {
      callback(err);
    } else {
      callback(null, JSON.parse(body).ip);
    }
    //if (response) console.log(response.statusCode);
  });
};

module.exports = {
  fetchMyIP,
};