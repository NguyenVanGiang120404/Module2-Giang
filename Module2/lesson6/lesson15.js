// function sum(a,b){
//     return a + b
// }
// console.log(sum(1,4));

//hàm arrowfunction
// const sum = (a,b) => a + b
// console.log(sum(1,4));

// const sayHello = (name = "giang")=> console.log("Hello" + " " + name);
// const sayHello = name => console.log("Hello" + " " + name);
// sayHello('Giang')


//Hàm đệm quy
// function tinhGiaiThua(number){
// if(number ===1 ) return number
// return number * tinhGiaiThua(number - 1)
// }
// console.log(tinhGiaiThua(5));



function isEven(number){
    return number % 2 === 0
}
const number =prompt("Nhập số vào đây");
console.log(isEven(number));
