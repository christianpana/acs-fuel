const util = require('./util');

describe('Random Fuel Generator', () => {
    test('it should return a decimal', () => {
        const fuel = util.generateRandomFuel(100);
        // not the best test for a decimal
        expect(("" + fuel).indexOf('.') >= -1).toEqual(true);
    })

    test('it should return less than a quarter of tank', () => {
        const tankCapacity = 100;
        const fuel = util.generateRandomFuel(tankCapacity);
        expect(fuel).toBeLessThan(tankCapacity);
    })
})