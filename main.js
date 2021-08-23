/*var Number = [];
var Number2=[];
var max=0;
var x=0;
Number.push("1");
Number.push("2");
Number.push("3");
Number.push("4");
Number.push("5");
Number2=parseInt(Number);

for (var index = 0; index < Number2.length; index++) {

  if(Number2[index]>max)
  {

    max=Number2[index];
  }  
  x=index;
}

console.log(x);*/
////////////////////////////////////////////

// P1
/* 
var Num =Number (prompt('Enter number'));
if(Num%2==0){

  console.log('number is even');
}
else
{
console.log('number is odd');
}*/

///////////////////////////////////////////////////
 // P2

/*var num1=Number(prompt("Enter First number")),
    num2=Number(prompt("Enter second number"));
    num3=Number(prompt("Enter length"));
for (let i= 1; i < num3; i++) {
  if(i%num1===0&&i%num2===0){
    console.log("FizzBuzz");
    
    }
    else if(i%num1===0){
      console.log("Fizz");
      }
    
      else if(i%num2===0){
        console.log("Buzz");
        }
        else{
    
          console.log(i);
        }
}
*/
//////////////////////////////////////////////////
// P3

/*var message = "Welcome !";
message.split('').reverse().join('');
console.log(message);*/

////////////////////////////////////////////////

//P4

/*var radius=Number(prompt("Enter First number"));
console.log("Area is =  "),
console.log(Math.PI*radius*radius),
console.log("circumferance is =  "),
console.log(2*Math.PI*radius);
*/
////////////////////////////////////////////////
//P8 
var max=0;
var num1=Number(prompt("Enter First number")),
    num2=Number(prompt("Enter second number")),
    num3=Number(prompt("Enter third number")),
if(num1>num2&&num2>num3)
{
max=num1;

}
else if (num2>num1&&num1>num3)
{
max =num2;

}
else
{
max=num3;
}
console.log(max);

///////////////////////////////////////////////
//p13
/*var num1=Number(prompt("Enter First number")),
    num2=Number(prompt("Enter second number"));
   console.log("sum of two number is =  ");
   console.log(num1+num2);*/
