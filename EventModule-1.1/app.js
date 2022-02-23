const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("tutorial", (num1, num2) => {
  console.log(num1 + num2);
});

eventEmitter.emit("tutorial", 1, 2);

class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let alp = new Person("Alp");
let kaya = new Person("Kaya");

kaya.on('name', () => {
    console.log("My name is " + kaya.name);
  });

alp.on('name', () => {
  console.log("My name is " + alp.name);
});

alp.emit('name');
kaya.emit('name');
