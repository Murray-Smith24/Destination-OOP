const Bag = require('./Bag');

describe("Bag", function() {
    it("Can make an instance of bag class", function() {
        const test = new Bag(10, 0)
        expect(test).toBeInstanceOf(Bag);
    })
    it("Weight and id have been assigned correctly", function() {
        const test = new Bag(15, 1)
        expect(test.weight).toBe(15);
        expect(test.id).toBe(1);
    })
    it("Owner is initialised with a value of null", function() {
        const test = new Bag(16, 2);
        expect(test.owner).toBe(null);
    })
    it("getOwner returns the owner of the bag", function() {
        const test = new Bag(9, 3);
        expect(test.getOwner()).toEqual(null)
    })
    it("assignOwner updates the owner with a person", function() {
        const test = new Bag(30, 4);
        test.assignOwner("Steve");
        expect(test.getOwner).toBe("Steve");
    })
    
})