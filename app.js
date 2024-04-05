// 1. შექმენით 5 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;

const numbers = [2, 4, 6, 8, 10, 30, 40, 50];
// const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];

// const average = sum / numbers.length;
let sum = 0;

for (let a = 0; a < numbers.length; a++) {
	// console.log(numbers[a]);
	// sum += numbers[a];

	if (a === 2 || a === 3) {
		sum += numbers[a];
	}

	// console.log(sum);
}

let b = 0;

// while (b > 0) {
// 	console.log("while", b);
// 	b--;
// }

// do {
// 	console.log("do while", b);
// 	b--;
// } while (b > 0);

// console.log(sum);

// console.log(average);

// 2. შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია name  და age property.
const students = [
	{
		name: "giorgi1",
		age: 25,
	},
	{
		name: "giorgi2",
		age: 25,
	},
	{
		name: "giorgi3",
		age: 25,
	},
	{
		name: "giorgi4",
		age: 25,
	},
	{
		name: "giorgi5",
		age: 25,
	},
];

// console.log(students);

// 3. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// firstName - სტრინგ ტიპის მნიშვნელობა
// lastName - სტრინგ ტიპის მნიშვნელობა
// address - სტრინგების მასივი
// age - რიცხვითი მნიშვნელობა
// phoneNumbers - რიცხვითი მნიშვნელობების მასივი
const person = {
	firstName: "giorgi",
	lastName: "giorgiashvili",
	address: ["tbilisi", "rustavi"],
	age: 25,
	phoneNumbers: [555555555, 555555555],
};
// console.log(person);
// 4. console.log ში გამოიტანეთ სტრინგი "My name is (#3 დავალების firstName  მნიშვნელობა)", My age is (#3 დავალების age-ის მნიშვნელობა)", "My address is (#3 დავალების address-ის პირველი ელემენტის მნიშვნელობა)"

const text = `My name is ${person.firstName}, My age is ${person.age}, My address is ${person.address[0]}`;

// console.log(text);

let test1 = 20;
let test = test1 + 1; //test1++
let test3 = test1 - 1; //test1--

let sum1 = 0;
sum1 = sum1 + 100; //100

sum1 = sum1 + 100; // 200  sum1+=100

sum1 = sum1 + 100; // 300

let priceToPay = sum1;

let delivery = 0;

let city = "tbilisi";

// if (!city) {
// 	console.log("city is empty");
// } else {
// 	console.log("city is not empty", city);
// }

// if (sum1 <= 100) {
// 	delivery = 20;
// 	console.log("if price");
// } else if (sum1 > 100 && sum1 < 300) {
// 	delivery = 15;
// 	console.log("else if price 100-300");
// } else if (sum1 >= 300 && sum1 < 500) {
// 	delivery = 10;
// 	console.log("else if price 300-500");
// } else {
// 	delivery = 5;
// 	console.log("else price");
// }

// if (sum1 < 100) {
// 	delivery = 20;
// } else {
// 	delivery = 0;
// }

// delivery = sum1 < 100 ? 20 : 0;

// if (city !== "tbilisi") {
// 	delivery = 20;
// 	console.log("if city");
// }

// if (city !== "tbilisi" || sum1 < 100) {
// 	delivery = 20;
// 	// console.log('if city !== "tbilisi" || sum1 < 100');
// }

// switch (city) {
// 	case "tbilisi":
// 		delivery = 0;
// 		console.log("tbilisi");
// 		break;
// 	case "rustavi":
// 	case "telavi":
// 		delivery = 5;
// 		console.log("rustavi");
// 		break;
// 	case "kutaisi":
// 		delivery = 10;
// 		console.log("kutaisi");
// 		break;
// 	case "batumi":
// 		delivery = 20;
// 		console.log("batumi");
// 		break;
// 	default:
// 		delivery = 30;
// 		console.log("default");
// 		break;
// }

// console.log("after if");

priceToPay += delivery;

// priceToPay = priceToPay - (priceToPay * 5) / 100;

// console.log(priceToPay);

const currencies = [
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.8939",
		diffFormated: "0.0087",
		rate: 6.8939,
		name: "სომხური დრამი",
		diff: -0.0087,
		date: "2024-04-05T17:45:08.512Z",
		validFromDate: "2024-04-06T00:00:00.000Z",
	},
	{
		code: "CNY",
		quantity: 10,
		rateFormated: "3.7029",
		diffFormated: "0.0069",
		rate: 3.7029,
		name: "ჩინური იუანი",
		diff: -0.0069,
		date: "2024-04-05T17:45:08.512Z",
		validFromDate: "2024-04-06T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.9018",
		diffFormated: "0.0121",
		rate: 2.9018,
		name: "ევრო",
		diff: -0.0121,
		date: "2024-04-05T17:45:08.512Z",
		validFromDate: "2024-04-06T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.3834",
		diffFormated: "0.0146",
		rate: 3.3834,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: 0.0146,
		date: "2024-04-05T17:45:08.512Z",
		validFromDate: "2024-04-06T00:00:00.000Z",
	},
];

for (let index = 0; index < currencies.length; index++) {
	const element = currencies[index];

	// console.log(element);

	if (element.diff > 0) {
		// console.log(element.code, "success");
	} else {
		// console.log(element.code, "fail");
	}
}
