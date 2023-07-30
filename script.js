// Values and Variables

// let country = 'VietNam';
// let continent = 'Asia';
// let population = 100;
// console.log(country);
// console.log(continent);
// console.log(population);

// Data Types

// let a = true
// console.log (a);
// a = 'yes'
// console.log (a);

// let b
// console.log (b)
// console.log (typeof b);
// b = 1992
// console.log (b);
// console.log (typeof b)

// let, const and var

// let age = 30
// age = 31

// const brirthYear = 1992
// brirthYear = 1990

// console.log (age);
// console.log (brirthYear);

// class = "12A1"
// console.log (class) ;


// Basic Operators
// // Toan tu so
// const now = 2023
// const ageQuynh = now - 1992;
// const ageNhi = now - 2021;
// console.log (ageNhi , ageQuynh);
// console.log (ageNhi * 2 , ageQuynh / 2 , 2 ** 3);

// const firstName = 'Do'
// const lastName = 'Quynh'
// console.log (firstName + ' ' + lastName);

// // Toan tu gan

// let x = 10
// x += 10  // x = x + 10
// x -= 10 // x = x - 10
// x *= 10 // x = x * 10 
// x++ 
// x--
// --x
// console.log (x);

// Toan tu so sanh

// const now = 2023
// const ageQuynh = now - 1992;
// const ageNhi = now - 2021;
// console.log (ageQuynh > ageNhi);

// let number1 = parseInt(prompt("Nhập số thứ nhất:"));
// let number2 = parseInt(prompt("Nhập số thứ hai:"));

// let sum = number1 + number2;
// let difference = number1 - number2;

// console.log("Tổng của hai số là: " + sum);
// console.log("Hiệu của hai số là: " + difference);


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohhn = massJohn / (heightJohn * heightJohn);
// console.log (BMIJohhn);
// console.log (BMIMark);
// console.log (BMIMark > BMIJohhn);
// console.log ( BMIJohhn ,BMIMark, BMIMark > BMIJohhn);

// String

// const firstName = 'Quynh';
// const job = 'developer';
// const brirthYear = 1992
// const year = 2023;

// const Quynh = 'Toi la' + ' ' + firstName + ' ' + 'Toi la' + ' ' +  1 + ' ' + job + ' ' + 'bat dau tu nam' + ' ' + (year - brirthYear);
// console.log (Quynh);
// const newQuynh = `toi la ${firstName}, Toi la 1 ${job}, bat dau tu nam 31 ; `
// console.log (newQuynh)

// console.log ('toi muon thanh thao JS \n\
// ok \n\
// ');

// if/else 😂

// const age = 14;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log ('Duoc phep lai xe 😆')
// } else  {
//     const yearsLeft = 18 - age
//     console.log (`Khong duoc phep lai xe 😢 . Doi them ${yearsLeft} nua nhe 🥺`);
// }

// const birthYear = 1992;
// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log (century); 

// const birthYear = 2003
// if (birthYear <=2000) {
//     console.log ('Ban dang o the ky 20 🌟');
// } else {
//     console.log ('Ban dang o the ky 21 🌟');
// }

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);
// if (BMIJohn > BMIMark) {
//     console.log ("John's BMI is higher than Mark's!");
// } else {
//     console.log ("Mark's BMI is higher than John's!");
// }

// Chuyển đổi Kiểu và Ép kiểu (Type Conversion and Coercion)

// const birthYear = "1992";
// console.log (Number(birthYear) , birthYear); // chuyen doi string sang number
// const number1 = 1992
// console.log (String(number1)); // chuyen doi string sang number
// console.log(Number('do van quynh')); // ko the thuc hien 
// console.log(typeof birthYear);

// 5 value of false ====  0 - '' - null - NaN - undefined

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));

// console.log(Boolean('Quynh'));
// console.log(Boolean({}));

// const money = 0
// if (money) {
//     console.log('Toi se mua 1 chiec xe hoi');
// } else {
//     console.log('Toi se kiem 1 jod de kiem tin');
// }

const dayLove = prompt('Ngay quan trong cua ban ?');
const dayLoveNumber = Number (dayLove) // chuyen doi string qua number
console.log(dayLoveNumber);
console.log(typeof dayLoveNumber);
if (dayLoveNumber === 4) {
    console.log('Ngay cuoi cua ban');
}
else if (dayLoveNumber === 17) {
    console.log('Ngay sinh cua con gai ban');
}
else {
    console.log('ko phai 2 ngay quan trong nhat');
}

















