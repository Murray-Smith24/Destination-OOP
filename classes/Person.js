const Bag = require("./Bag");

class Person extends Bag{
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
        this.bags = [];
    }
    addBag(bag) {
        this.bags.push(bag);
    }
    getBags() {
        return this.bags;
    }
}


module.exports = Person;