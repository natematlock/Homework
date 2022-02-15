// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ["pepperoni", " sausage", " olives", " entropy"];

// Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings
// i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
function greetCustomer() {
    console.log(`Welcome to Every pizza place, our toppings are: ${pizzaToppings}`)
};
greetCustomer();

// Create a getPizzaOrder function that has 
// the parameters size, crust, and an indefinite amount of toppings as inputs;
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
// outputs a list with the size, crust, and toppings
function getPizzaOrder(size, crust, ...toppings){
  let message = `Order for one; ${size}, ${crust} crust pizza with `;
  for (let name of toppings) {
    message += `${name}, `
  }
  console.log(message)
  return [size, crust, toppings]
}
let pizza = getPizzaOrder("large", "regular", " pepperoni", " sausage", " olives", " entropy")

// Create a preparePizza function that
// has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
// out puts a pizza Object with appropriate key-value pairs for size, crust, and toppings
const preparePizza = ([aSize, aCrust, toppings]) => {
  console.log("Cooking Order . . .")
  return {
    size: aSize,
    crust: aCrust,
    toppings: toppings,
  }
}

preparePizza(["large", "regular", [" pepperoni", " sausage", " olives", " entropy"]])
console.log(pizza)
//Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in
const servePizza = ({pizza}) => {
  let message = `Order ready for; ${pizza}`;
  for (let name of pizza) {
    message += `${name}, `
  }
  console.log(message)
}

//Call each function and starting with preparePizza use the returned value from the previous function its input
