//Boolean
var isDone = false;
isDone = true;
console.log(isDone);
//Number
var decimal = 123456.66666;
console.log(decimal);
//String
var fullName = "Duc Nguyen";
var sentence = "Hello, this is " + fullName;
console.log(sentence);
//Array
var list = [1, 2, 3];
var char = ['a', 'b', 'c', 'd'];
console.log(list.length);
list.forEach(function (number) { console.log(number); });
char.forEach(function (char) { console.log(char); });
//tuple
//express an array where the type of a fixed number of element is known, but need not to be the same
var temp;
temp = ["Hello World", 123];
console.log(temp[0] + " " + temp[1]);
temp[3] = "abc";
console.log(temp[0].substr(1, 6));
//enum
//by default, enum begin numbering their members starting at 0
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Fall"] = 2] = "Fall";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
;
var season = Season[0];
console.log(season);
//Any
//Display the type of variables that we dont know when we are writing an application
var notSure = 4;
notSure = "This is not a number";
//notSure = false;
console.log(notSure);
//Void
//the return type of function that do not return a value
function warnUser() {
    console.log("this is my warning message");
}
warnUser();
//Null and Undefined: by default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number
//Never: function return never must have unreachable end point
//Object: a type that represents the non primitive any thing at is not number, string, boolean, symbol, null, undefined
//# sourceMappingURL=VariableDeclaration.js.map