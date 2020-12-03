const Pump = require('./Pump');

class Station {

    constructor(pumps) {
        // this.numberOfLanes = numberOfLanes;
        // this.numberOfPumpsPerLane = numberOfPumpsPerLane;
        //
        // this.station = [];
        //
        // for (let i = 0; i < numberOfLanes; i++) {
        //     for (let j = 0; j < numberOfPumpsPerLane; j++) {
        //     this.station[]
        //     }
        // }

        const pump = pumps[0];
        this.pump = new Pump(pump['lane'], pump['no'], pump['dispenseCapacity']);

        this.timer = null;
    }

    run(forecourt) {
        this.timer = setInterval(() => {
            const pump = this.getAvailablePump();

            if (!pump) {
                return;
            }

            const car = forecourt.getCar();

            if (!car) {
                return;
            }

            // This is where the magic happens
            pump.fuel(car);

        }, 1000);
    }

    getAvailablePump() {
        if (this.pump.isPumpFree()) {
            return this.pump;
        }

        return false;
    }

}

module.exports = Station;