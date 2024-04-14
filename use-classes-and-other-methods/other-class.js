class MyClass {
    myMain() {
        console.log('Running code from other class.')
    }
}
module.exports = { MyClass, } // important.

// or to export one function:
/*  
module.exports = function() {
    // do stuff.
}
*/