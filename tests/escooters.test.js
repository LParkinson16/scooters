const HiringStations = require('/.HiringStations');

describe('scooter rental', ()=>{
    test('Creating a rental system', ()=>{
        let scoot = new HiringStations('ModelOne');


        let modelIndex = scoot.beingReturned.findIndex((element)=> element.modelName === scoot.modelName);
        expect (scoot.modelName).toEqual('modelOne')


        expect(scoot.charge).toEqual(true)
    })
})

