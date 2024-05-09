const Person = require('./Person');

describe("Person", function() {
    test("Able to create an instance of Person", function() {
        const test = new Person("Steve", "BHX");
        expect(test).toBeInstanceOf(Person)
    })

    test("name and destination have the correct values ", function() {
        const test = new Person("Dave", "STN");
        expect(test.name).toBe("Dave");
        expect(test.destination).toBe("STN");
    })

    test("bags initialises as an empty array", function() {
        let test = new Person("Joe", "LTN");
        expect(test.bags).toBe([]);
    })

    test("addBags adds a bag to the bags array", function() {
        let test = new Person("Larry", "LGW");
        test.addBag("B0001");
        expect(test.bags).toBe(["B0001"])
    })
})
