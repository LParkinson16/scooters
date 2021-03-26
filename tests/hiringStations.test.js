const HiringStations = require('/.HiringStations');

describe('Hiring station test', ()=>{
    test('Creating a location/inventory', ()=>{



        //new instance of location
        let newStat = new HiringStations('locationOne', 'scooterOne');

        inventory.push(hiredScooter);



        expect(newStat.location).toEqual('locationOne');
        expect(newStat.inventory).toEqual('ScooterOne')


    })
})