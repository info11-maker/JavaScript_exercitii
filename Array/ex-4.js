numberInputs = 5;
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
alert('Suma: '+ sum.toFixed(2));