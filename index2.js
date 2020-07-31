const { nextISSTimesForMyLocation } = require("./iss_promised");

const { convertPrint } = require("./iss");

nextISSTimesForMyLocation()
  .then((timeArray) => {
    convertPrint(timeArray);
  })
  .catch((error) => {
    console.log("It's not working!", error.message);
  });