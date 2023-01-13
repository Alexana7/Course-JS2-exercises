//ex.3.1 переменная car, которая хранит в себе объект, у которого есть как минимум одно свойство — engine. Удалите из объекта car свойство engine 
// const car  = {
//     model: "Audi", 
//     color: "white",
//     weight: 1850,
//     engine: "170 hp"
// };
// delete car.engine
// console.log(car);

//ex.3.2 В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. Результат выведите в консоль.
// const goods = {
//     title: "Самокат", 
//     price: 6000,
//     good_id: 1
// };
// const keys = Object.keys(goods);
// const values = Object.values(goods);
// let res = [].concat(keys, values);
// console.log(res);

//ex.3.3   В программе заданы две переменные article и author, которые содержат объекты. Объект article содержит информацию о статье, а author — об авторе. Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.
// const article = {
//     title: "Загадки дачного огурца", 
//     text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
// }
// const author = {
//     name: "Ричард М.В.",
//     age: 43
// }
// const obj = Object.assign(article, author);
// console.log(obj)

//ex.3.4 Hапишите функцию count(), которая считает количество элементов массива array и выводит в консоль сообщение
// const array = [true, 4, "word", "10n"];
// function count() {
//     console.log('Количество элементов в массиве: ' + array.length)
// }
// count();


//ex.3.5 В программе задан двумерный массив employee. Удалите у данного массива значение, у которого первый элемент hireDate, и добавьте новое значение ["jobName", "IT PROG"] в конец массива. Результат выведите в консоль.
// let employee  = [
//     ["firstName", "Ivan"], 
//     ["lastName", "Ivanov"],
//     ["hireDate", "21.10.2015"]
// ];
// const res = new Map(employee)
// res.delete('hireDate');
// res.set("jobName", "IT PROG");
// console.log(Array.from(res))

//ex.3.6 В программе задан двумерный массив array. Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. Функция countString() должна выводить в консоль сообщение, как в примере.

// let array = [
//     // ["string","word"],["string","word"],["string","word"]];
//     [ "boolean", "true" ], 
//     [ "number", '4' ],
//     [ "string", "word" ],
//     [ "object", {}]
// ];

//решение только(!!!) если названия ключей не совпадают. 
// function countString() {
//     let count = 0;
//     let array1 = new Map(array);
//     for ([key, val] of array1) {
//         if (typeof(val) === "string") {
//           count ++;
//         }
//     };
//     return console.log('Количество строковых элементов в именованном массиве: ' + count);
// }
// countString();

// v.2

// let array = [
//     ["string","word"],["string","word"],["string","word"]];
    // [ "boolean", "true" ], 
    // [ "number", '4' ],
    // [ "string", "word" ],
    // [ "object", {}]
// ];

// const countString = function(arr) {
//     let count = 0;
//     for (let item of arr) {
//         if(typeof item[1] === 'string') {
//             count++;
//         }
//     }
//     console.log('Количество строковых элементов в именованном массиве: ' + count);
// }
// countString(array);

// ex.4.1 Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.

// const pet_1 = { 
//     name: "Шарик", 
//     age: 10,
// };
// const pet_2 = { 
//     name: "Жучка", 
//     age: 5,
// };

// function getName(){
//     return  `${this.name} ${this.age}`
// }
// const pet1 = getName.bind(pet_1);
// const pet2 = getName.bind(pet_2);
// console.log(pet1() + '; ' + pet2());

//4.2 Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi()

// const input = {
//     id: 1,
//     value: "Добрый вечер",
//     firstName: "Григорий",
//     lastName: "Стрельников" 
// }

// function sayHi() {
//     console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
// }

// sayHi.call(input);

// 4.3.

// const pet = { 
//     name: "Диксон", 
//     breed: "Немецкая овчарка" 
// }

// function getDescription() { 
//     console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
// }
// getDescription =  getDescription.bind(pet)();

// ex.4.4 Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.

// const props= { 
//     name: "Анатолий", 
//     age: 29,
//     sayHi: () => "привет"
// };
// function getValue() {
//     let str = '';
//     for (let key in this) {
//         if(typeof this[key] !== 'function') {
//             str += `${key}: ${this[key]}, `
//         }

//     }
//     str = str.slice(0, str.length - 2);
//     console.log(`Значения свойств объекта props (${str})`)
// }
// getValue = getValue.call(props);

// ex.4.5

const hero = { 
    nick: "FirstHero", 
    position: "Лагерь",
    getPosition: function getPosition(){
        console.log("Позиция героя: " + this.position)
    }   
}
