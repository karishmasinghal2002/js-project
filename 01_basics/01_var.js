// practice code (examples)

const accountid = 144553
let accountemail = "karishma@gmail.com"
var accountpwd = "12345"
accountcity = "jaipur"

accountemail = "2610ks@gmai.com"
accountpwd = "020202"
accountcity = "delhi "
// accountid = 2
console.log(accountid);
console.table([accountid, accountemail, accountpwd, accountcity]) //to print multiple variables

let score=33
console.log(typeof score);

// prefer not to use because of issue in block scope and functional scope

let Score = "33" //string
console.log(typeof Score);

let valueInNumber = Number(Score)
console.log(typeof valueInNumber); 
console.log(valueInNumber); //"33" =>33, "33abc"=>nan, true=>1

let age=null
console.log(typeof age);

let name=undefined
console.log(typeof name);

let login=1
let boolean=Boolean(login)
console.log(boolean); //1=>true, 0=>false

let int=""
let bol=Boolean(int)
console.log(bol); //""=>false

let some=33
let string=String(some)
console.log(string);
console.log(typeof string);
<<<<<<< HEAD

// alert (3+3) not work because we are using node js not browser
=======

// alert (3+3) not work because we are using node js not browser

//  operations

let value=3
let negvalue=-value
console.log(value);
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);
console.log(2**2);

let str1="hello"
let str2=" karishma"
let str3=str1 + str2
console.log(str3);

let counter=2
++counter
console.log(counter);

// primitive
// 7types: string,number,boolean,null,undefined,symbol,bigint

// non primitive or reference type
// array,objects,functions

const id=Symbol('123') //how to define symbol
const acc=Symbol('123')
console.log(id===acc);

const num=12355464477878984646565n // to make it bigint we write n in the end

const array=["karishma", "ashwini", "abhishek"] //array is always written in [] brackets

let obj={ //we can also store object in a variable
    name:"karishma", // objects are written in{} brackets
    age:22
}

const my=function () { //storing a function in a variable
    console.log("hello  world"); //definition of a function
}

let names="aditya"
let another=names
another="karishma"
console.log(names);
console.log(another);

let one={
    email:"abc@gmail.com"
}

let two=one
two.email="xcv@gmail.com"

console.log(one.email);
console.log(two.email);
>>>>>>> 718863dcc7b34d6a1718826aff753712d6f95b76