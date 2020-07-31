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

const fetchISSFlyOverTimes = function (coords, callback) {
  let coordsString = `lat=${coords.latitude}&lon=${coords.longitude}`;
  request(`http://api.open-notify.org/iss-pass.json?${coordsString}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(`Status Code ${response.statusCode} when fetching ISS fly over time. Response ${body}`, null);
      return;
    }
    callback(null, JSON.parse(body).response);
  });
};

const convertPrint = arrayOfTimes => {
  console.log(arrayOfTimes);

  for (let time of arrayOfTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    console.log(`Next pass at ${datetime.toString()} for ${time.duration} seconds.`);

    //console.log(`Next pass at ${datetime.setUTCSeconds(time.risetime)}`);
  }
}



const nextISSTimesForMyLocation = function (callback) {
  //empty for now
};
  

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
  convertPrint,
};