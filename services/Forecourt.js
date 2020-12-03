
class Forecourt {
    constructor(capacity) {
        if (!capacity || isNaN(capacity)) {
            throw new Error('Invalid parameter "capacity"');
        }

        this.capacity = capacity;
        this.queue = [];
    }

    addCar(car) {
        if (this.queue.length >= this.capacity) {
            return false;
        }

        car.startWaiting();
        this.queue.push(car);

        console.log(`Added car "${car.type}" to forecourt`);

        return true;
    }

    getCar() {
        const car = this.queue.shift();
        car.stopWaiting();
        return car;
    }

    isFull() {
        return this.queue.length >= this.capacity;
    }
}

module.exports = Forecourt;