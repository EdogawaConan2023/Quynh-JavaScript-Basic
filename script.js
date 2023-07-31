'use strict'; // che do nghiem ngat - an toan

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

// const dayLove = prompt('Ngay quan trong cua ban ?');
// const dayLoveNumber = Number (dayLove) // chuyen doi string qua number
// console.log(dayLoveNumber);
// console.log(typeof dayLoveNumber);
// if (dayLoveNumber === 4) {
//     console.log('Ngay cuoi cua ban');
// }
// else if (dayLoveNumber === 17) {
//     console.log('Ngay sinh cua con gai ban');
// }
// else {
//     console.log('ko phai 2 ngay quan trong nhat');
// }

// const A = true
// const B = false
// console.log( A && B);
// console.log( A || B);

// const scoreDolphins = (96 + 108 + 89) / 3 
// const scoreKoalas = (88 + 91 + 110) / 3

// console.log(scoreDolphins , scoreKoalas);
// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// }
// else if (scoreKoalas > scoreDolphins) {
//     console.log("KoaLas win the trophy");
// }
// else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy");
// }

// Swich
// //A
// const day = 'monday'
// switch (day) {
//     case 'monday':
//         console.log ('Hoc lap trinh o nha')
//         break;
//     case 'tuesday':
//         console.log('Hoc lap trinh o PL');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Hoc Anh Van o nha');
//         break;
//     case 'friday':
//         console.log('Hoc Anh Van o Katinat');
//         break;
//     case 'saturday':
//         console.log('On Tap Lap Trinh');    
//         break;
//     case 'sunday':
//         console.log('Nghi Ngoi')    
//         break;
//     default:
//         console.log('KHONG HOP LE');
// }
// //B
// if (day === 'monday') {
//     console.log ('Hoc lap trinh o nha')
// } else if (day === 'tuesday') {
//     console.log('Hoc lap trinh o PL');
// } else if (day ==='wednesday' || day === 'thursday') {
//     console.log('Hoc Anh Van o nha');
// } else if (day === 'friday') {
//     console.log('Hoc Anh Van o Katinat');
// } else if (day === 'saturday') {
//     console.log('On Tap Lap Trinh');    
// } else if (day === 'sunday') {
//     console.log('Nghi Ngoi');
// } else {
//     console.log('KHONG HOP LE');
// }

// const ngay = 'thu2';
// switch (ngay) {
//     case "thu2":
//         console.log('di hoc ');
//         break;
//     case "thu3":
//         console.log('di choi');
//         break;
//     case "thu4":
//         console.log('di tam');   
//         break;
//     case "thu5":
//         console.log('di tra sua');
//         break;
//     case "thu6":
//         console.log('di ngu');
//         break;
//     default:
//         console.log('no');
//         break;
// }

// Toan Tu Bac ba 
// Bai tap
// "Steven cần một máy tính tiền tip rất đơn giản mỗi khi anh ấy đi ăn tại một nhà hàng. Ở quốc gia của Steven, thường thì người ta tip 15% nếu giá trị hóa đơn nằm trong khoảng từ 50 đến 300. Nếu giá trị khác, thì tip là 20%.

// Nhiệm vụ của bạn:

// Tính toán số tiền tip dựa trên giá trị hóa đơn. Tạo một biến gọi là "tip" để lưu số tiền tip. Không được phép sử dụng câu lệnh if...else (nếu bạn thấy khó, bạn có thể bắt đầu với câu lệnh if...else, sau đó cố gắng chuyển đổi thành toán tử ba ngôi).

// In ra màn hình console một chuỗi chứa giá trị hóa đơn, số tiền tip và tổng giá trị cuối cùng (giá trị hóa đơn + tiền tip).

// Ví dụ: Giá trị hóa đơn là 275, số tiền tip là 41.25 và tổng giá trị cuối cùng là 316.25.

// Lưu ý: Sử dụng các giá trị của các biến "bill" và "tip" để tạo chuỗi này. Đừng cứng cố định chúng 🙂

// DỮ LIỆU KIỂM TRA: Kiểm tra với các giá trị hóa đơn khác nhau: 275, 40 và 430."


// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;

// const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
// const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
// const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// const total1 = bill1 + tip1;
// const total2 = bill2 + tip2;
// const total3 = bill3 + tip3;

// console.log(total1 , total2 , total3);


// const bill = 275;
// if (bill >= 50 && bill <= 300) {
//     console.log(bill + (bill * 0.15));
// } else {
//     console.log(bill + (bill * 0.2));
// }


// Function 
// khai bao function
// function ten() {
//     console.log( 'My name is Conan');
// }
// ten();

// function family( boy , girl) {
//     const familyHappy = `Gia dinh hanh phuc la gia dinh co ${boy} con trai va ${girl} con gai`
//     return familyHappy
// }
// const familyAll = family ( 1 , 2);
// console.log(familyAll);


// function traicay ( duahau , thom) {
//     const dichoi = `Toi muon uong nuoc ep bao gom ${duahau} trai dua hau va ${thom} trai thom`;
//     return dichoi;
// }
// const soluongtraicay = traicay ( 1 , 3 );
// console.log(soluongtraicay);

// function tinhtuoi(namsinh) {
//     const tuoi = 2023 - namsinh;
//     return tuoi;
// }
// const truyenthamsocuthenamsinh = tinhtuoi (1992);
// console.log(truyenthamsocuthenamsinh);

// Function Declaration (Khai báo hàm):
// function tenHam(thamSo1, thamSo2) {
//     // Thực hiện các tác vụ ở đây
//     return ketQua;
//   }

  
// function calcAge(brirthYear) {
//     // const age1 = 2023 - brirthYear
//     // return age1 ;
//     return 2023 - brirthYear;  // bieu thuc 
// }
// const age = calcAge(1992);
// console.log(age);

//Function Expression (Biểu thức hàm):
// const tenHam = function(thamSo1, thamSo2) {
//     // Thực hiện các tác vụ ở đây
//     return ketQua;
//   };
  
// const calcAge2 = function (brirthYear) {
//     return 2023 - brirthYear
// }
// const age2 = calcAge2(1992);
// console.log(age2);

// khai bao ham 
// function traicay ( duahau , thom) {
//     const dichoi = `Toi muon uong nuoc ep bao gom ${duahau} trai dua hau va ${thom} trai thom`;
//     return dichoi;
// }
// const soluongtraicay = traicay ( 1 , 3 );
// console.log(soluongtraicay);

//bieu thuc ham
// const traicay = function (duahau , thom) {
//     const dichoi = `Toi muon uong nuoc ep bao gom ${duahau} trai dua hau va ${thom} trai thom`;
//     return dichoi;
// }
// const soluongtraicay = traicay ( 1 , 3 );
// console.log(soluongtraicay);

// function kiemTraChanLe(so) {
//     if (so % 2 === 0) {
//       return "Số " + so + " là số chẵn.";
//     } else {
//       return "Số " + so + " là số lẻ.";
//     }
//   }
  
//   let soKiemTra = 7;
//   console.log(kiemTraChanLe(soKiemTra));

// const kiemTraChanLe = function (so) {
//     if (so % 2 === 0) {
//         return "Số " + so + " là số chẵn.";
//       } else {
//         return "Số " + so + " là số lẻ.";
//       }
// }
// let soKiemTra = 7;
// console.log(kiemTraChanLe(soKiemTra));