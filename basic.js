// javascript introduction

//javascript is a single threaded, sycnecornous and dynamically typped language.

//single threaded- 

// syncronous -

// dynamically typeyed language-

// 2.variable - variable like a container  

//let,var,const

// let name="kuldeep";
// let age=20;
// let male=true;
// let gender;
// let a="hello"/3;
// let b=null;
// let g='c'

// console.log(typeof(g));

//operators 

//1.Arthimetic operator

//+,-,/,*,%
// let a=5;
// let b=9;

// console.log(a+b);


//capression operator

//>,<,==,===,<=,>=,!=

// let a="18";
// let b="18";



// console.log(a==b);

//logical operator

//&&,||

// let a=50;
// let b=70;

// console.log(b<a&&b<a)
// console.log(a>b||a<b)

//assignment operator

//+=,-=

// let a=9;
// a+=12;
// a-=2;

// console.log(a)

//Uniary operator

//++ -increment;
//-- -dicrement;

// let a=7;
// a++; //post increment;

// ++a; //pre increment;
// console.log(a++)
// console.log(++a)

// console.log(a++,++a,--a,++a);

//7,9,8,9

// if,else or if,else-if ,else statement

// 9 is positiv console positive , -9 conslo negative, else 0

// let a=-89;

// if(a>0){
//     console.log("Positive")
// }
// else if(a<0){
//    console.log("Negative") 
// }
// else{
//     console.log("Zero");
// }

// let monthe=10;

// if(monthe==4||monthe==9||monthe==11){
//   console.log("30 days")
// }
// else if(monthe==2){
//     console.log("28 days")
// }
// else{
//     console.log("31 days")
// }

//Loop - 

//1-10;


// for(let a=1;a<=10;a++){

//     console.log(a);

// }

// let a=10;

// while(a>=1){
//     console.log(a);
//     a--;
// }


// var a=123;
// var sum=0;

// while(a>0){

//     var d=a%10;

//     sum=sum*10+d;

//     a=a/10;
// }

// console.log(sum);


let a=[2,3,2,3,2,2];

a.forEach(element => {
    console.log(element+2)
});

// function check(n){
//     if(n%2==0){
//         return "even value"
//     }
//     else{
//         return "odd value"
//     }
// }

// let b=check(2);
// // console.log(b)


// console.log(check(3))


let checkvalue=(n)=>{
     if(n>0){
        console.log("Positive value")
     }
     else if(n<0){
        console.log("Negative value")
     }
     else{
        console.log("Zero")
     }
}


console.log(checkvalue(0))

console.log(checkvalue(99))





































