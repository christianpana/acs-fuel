const config = require('./configs/config.json');
const db = require('./services/db');
const Station = require('./services/Station');
const Forecourt = require('./services/Forecourt');
const util = require('./utils/util');

// How many cars can we have in the forecourt
const forecourtCapacity = config['forecourtCapacity'];

// How often to create a new vehicle
const vehicleCreationTime = config['vehicleCreationTime'];

(async () => {
    const carTypes = await db.getCarTypes();
    const pumps = await db.getPumps();

    // Open gas station for business
    const gasStation = new Station(pumps);
    const forecourt = new Forecourt(forecourtCapacity);

    // Add random cars to the forecourt
    util.populateForecourt(forecourt, carTypes, vehicleCreationTime);

    // Start filling up cars
    gasStation.run(forecourt);
})();