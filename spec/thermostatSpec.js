'use strict';

describe('Thermostat', function() {
    var thermostat

    beforeEach(function() {
        thermostat = new Thermostat();
    })

    it('it has a default temp of 20', function() {
        expect(thermostat.temperature()).toEqual(20)
    })

    it('can increase the temperature', function() {
        thermostat.up(2);
        expect(thermostat.temperature()).toEqual(22)
    })

    it('can decrease the temperature', function() {
        thermostat.down(2);
        expect(thermostat.temperature()).toEqual(18)
    })
})