interface LabelledValue {
    label: string;
}

function printLabel(labelledObj:LabelledValue){
    console.log( labelledObj.label);
}

let obj = {size:10, label: "Hello World"}

printLabel(obj)

//Optional Properties
interface SquareConfig {
    color? :string;
    width: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
   let newSquare = {color:"white", area:100};
    if (config.color){
        newSquare.color = config.color;
    }

    if (config.width){
        newSquare.area = config.width*config.width
    }

    return newSquare;
}


let newSquare = createSquare({color:"Red", width:10});

console.log("Color:" + newSquare.color + " "+"Area:" + newSquare.area );

//Function types
// To describe a function type with an interface, we give the interface a call signature

interface SearchFunc{
    (source: string, subString: string):boolean;
}

let mySearch : SearchFunc;
mySearch = function(src:string, sub: string):boolean{
    let result = src.search(sub);
    return result >-1;
}

console.log(mySearch("Hello World", "world"));


//Indexable Types
// We can describe types that we can "index into" like a[10] or ageMap["daniel"]
interface StringArray{
    [index:number]:string;
}

let myArray : StringArray;
myArray=["Hello","World"];
let myString:string = myArray[0]

console.log(myString);

//Class Types
//One of the most common uses of the interfaces that explicitly enforcing that a class meets a particular contract is also possible in TypeScript
//You can describe methods in an interface that are implemented  in the class
interface ClockInterface {
    currentTime: Date;
    setTime(d:Date);
}

class Clock implements ClockInterface{
    currentTime :Date;
    setTime(d:Date){
        this.currentTime = d;
    }

    constructor(h:number, m:number){}
}
