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