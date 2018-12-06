function makeCounter() {
  var currentCount = 1;

  return function(num) { 
  	currentCount = num !== undefined ? num : currentCount;
    return currentCount++;
  };
}

var counter = makeCounter(); 

console.log(counter()); 
console.log(counter()); 
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
var counter2 = makeCounter();
console.log(counter2());


function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  this.waterAmount = function(amount) {
    
    if (!arguments.length) return waterAmount;

    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(1000, 500);

coffeeMachine.waterAmount(450);
console.log( coffeeMachine.waterAmount() ); 