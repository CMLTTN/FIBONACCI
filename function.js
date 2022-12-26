// // // // //  function merhaba(isim){
// // // // //     console.log("merhaba benim Adim  " + isim );
// // // // //  }
// // // // //  merhaba("Cemal")

// // // // //  const isim = (isim) => {
// // // // //     console.log("merhaba benim Adim  " + isim );
    
// // // // //  };
// // // // //  console.log("ahmet");

// // // // // function decleration//statement
// // // // function square(num){
// // // //     return(num * num);
// // // // }
// // // // square(5);
// // // // // console.log(square(5));
// // // // console.log(square(4));
// // // //function expression
// // // const square = function square(num){
// // //     return (num*num)

// // //     }
// // //     console.log(square);
// // //     console.log(square(4));

    
// // const r = +prompt("r:")
// // const h = +prompt("h:")

// // const volume = (r,h = 1) => Math.PI * r * r *h
// // console.log(`${r},{h}= Volume:${volume(r,h).toFixed(4)}`);
// // console.log(`${r},{h}= Volume:${volume(r,h).toPrecision(4)}`);
 
// const calculateAge = (year) => new Date().getFullYear() - year
// console.log("AGE:",calculateAge(1990));

const fibo = (n) => {
    let fib1 = 1
    let fib2 = 1;
    let sum = 0
    for(let i = 3; i< n; i++ ){
sum = fib1 + fib2
fib1 = fib2
fib2 = sum

    }

    return
}
const n = +prompt("Please enter n:")
console.log(`FIBONACCI${n}) =${fibo(n)}`);