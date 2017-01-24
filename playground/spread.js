var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

////////////////////////////////////////////////////
var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name, index) {
  console.log('Hi ' + name);
});
