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
// v.2
// values = values.filter(el => (el + "").length === 4); //приводим элемент массива к строке и проверяем длинну строки true/false
// console.log(values.length > 0)

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
// let res = users.findIndex(el => reg.test(el.role) === true); // находим элемент,  у которого свойсто role содержит 2 слова

//v.2
// let res = users.findIndex(el => el.role.split(' ').length > 1); //элемент по разделителю " " разбиваем на массив и проверяем количество элементов в масиве
// console.log(res);

// ex.2.9

// let array = [[1,2,3],[1,2],[1,2,3,4]];
// array = array.sort((a, b) => a.length - b.length);
// console.log(array);


// ex.2.10

// const randValues = ["Банан", 3, "Апельсин", 2, "Вишня"];
// const res = randValues.every(el => typeof el === 'number') ? randValues.sort((a, b) => a - b) : randValues.sort(); //проверяем, в массиве одни числа или числа и строки
// console.log(res);
//v.2
// randValues.sort(); // сортируем строки
// randValues.sort((a, b) => a - b); // сортируем числа, если есть в масиве (особенно если число двузначное и более)
// console.log(randValues);


// ex.2.11

// const words = ["Заказ", "Такси", "Доход"];
// let count = 0;
// let result = [];
// function getPalindrome (arr) {
//     for (let i of arr) {
//         if (i.toLowerCase().split('').reverse().join('') == i.toLowerCase()) {
//             count++;
//         } else {
//             count;
//         }
//     }
//    return result.push(count, arr.length - count);  
// }
// getPalindrome(words);
// console.log(result);
//v.2
// let result = [0, 0];
// words.forEach(el => {
//     el.toLowerCase() === el.split('').reverse().join('').toLowerCase() ? result[0]++ : result[1]++; //если число палиндром, то +1 первый элемент result, если нет - ++ второй элемент массива result
// });
// console.log(result);
 

// ex.2.12

// let dates = "23.04.1996 07.10.2002 15.08.1945";
// // function getArrayFormString(str) {
// //     let newStr = str.replace(/\./g, "/").split(" "); // заменяем все точки на "/", преобразуем строку в массив строк через разделитель " "
// //     return newStr;
// // }
// // const res = getArrayFormString(dates);
// // console.log(res);

// //v.2
// dates = dates.split(' ').map(el => el.replace(/\./g,"/")); //переводим в массив и заменяем символы с . на /
// console.log(dates);


// ex.2.13

// let tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
// let obj = {};

// let arr = tickets.split("."); // создаем новый массив и разбиваем на две строки по "."
// console.log("1",arr);
// arr = arr.filter(el => {
//     if(el) {
//         return el; // фильтруем массив на наличие пустых строк. Если не пустая строка - возвращаем элемент
//     }
// });
// console.log("filter",arr);
//  arr = arr.map(el => {
//     return el.split(": "); //разбиваем каждый элемент маcсива на 2 элемента по разделителю и возвращаем каждый элемент в виде массива 2-х строк
//  })

// console.log("map",arr);

// arr.forEach(el => {
//     el[0] = el[0].trim(); //убираем лишний пробел у первого элемента масcива
//     obj[el[0].toLowerCase()] = el[1].split(","); // записываем первый элемент каждого массива как ключ объекта, второй элемент записываем в объект как значение
// });
// console.log(obj)

//ex.2.14

// let numbers = [10, 20, 33, 55, 100]; // Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50;

// let count = numbers.reduce((acc, el) => {
// 	if(acc.sum + el < 50) {
// 		acc.cnt++;
// 		acc.sum += el;
// 	}
// 	return acc;
// }, {cnt: 0, sum: 0}) //передаем в метод люъект и выводим значение, проверяем свойство sum и выводим значение cnt.cnt
// console.log(count.cnt);

//ex.2.15

// let values = ["100", "30", "Не число", "20", "Тоже не число"]; //Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN

// let result = values.reduce((acc, el) => {
//     let n  = +el; //переводим элемент массива в число
//     if (!isNaN(n)) { // проверяем, что элемент именно число
//         acc += n;
//     }
//     return acc;
// }, 0)
// console.log(result);

//ex.2.16
//В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.
// let array_1 = [2, 4, 7, 8, 1];
// let array_2 = [2, 5, 11, 6, 1];

// function intersection(array_1, array_2) {
//     let res = array_1.filter(el => {
//       return array_2.includes(el);
//     });
//     res = res.sort((a, b) => b - a);
//     return res;
// }
// console.log(intersection(array_1, array_2))



// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. // 'ehT gib elppa'
// let str = "The big apple"
// function reverseWords(str) {
//   str = str.split(" ").map(e => e.split('').reverse().join(''));
//   return str.join(" ")
// }
// reverseWords(str)
// console.log(reverseWords(str))
let str = "the_stealth_warrior"
let str1 = ""
// function toCamelCase(str){
//   if (str !== '') {

//     if (str !== str.toLowerCase()) {
//       str = capitalize(str);
//       return str.join('')

      
//     } else {
//       str = capitalize(str)
//       return str[0].toLowerCase() + str.slice(1).join('');

//     }
    
//   } else {
//     return str
//   }
// }

// function capitalize(str) {
//   return str.split(/[_\-]+/g).map(e => (e[0].toUpperCase() + e.slice(1)));
// }
// toCamelCase(str1)
// console.log(toCamelCase(str1))



function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}
let result = toCamelCase(str);
console.log(result)