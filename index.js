const Car = function(color, model, dateManufactured) {
    this.color = color;
    this.model = model;
    this.dateManufactured = dateManufactured;
};

Car.prototype.getColor = function() {
    return this.color;
};
Car.prototype.getModel = function() {
    return this.model;
};
Car.prototype.CarDate = function() {
    return `This ${this.model} was manufactured in the year ${this.dateManufactured}.`
};

var firstCar = new Car('red', 'Ferrari', '2013');

console.log(firstCar);
console.log(firstCar.CarDate());