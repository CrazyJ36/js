const requireMyClass = require('./other-class.js');
const myClass = new requireMyClass.MyClass();

console.log('Running code from main app.')
myClass.myMain();