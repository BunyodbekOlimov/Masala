// {
//     // 1 - masala
//     function son(a, b, c){
//         let musbat = 0
//         let manfiy = 0
//         if(a > 0){
//             musbat++
//         }else{
//             manfiy++
//         }
//         if(b > 0){
//             musbat++
//         }else{
//             manfiy++
//         }
//         if(c > 0){
//             musbat++
//         }else{
//             manfiy++
//         }
//         return `musbat: ${musbat}, manfiy: ${manfiy}`
//     }
//     console.log(son(5, -4, 6));
// }

// {
//     // 2 - masala
//     function son(a, b){
//         if(a > b){
//             return `kattasi: ${a}`
//        }else{
//         return `${b}`
//            }

//     }
//     console.log( son(7, 4));
// }

// {
//     // 3 - masala
//     function  son(a, b){
//         if(a < b){
//             return `a son ${a} kichik `
//         }else{
//             return `b son ${b} kichik`
//         }
//     }
//     console.log(son(4,5));
// }

// {
//     // 4 - masala
//     function son(a, b){
//         if(a > b){
//             return  `a soni katta: ${a} , b soni kichik:${b}`
//         }else{
//             return  `bunda b soni katta: ${b} , a soni kichik:${a}`
//         }

//     }
//     console.log(son(16, 28));
// }

// {
//     /// 5 - masala
//     function son(a, b){
//         let c = 0
//         if(a < b){
//             return  `a son kchik: ${a}, b soni katta: ${b}`
//         }else{
//             c = a
//             a = b
//             b = c
//             return  `a soni kichik: ${a}, b soni katta: ${b}`
//         }
//     }
//     console.log(son(21, 28));
// }

// {
//     // 6 - masala
//     function son(a, b){
//         if(a != b){
//             let sum = a + b
//             return `a soni: ${a}, va b soni ${b}, yigindisi: ${sum} ga teng`
//         }else{
//             return `${0} ga teng`
//         }
//     }
//     console.log(son(13, 13));
// }

// {
//     // 7 - masala
//     function son(a, b){
//         let c = 0
//         if(a == b){
//             return `a son: ${a}, b son: ${b}, javobi:${c}`
//         }else if(a > b){
//             return `a son ${a} katta `
//         }else{
//             return `b son  ${b} katta `
//         }
//     }
//     console.log(son(47, 8));
// }

// {
//     // 8 - masala
//   function son(a, b, c){
//     if(a < b ){
//     return `${a}`
//     }else if(a < c){
//     return `${a}`
//     }else if(b < a){
//         return `${b}`
//     }else if(b < c){
//         return `${b}`
//     }else if(c < a){
//         return `${c}`
//     }else if (c < b){
//         return `${c}`
//     }
// }
//   console.log(son(14, 24, 32));
// }

// {
//     // 9 - masala
//     function son(a, b, c){
//         if(b < a || b > c){
//             return  `"o"rtasidagi: ${c}`
//         }
//     }
//     console.log(son(8, 4, 1));
// }

// {
//     // 10 - masala
//     function son(a, b, c){
//         if(a > b && b < c || a > b && a > c){
//             return `kichik: ${b}`
//         }else{
//             return `katta: ${a}`
//         }
//     }
//     console.log(son(8, 1, 9));
// }

// {
//     // 11 - masala
//     function son(a, b, c, d) {
//                 if (a === b && b === c) return 4;
//                 if (a === b && b === d) return 3;
//                 if (a === c && c === d) return 2;
//                 if (b === c && c === d) return 1;
//                 return 0;
//             }
//             console.log(son(1, 3, 4, 8));
// }

alert("Etiboringiz uchun raxmat");
