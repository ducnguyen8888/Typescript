//Boolean
let isDone: boolean = false;
isDone = true;
console.log(isDone);

//Number
let decimal : number = 123456.66666;
console.log(decimal);

//String
let fullName : string = "Duc Nguyen";

let sentence : string = `Hello, this is ${fullName}`;
console.log(sentence);

//Array
let list : number[] = [1,2,3];
let char : Array<string>=['a', 'b', 'c', 'd'];
console.log(list.length);
list.forEach(function(number){ console.log(number);});
char.forEach(function(char){ console.log(char);})

//tuple
//express an array where the type of a fixed number of element is known, but need not to be the same
let temp : [string, number];
temp=["Hello World", 123];
console.log(temp[0]+ " "+ temp[1]);
temp[3]= "abc";
console.log(temp[0].substr(1,6))

//enum
//by default, enum begin numbering their members starting at 0
enum Season{Spring, Summer, Fall, Winter};
let season: String = Season[0];
console.log(season);

//Any
//Display the type of variables that we dont know when we are writing an application
let notSure : any = 4;
notSure = "This is not a number";
//notSure = false;
console.log(notSure);

//Void
//the return type of function that do not return a value
function warnUser():void{
    console.log("this is my warning message");
}

warnUser();

//Null and Undefined: by default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number
//Never: function return never must have unreachable end point
//Object: a type that represents the non primitive any thing at is not number, string, boolean, symbol, null, undefined
