/*var el_up = document.getElementById("GFG_UP"); 
            var el_down = document.getElementById("GFG_DOWN"); 
            var str = "Click on button to change the background color"; 
          
            el_up.innerHTML = str; 
          
            function changeColor(color) { 
                document.body.style.background = color; 
            } 
              
            function gfg_Run() { 
                changeColor('green'); 
                el_down.innerHTML = "Background Color changed"; 
            }
            function gfg_Run1() { 
                changeColor('blueviolet'); 
                el_down.innerHTML = "Background Color changed"; 
            }
            function gfg_Run2() { 
                changeColor('pink'); 
                el_down.innerHTML = "Background Color changed"; 
            }       */
        
                //insarcinarea 1
/*let number = prompt('Care este numarul?', '0');

 if (number == 0) {
   alert( '0' );
} else if (number < 0) {
   alert( '-1' );
} else if (number > 0){
   alert( '1' );
} else {
     alert ('Error')
}*/
            //insarcinarea 2 fara operator !=
/*let accessAllowed;
let age = prompt('How old are you?', '');   
if (age >= 14 || age >= 90) {
accessAllowed = "Corect";
} else {
accessAllowed = "Incorect";
        }
alert(accessAllowed);*/

            //inscarcinarea 2 cu oper. !=
/*let age = prompt('age?', 100);
if (age != 14 || age < 90 ) 
{
    alert('Interval depasit');
    
}*/
            // insarcinarea 3
/*const login = prompt('Care este username', '');
const password =  prompt('Care este password', '');

if(login == 'Admin' && password == '1234') {	
    alert('Salut!');
} else if (login != 'Admin' && password != '1234') {
    alert('Greseala de validare')
} else if (login != 'Admin' && password == '1234') {
    alert ('Username incorect')
} else if (login == 'Admin' && password != '1234') {
    alert ('Password incorect')
}
 //insarcinare 4
 const sumEven = n => (n*(n+2))/4;
const evenSumBetween = (a, b) => {
return a > b ? sumEven(a) - sumEven(b) + b : sumEven(b) - sumEven(a) + a;
    };
console.log(evenSumBetween(-4, 10));*/


/*let ecuatie = (x, y) => {  // the curly brace opens a multiline function
    let result = 2 * x + y;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
alert( ecuatie(2, 4) ); //8*/

/*const numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(x, y){
    return x + y;
}, 0);

alert(sum);*/

/*const numbers = [1,2,3,4,5] 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
alert(sum);*/

/*const numbers = [1,2,3,4,5]
let add = (a, b) => (a+b)
const sum = numbers.reduce(add)
alert(sum);*/


/*const average = (array) => array.reduce((a, b) => a + b) / array.length;
if (array.length === 0) 
{
     alert("Array is empty!") ;

}
console.log(average([4,3,4]));*/
                                                                            //******
//3.array
//№1
//for
/*let myArray = [1, 2, 3, 4, 5];
for(let i = 0; i < myArray.length; i++){
if(myArray[i] == 3){
alert(myArray[i]);
break;
}
console.log(myArray[i]);
}*/

//foreach
/*let myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(myArray) {
    console.log(myArray);
});*/

//while
/*var myArray = [1, 2, 3,4];
var i = 0;
while (myArray[i]) {
  i++;
}
console.log(myArray);*/

/*var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
}
console.log(person);*/

//for of
/*const myArray = [1,2,3,4];

for (const element of myArray) {
  console.log(element);
}*/

//for in
/*var txt = ""
var myArray= [1, 2, 3, 4]; 
var x;
for (x in myArray) {
  txt += myArray[x] + " ";
}
console.log(myArray);*/

//map
/*const myArray = [1, 2, 3, 4];
const map = myArray.map(x => x * 2);

console.log(map);*/

//№3
/*let styles = ["Jazz", "Bluz"]
console.log(styles);

const newArr = styles.push("Rock & Roll");
console.log(styles);

const newArr1 = styles.splice(1, 1, "Clasic");
console.log(styles);

const newArr2 = styles.shift("");
console.log(styles);

const newArr3 = styles.unshift("Rap", "Raggy");
console.log(styles);*/

//№4
/*numberInputs = 5;
var i = 0;   
var userInput; 
sum = 0; 
// Collect inputs
for(i=0; i<numberInputs; i++)
{   
    userInput = parseInt(prompt('Enter input '));
    sum += userInput;
}
if(userInput === "" || userInput === null || isFinite(userInput)) {	
}
alert('Suma: '+ sum.toFixed(2));//the .toFixed sets it to 2 decimal places*/

//№5
/*const myArray = [1, 2, 3, 4];
const square = myArray.map(x => x * x);
console.log(myArray);
console.log(square);*/

//№6 
/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newArr = numbers.splice(4,0, 0,0,0);
console.log(numbers);*/

//№7
/*let number =  [1, 2, 3, 4, 5, 6, 7, 8, 9]
let extractNumber = number.slice(2, 5)
console.log(extractNumber);*/

//№9

/*const words = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
const result = words.filter(Number);
console.log(result);*/

//№10
/*let sortArray =  [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1]; 
let uniqueSorted = sortArray.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
uniqueSorted.sort();
console.log(uniqueSorted);*/

//№2
let person = [
    {
    name:"John",
    marks: [10, 8, 7]},
    {
    name: "Pete",
    marks: [9, 6, 7]},
    {
    name: "Mary",
    marks: [10, 8, 9]
}];
const adder = (a,b) => a + b;
const getAverage = (person) => person.marks.reduce(adder) / person.length;
console.log(person);


//total of array
/*var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
return total + current;
}, 0);
console.log(total);*/




