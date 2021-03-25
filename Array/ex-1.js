//for
let myArray = [1, 2, 3, 4, 5];
for(let i = 0; i < myArray.length; i++){
if(myArray[i] == 3){
  console.log(myArray[i]);
break;
}
console.log(myArray[i]);
}

//foreach
let myArray1 = [1, 2, 3, 4, 5];
myArray.forEach(function(myArray1) {
    console.log(myArray1);
});

//while
var myArray2 = [1, 2, 3,4];
var i = 0;
while (myArray2[i]) {
  i++;
}
console.log(myArray2);

//for of
const myArray3 = [1,2,3,4];

for (const element of myArray3) {
  console.log(element);
}

//for in
var txt = ""
var myArray4= [1, 2, 3, 4]; 
var x;
for (x in myArray4) {
  txt += myArray4[x] + " ";
}
console.log(myArray4);

//map
const myArray5 = [1, 2, 3, 4];
const map = myArray5.map(x => x * 2);

console.log(map);