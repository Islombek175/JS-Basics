// 1.

// let haftaKunlari = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function dateChiqarish() {
// 	console.log("Today is:", haftaKunlari[new Date().getDay()]);
// 	let hour = new Date().getHours();
// 	let seconds = new Date().getSeconds();
// 	let milliseconds = new Date().getMilliseconds();
// 	if (hour > 12 & hour < 23) {
// 		console.log(`Current time is: ${hour} PM : ${seconds} : ${milliseconds}`)
// 	} else {
// 		console.log(`Current time is: ${hour} AM : ${seconds} : ${milliseconds}`)
// 	}
// }
// dateChiqarish();



// 3.

// function dateChiqarish() {
// 	let year = new Date().getFullYear();
// 	let month = new Date().getMonth();
// 	let day = new Date().getDay();
// 	console.log(`${day}-${month}-${year}`);
// 	console.log(`${day}/${month}/${year}`);
// 	console.log(`${month}-${day}-${year}`);
// 	console.log(`${month}/${day}/${year}`);
// }
// dateChiqarish();



// 4.

// function uchburchakIldizTopish(a, b, c) {
// 	let s = (a + b + c)/2; //Yarim Perimetr
// 	let S = (s * (s - a)*(s - b)*(s - c)) ** 0.5; //Geron formulasi
// 	return S.toFixed(2);
// }
// console.log(uchburchakIldizTopish(4, 5, 6));



// 6.

// function gregorianCalendar() {
// 	let year = new Date().getFullYear();
// 	if (year % 4 == 0) {
// 		console.log("Yes");
// 	} else {
// 		console.log('No');
// 	}
// }
// gregorianCalendar();