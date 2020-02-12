// let car = {
//   doors: 4,
//   turbo: false,
//   ride() {
//     console.log('Трум-трум, ну я поехал');
//   },
// };

// let newCar = Object.create(car);  
// newCar.model = 'mazda'
// console.dir(newCar);

// console.dir(car);
// console.log(car.isPrototypeOf(newCar));

// function Car(model, color) {
//   this.model = model;
//   this.color = color;
//   Car.prototype.ride = () => {
//     console.log('Трум-трум, ну я поехал');
//   };
// }



// let car1 = new Car('мазда', 'красный');

// car1.ride();

// console.dir(car1);

// console.dir(Car);

function Car(country, options) {
  this.country = country;
  options = options || {};
  this.color = options.color;
  this.trans = options.trans;
}

Car.prototype.ride = function() {
  console.log(this.brand + ' ' + this.model + ' поехала!');
};

Audi.prototype = Object.create(Car.prototype);

function Audi(country, options, model, type) {
  this.brand = 'Audi';
  Car.apply(this, arguments);
  this.model = model;
  this.type = type;
}

let car_q7 = new Audi('Germany', {color: 'red'}, 'Q7', 'S');

console.dir(car_q7);
