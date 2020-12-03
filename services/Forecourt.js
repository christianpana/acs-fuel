
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

        this.queue.push(car);

        console.log(`Added car "${car.type}" to forecourt`);

        return true;
    }

    getCar() {
        return this.queue.shift();
    }

    isFull() {
        return this.queue.length >= this.capacity;
    }
}

module.exports = Forecourt;