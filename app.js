//1-masala Berilgan stiring ichidan olib tashlanishi kerak bo’lgan stringni birinchi uchraganini olib tashlang- 5 ball.
// Example
/*
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, "");
}

console.log(removeFirstOccurrences(`qwert`, `rt`));

//2-masala Birinchi va so’ngi burchali qavslarni olib tashlang - 5 ball.
// example
/*
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

console.log(unbracketTag("<hello>"));

//3-masala Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin - 10 ball.
// Example
/*
 *   4 => false
 *   5 => true
 *   6 => false
 *   7 => true
 *   11 => true
 *   12 => false
 *   16 => false
 *   17 => true
 */

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3));

// 4-masa;aBerilgan array ichidagi ma’lumotlardan yangi object yasab qaytaring. Functionga so’ralgan argumentlar kiritish orqali - 15 ball.
// Example

/*
[	
	{ country: 'Belarus', city: 'Brest' },
	{ country: 'Russia', city: 'Omsk' },
	{ country: 'Russia', city: 'Samara' },
	{ country: 'Belarus', city: 'Grodno' },
	{ country: 'Belarus', city: 'Minsk' },
	{ country: 'Poland', city: 'Lodz' }
]
*/

// output
/* 
	{
	  belarus : ["Brest", "Grodno", "Minsk"],
	  russia  : ["Omsk", "Samara"], 
	  poland  : ["Lodz"]
	}
*/

function group(array, keySelector, valueSelector) {
  // your code
}

// 5-masala n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring - 10 ball.
// Example
/*
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/

function sumBetween(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumBetween(1, 5));

// 6-masala n ta elementdan tashkil topgan **arr** nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi **getElementsOneTime(arr)** nomli funksiya tuzing - **10 ball.**

function getElementsOneTime(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(getElementsOneTime([5, 4, 5, 9, 2, 5, 1]));

// 7-masala n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsing - **15 ball.**
// 8-masala n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin - **10 ball.**
// 9-masala Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan - **10 ball.**
// Input:
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];
// Output:
// 1. Akrom Malikning "Halqa" kitobi o'qilmagan;
// 2. O'tkir Hoshimovning "Dunyo ishlari" kitobi o'qilgan;
// 3. Abdulfattoh Abu G'uddaning "Vaqtning qadri" kitobi o'qilmagan;

// 10-masala Mahsulotlar massividagi objectlarni sonini, chegirmasini hisobga olib, umumiy summani hisoblang - 10 ball
// Input:
const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];
