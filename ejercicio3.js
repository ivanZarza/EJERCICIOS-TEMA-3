
function suma (a, b) {
  return a + b
}
console.log('resultado suma 2 + 3:', suma(2, 3))
// resultado suma 2 + 3: 5

class Car {
  constructor (numDoors) {
    this.numDoors = numDoors
  }

  addDoor () {
    this.numDoors = this.numDoors + 1
  }
}

var panda = new Car(4)

console.log(`mi coche tiene ${panda.numDoors} puertas`)
// mi coche tiene 4 puertas

panda.addDoor()

console.log(`mi coche tiene ${panda.numDoors} puertas`)
// mi coche tiene 5 puertas
