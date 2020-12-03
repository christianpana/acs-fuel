class Pump {

    constructor(pumpLane, pumpNumber, dispenseCapacity) {
        this.pumpLane = pumpLane;
        this.pumpNumber = pumpNumber;
        this.dispenseCapacity = dispenseCapacity;

        this.totalAdddedFuel = 0;
        this.totalServicedCars = 0;

        this.isFree = true;
        this.timer = null;
    }

    fuel(car) {
        if(!this.isPumpFree()) {
            console.log(`Pump lane ${this.pumpLane} / no ${this.pumpNumber} is busy`);
            return false;
        }

        this.setBusy();
        car.stopWaiting();
        car.startFueling();

        console.log(`Started fueling ${car.type} in lane ${this.pumpLane} / no ${this.pumpNumber}`);

        this.timer = setInterval(() => {
            // fuel car and return amount of fuel added
            const addedFuel = car.addFuel(this.dispenseCapacity);

            // Keep count of total added fuel
            this.totalAdddedFuel += addedFuel;

            // stop fueling
            if (car.isFull()) {
                clearInterval(this.timer);
                car.stopFueling();

                console.log(`Finished fueling ${car.type}`);
                console.log('---------------------------');

                this.totalServicedCars++;
                this.setFree();
            }

        }, 1000);
    }

    setFree() {
        this.isFree = true;

        console.log('Total added fuel: ', this.totalAdddedFuel);
        console.log('Total serviced cars: ', this.totalServicedCars);
        console.log('---------------------------');
    }

    setBusy() {
        this.isFree = false;
    }

    isPumpFree() {
        return this.isFree;
    }
}

module.exports = Pump;