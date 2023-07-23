/* console.log('hellowrod form main.js') */

/*  Variables */
/* // with let onece initalized it can be reassigned
let age = 32
console.log(age)
// const onec initalized can't reassigned
const salary = 8000
console.log(salary)

// let sum  

let sum = 0 
sum = 8000
console.log(sum) */

/* Primative DATA TYPE */
/* STRING DATA TYPE*/

/* // stign can defined with single quotes
const name = 'Mohammad'
// string can be defined with double quotes
const luanguege = "JS"
// string can be defined with back tag
const channal = `Galuxy`

/* NUMBER DATA TYPE */
// number can be defiend with integer
/* const total = 4
//number can be defiend with float 
const PI = 3.14  */

/* BOOLEAM DATA TYPE ‌*/
// boolean cant be defiend with true and false
/* const isPrimaryNumber = true
const isNumber = false */


/* UNDIFINED DATA TYPE */
// undifined reprsent value which is not assinged 

// if a variable decleard with no value its value is undefined
/* let result 
// if we console result it vlue will be undefined
console.log(result)
// and also we can use undefined explicitly 
const res = undefined */


/* null data type */
// is a spacil data type in js that repersent unknown data

/* const data = null */

/* NON PRIMATEV DATA TYPE */
// OBJCT
/* const person = {
    'firstName': 'Mohammad',
    'lastName': 'Amin',
    'age': 30
}
 */
// inside cruly braces we have property which is called key also and value 
// property can be string and symbol data type 
// value can be any kind of data type

/* // to access value inside object we used name of object followed by dot folewe property or key value
console.log(person.firstName)

// other nonprimitive data type is Arry
const oddNumbers = [1,3,5,7,9]
console.log(oddNumbers[0]) //output = 1
console.log(oddNumbers[2]) //output = 5
console.log(oddNumbers[1]) //output = 3


let a = 2
a = 'Rafi'
a = true 
console.log(a) */


// //  Operators 
// //	Assignment operators
// let x = 10
// let y = 5
// //	Arithmetic Operators
// console.log(x + y)// output = 15
// console.log(x - y)// output = 5
// console.log(x * y)// output = 50
// console.log(x / y)// output = 2
// console.log(x % y)// output = 0
// console.log(++x)// output = 11
// console.log(++y)// output = 6
// console.log(--x)// output = 9
// console.log(--y)// output = 4
// //	Comparison Operators
// console.log(x == y)// output = false
// console.log(x != y)// output = true
// console.log(x === y)// output = false
// console.log(x !== y)// output = true
// console.log(x < y)// output = false
// console.log(x <= y)// output = false
// console.log(x > y)// output = true
// console.log(x >= y)// output = true
// console.log(x !== y)// output = true
// //	Logical Operators
// const isValidNumberand = x > 8 && 8 > y // && is read and
// console.log(isValidNumberand)// output = true
// const isValidNumberor = x > 20 || 8 > y // || is read or
// console.log(isValidNumberor)// output = true
// const isValidNumbernot = true // ! is read not
// console.log(!isValidNumbernot)// output = false
// //	String Operators
// console.log('Mohammad','RAfi')//output = Mohammad Rafi
// console.log('Mohammad'+'RAfi')//output = MohammadRafi
// console.log('Mohammad '+'RAfi')//output = Mohammad Rafi


// //	Other Operators
 
// const isEvenmodule = 10 % 2 === 0 ? 'number is even' : 'number is odd'// this operete beased condition
// console.log(isEvenmodule)// output = number is even

// const isEvendivide = 10 / 2 === 0 ? 'number is even' : 'number is odd'// this operete beased condition
// console.log(isEvendivide)// output = number is even
 
//Type conversion

// 	Implicit conversion 

// console.log(2 + '3') // output is 23
// console.log(true + '3') // output is true3
// console.log(2 - '4') // output is -2
// console.log('2' - '4')// output is -2
// console.log('2' * '4')// output is 8
// console.log('2' / '4')//output is  0.5
// console.log('4' / '2')// output is 2
// console.log('Jan' - 'Kan') // output is NaN
// console.log('5' - true)//output is 4
// console.log('5' - false) //output is 5
// console.log('5' - null) //output is 5
// console.log(5 + undefined)// output is NaN
// console.log('5' + undefined)// output is 5undefined
// console.log('5' - undefined) // output is NaN

// Explicit conversion

// console.log(Number('5'))//output is 5
// console.log(Number(false))//output is 0
// console.log(Number(true)) //output is 1
// console.log(Number(null))//output is 0
// console.log(Number(undefined)) //output is NaN
// console.log(Number('')) //output is 0

// console.log(parseInt('5'))//output is 5
// console.log(parseInt(false))//output is NaN
// console.log(parseInt(true)) //output is NaN
// console.log(parseInt(null))//output is NaN
// console.log(parseInt(undefined)) //output is NaN
// console.log(parseInt('')) //output is NaN

// console.log(parseFloat('5.5'))//output is 5.5
// console.log(parseFloat(false))//output is NaN
// console.log(parseFloat(true)) //output is NaN
// console.log(parseFloat(null))//output is NaN
// console.log(parseFloat(undefined)) //output is NaN
// console.log(parseFloat('')) //output is NaN

// console.log(String(500))//output is 500 as string
// console.log(String(false))//output is fakse as string
// console.log(String(true)) //output is true as a string
// console.log(String(null))//output is null as a string
// console.log(String(undefined)) //output is undefined as a string
// console.log(String('')) //output is empty string

// console.log((500).toString())//output is 500 as string
// console.log((false).toString())//output is fakse as string
// console.log((true).toString()) //output is true as a string
// //console.log((null).toString())//.tostring is not working with null type
// //console.log((undefined).toString()) //.tostring is not working with undefined type 
// console.log(('').toString()) //output is empty string

// console.log(Boolean(10))//output is true
// console.log(Boolean(false))//output is false
// console.log(Boolean(true)) //output is true 
// console.log(Boolean(null))//output is false
// console.log(Boolean(undefined)) //output is false
// console.log(Boolean('')) //output is false
// console.log(Boolean('Ahmmad'))// outp is true

// Equallty

const var1 = 'test'
const var2 = 'test'

console.log(var1 == var2)//output is true
console.log(var1 === var2)//output is true

const var3 = 10
const var4 = '10'

console.log(var3 == var4)// output is true
console.log(var3 === var4)//output is false
