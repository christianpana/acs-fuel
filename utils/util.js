const Car = require('../services/Car');

const generateRandomFuel = (tankCapacity) => {
    const maxAvailableFuel = tankCapacity * 0.25;
    const availableFuel = (Math.random() * maxAvailableFuel);
    return (Math.floor(availableFuel * 100) / 100) + 0.01;
};

const generateRandomCar = (carTypes) => {
    if (!Array.isArray(carTypes)) {
        throw new Error('Invalid parameter, expected an array');
    }

    if (carTypes.length === 0) {
        throw new Error('Empty array')
    }

    const index = Math.floor((Math.random() * carTypes.length));
    const randomCarType = carTypes[index];

    return {
        type: randomCarType.type,
        fuelType: getRandomFuelType(randomCarType.fuelTypes),
        tankCapacity: randomCarType.tankCapacity,
        fuel: generateRandomFuel(randomCarType.tankCapacity),
    }
};

const getRandomFuelType = (fuelTypes) => {
    if (!Array.isArray(fuelTypes)) {
        throw new Error('Invalid parameter, expected an array');
    }

    if (fuelTypes.length === 0) {
        throw new Error('Empty array')
    }

    return fuelTypes[Math.floor(Math.random() * fuelTypes.length)];
};

const populateForecourt = (forecourt, carTypes, vehicleCreationTime) => {
    // initiate
    while (!forecourt.isFull()) {
        const randomCar = new Car(generateRandomCar(carTypes));
        forecourt.addCar(randomCar);
    }

    // keep adding cars
    setInterval(() => {
        if (!forecourt.isFull()) {
            const randomCar = new Car(generateRandomCar(carTypes));
            forecourt.addCar(randomCar);
        }
    }, vehicleCreationTime);
}

module.exports = {
    generateRandomFuel: generateRandomFuel,
    populateForecourt: populateForecourt
};