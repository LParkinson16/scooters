const getStations = require('/HiringStations')
const getScooters = require('/.ElecScooters')

class Users{
    constructor(name){
      this.name = name;
      this.hiredScooter =[]
      }
      renting(hiredScooter){
        this.inventory.push(hiredScooter)
      }
    }



module.exports.Users = Users

/*
class ManScooters{
    constructor(model){
        this.model = model;
    }
}
*/