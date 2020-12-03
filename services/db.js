const carTypes = require('../configs/car-types.json');
const pumps = require('../configs/pumps.json');

module.exports.getCarTypes = () => {
    return new Promise((resolve, reject) => {
        resolve(carTypes);
    })
}

module.exports.getPumps = () => {
    return new Promise((resolve, reject) => {
        resolve(pumps);
    })
}