// console.log("Hello JS!");

// fullName = "Tony Stakr";

// console.log(fullName);

// x = null;
// console.log(null);

// let z = 10;
// console.log(typeof z);

// // Object

// const student = {
//     fullNmae : "Vishal Kumar",
//     age : 20,
//     CGPA : 6.2,
//     isPass : true,
// };

// console.log(student);
// console.log(student["fullNmae"]);
// console.log(student.fullNmae);
// console.log(typeof student);

// // Arthematic operator
// let a = 5;
// let b = 2;
// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);
// console.log("a < b : ",a < b);
// console.log("a == b : ",a == b);
// console.log("a === '5' : ",a === "5");
// console.log("a < b && (a+b) == 10 : ",a < b && (a+b) == 10);
// console.log("a < b || (a+b) == 10: ",a < b || (a+b) == 10);
// console.log("!(a < b) :  ",!(a < b));

// // Conditional statement

// let age = 3;
// if(age >= 18){
//     console.log("can vote");
// } else{
//     console.log("can not vote");
// }


//input 1

// let nameFirst = prompt("hello");
// console.log(nameFirst); 


// input 2, switch

let score = prompt("Enter the score : ");
let grade;
if(score >=80 && score <=100){
    grade = "A";
} else if(score >=70 && score <=89){
    grade = "B";
} else if(score >=60 && score <=69){
    grade = "C";
} else if(score >=50 && score <=59){
    grade = "D";
} else if(score >=0 && score <=49){
    grade = "F";
}

console.log(grade);