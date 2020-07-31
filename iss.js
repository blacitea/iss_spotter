const request = require("request");

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request("https://api.ipify.org?format=json", (err, response, body) => {
    if (err) callback(err);
    if (response) console.log(response.statusCode);
    const data = body;
    console.log(data);
  });
};

module.exports = {
  fetchMyIP,
};