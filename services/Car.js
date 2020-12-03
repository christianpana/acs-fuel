class Car {

    constructor(car) {
        this.type = car.type;
        this.fuelType = car.fuelType;
        this.tankCapacity = car.tankCapacity;
        this.availableFuel = car.fuel;
        this.addedFuel = 0;

        this.waiting = false;
        this.waitingTimer = null;
        this.waitingTime = 0;

        this.fueling = false;

        this.timer = null;
    }

    isFull() {
        return this.availableFuel === this.tankCapacity;
    }

    startFueling() {
        this.stopWaiting();
        this.fueling = true;
    }

    stopFueling() {
        this.fueling = false;
    }

    isFueling() {
        return this.fueling;
    }

    addFuel(quantity) {
        let addedFuel = 0;

        if (!this.isFull()) {
            if(this.availableFuel + quantity > this.tankCapacity) {
                addedFuel = this.tankCapacity - this.availableFuel;
                this.availableFuel = this.tankCapacity;
            } else {
                this.availableFuel += quantity;
                addedFuel += quantity;
            }

            const percentageFull = parseInt(Math.floor((this.availableFuel / this.tankCapacity) * 100));
            console.log(`${this.type} is ${percentageFull}% full`);
        }

        this.addedFuel += addedFuel;
        return addedFuel;
    }

    startWaiting() {
        this.waiting = true;

        console.log(this.type + ' started waiting');

        this.waitingTimer = setInterval(() => {
            this.waitingTime += 1;
        }, 1000);
    }

    stopWaiting() {
        this.waiting = false;
        clearInterval(this.waitingTimer);
    }

    isWaiting() {
        return this.waiting;
    }

    getAddedFuel() {
        return this.addedFuel;
    }
}

module.exports = Car;