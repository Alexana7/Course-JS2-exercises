// ex.2.1

// let values = ["Строка", true, "Число", "Объект", "Не число", false];

// for (let i = 0; i < values.length; i++) {
//     if (typeof values[i] == 'boolean') {
//         values[i] = "Булевый тип";
//         break;
//     }
// }
// console.log(values)
// let i = values.findIndex(el => typeof el === 'boolean');
// values.splice(i, 1, "Булевый тип")

// ex.2.2
// let partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];
// let reg = /\d\d\D\D$/i;
// let arr = partNumbers.filter(e => e.match(reg))
// console.log(arr);

// ex.2.3

// let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
// let arr = layout.match(/\d+/g) || [];
// let result = arr.map(el => {
//     if (el % 2 === 0) {
//         return el ** 2;
//     } else {
//       return +el;
//     }   
// });
// console.log(result);

// // v.2

// let nums = [];
// let n = '';
// for (let i = 0; i < layout.length; i++) {
//     let char = layout[i];
//     if(!isNaN(+char) && char !== ' ') {
//         n += char;
//     }else if (n !== '') {
//         nums.push(n % 2 === 0 ? n**2 : +n);
//         n ='';
//     }
// }
// if (n !== '') {
//     nums.push(n % 2 === 0 ? n**2 : +n);

// }

// ex.2.4

// const tasks = [
//     {title: "Умыться" , completed: true},
//     {title: "Сделать зарядку" , completed: true},
//     {title: "Приготовить завтрак" , completed: false}
// ];
// let titles = tasks.map(e => e.title);
// console.log(titles)

// ex.2.4
// v.1
// let values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];
// // let firstEl = values.findIndex(el => typeof el === 'boolean');
// // let lastEl = values.findLastIndex(el => typeof el === 'boolean');
// // let result = values.slice(firstEl, lastEl+1);

// // v.2
// function setStart(arr) {
//     if (typeof arr[0] === "boolean") {
//         return arr;
//     } else {
//         arr.shift(); // удаляет первый элемент
//         return setStart(arr); // повтор действия
//     }
// }
// function setEnd(arr) {
//     if (typeof arr[arr.length-1] === "boolean") {
//         return arr;
//     } else {
//         arr.pop(); // удаляет последний элемент
//         return setEnd(arr); // повтор действия
//     }
// }
// let result = setStart(values);
// result = setEnd(values);
// console.log(result);

// ex.2.6

// let values = [10, 185, 12060, 980];
// values = values.map(el => el.toString())
// let reg = /^\d{4,4}$/;
// if (values.findIndex(el => reg.test(el) >= 0)){
//     console.log(true)
// } else {
//     console.log(false)
// }

// ex.2.7 
// v.1
// let values = [10, 185, 12060, 980];
// let index = values.findIndex(el => (el + "").length === 4); // приводим значение элемента массива к строке и проверяем длину этой строки. Метод вернет индекс первого эдемента
// console.log(index !== -1 ? index : "Искомый элемент не был найден");

// ex.2.8

// let users = [
//     {login: "user1", role: "Admin"},
//     {login: "user2", role: "State user"},
//     {login: "user3", role: "Moderator"}
// ];

// let reg  = /\w+\s\w+/gi;
// let res = users.findIndex(el => reg.test(el.role) === true);
// console.log(res);

// ex.2.9

// let array = [[1,2,3],[1,2],[1,2,3,4]];
// array = array.sort((a, b) => `${a.length > b.length ? 1 : -1}`);
// console.log(array);


// ex.2.10

// const randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];
// const res = randValues.every(el => typeof el === 'number') ? randValues.sort((a, b) => a - b) : randValues.sort(); //проверяем, в массиве одни числа или числа и строки
// console.log(res);

// ex.2.11

const words = ["Заказ", "Такси", "Доход"];
let count = 0;
let result = [];
function getPalindrome (arr) {
    for (let i of arr) {
        if (i.toLowerCase().split('').reverse().join('') == i.toLowerCase()) {
            count++;
        } else {
            count;
        }
    }
   return result.push(count, arr.length - count);  
}
getPalindrome(words);
console.log(result);



