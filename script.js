const myBoolean = true;
let mystring = 'hello world';
let firstNumber = 20;
let secondNumber = 800;
myArray=[myBoolean, mystring]

let myObject = myArray;
let SumProperty = firstNumber+ secondNumber;

const variable1= 20;
const variable2= '40';

const result = variable1+variable1;

console.log(result); 

const myarray = [20,30,40];
console.log(myarray[2]);

const myobj = {
    property1:mystring,
    property2:myBoolean,
    property3:SumProperty
}

console.log(myobj.property3);

//how Call back func Works
function myCallback(somNumber){
    return somNumber*2;
}
function mainFunction(randomNumber, shouldCall, callback){
    let result = randomNumber;
    if (shouldCall){
        result =callback(randomNumber);
    }
    return result;
}

console.log(mainFunction(20,true,myCallback));


// RE -> Regular Expression To check for Valid Email Id 
const emailValidatorRegex = new RegExp('^.+@.+\..+$');
const unserInput = 'invalidemail@g';
const isValid = emailValidatorRegex.test();
console.log(isValid);

  