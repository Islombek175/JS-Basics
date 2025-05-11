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

// 7.

// function yilniAniqlash() {
// 	for (let year = 2014; year <= 2050; year ++) {
// 		let date = new Date(year, 0, 1);
// 		if (date.getDay() === 0) {
// 			console.log(`1st january in ${year} year`);
// 		}
// 	}
// }
// yilniAniqlash();

// 8.

// function sonRandom(a) {
// 	let son = Math.ceil(Math.random() * 10);
// 	if (a == son) {
// 		return "Yes it is";
// 	} else {
// 		return `No it is not, it is ${son}`;
// 	};
// }
// console.log(sonRandom(7));

// 9.

// function yangiYilgacha() {
// 	let today = new Date();
// 	let chirstmas = new Date(today.getFullYear(), 11, 31);
// 	if (today.getMonth() == 11 && today.getDay() == 31) {
// 		chirstmas.setFullYear(chirstmas.getFullYear() + 1);
// 	} else {
// 		let day = 1000 * 60 * 60 * 24;
// 		console.log(Math.ceil((chirstmas.getTime() - today.getTime()) / day), "days left until christmas")
// 	}
// }
// yangiYilgacha()

// 11.
// function celToFarang(cel) {
// 	return `${cel}°C is ${(cel * 9/5) + 32}°F`;
// }
// function FarangToCel(farang) {
// 	return `${farang}°F is ${(farang - 32) * 5/9}°C`;
// }
// console.log(celToFarang(60));
// console.log(FarangToCel(45));

// 15.
// function sonlarAyirmasi(son) {
// 	if (son > 13) {
// 		return (son - 13) * 2;
// 	} else {
// 		return 13 - son;
// 	}
// }
// console.log(sonlarAyirmasi(14));

// 16.

// function sonlarSummasi(son1, son2) {
// 	if (son1 === son2) {
// 		return (son1 + son2) * 3;
// 	} else {
// 		return son1 + son2;
// 	}
// }
// console.log(sonlarSummasi(2, 5));

// 17.

// function sonlarAyirmasi(son) {
// 	if (son > 19) {
// 		return (son - 19) * 3;
// 	} else {
// 		return 19 - son;
// 	}
// }
// console.log(sonlarAyirmasi(0));

// 18.

// function sonYokiSummalar(son1, son2) {
// 	if (son1 === 50 || son2 === 50 || (son1 + son2) === 50) {
// 		return true;
// 	}
// 	return false;
// }
// console.log(sonYokiSummalar(20, 30));

// 19

// function sonniTekshirish(son) {
// 	return ((son >= 20 && son <= 100) || (son >= 20 && son <= 400));
// }
// console.log(sonniTekshirish(400));

// 20

// function musbatManfiyAniqlash(son1, son2) {
// 	if ((son1 > 0 && son2 < 0) || (son1 < 0 && son2 > 0)) {
// 		return true
// 	}
// 	return false
// }
// console.log(musbatManfiyAniqlash(-10, -10))
