const User = require ('/.Users');

describe('User test', ()=>{
    test('Creating a user', ()=>{
        let rob = new User('Robert');
        expect(rob.name).toEqual('Robert')
    })
})