// function printOddNum(num) {
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 == 0) {
//             continue;
//         }
//         document.write(i + "<br>");
//     }
// }

// function printOddNum(num) {
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 != 0) {
//             document.write(i + "<br>");
//         }
//     }
// }

function printOddNum(num) {
    for (let i = 1; i <= num; i += 2) {
        document.write(i + "<br>");
    }
}

printOddNum(15);