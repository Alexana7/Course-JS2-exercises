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

// const hero = { 
//     nick: "FirstHero", 
//     position: "Лагерь",
//     getPosition: function getPosition(){
//         console.log("Позиция героя: " + this.position)
//     }   
// }

// ex.5.1 Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта orders в виде объекта. Результат выведите в консоль.

// const order = {
//     productName: "Велосипед",
//     costomerName: "Саша",
//     salesName: "Петя",
//     totalPrice: 15000
// }

// const descriptor = Object.getOwnPropertyDescriptor(order,'totalPrice');
// console.log(descriptor)

// ex.5.2  Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.

// const employees = {
//     firstName: "Петя",
//     lastName: "Иванов",
//     ratePerDay: 2500,
//     workingDays: 5,
//     getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
// }
// function getKeys(obj) {
//     let res = '';
//     for (key in obj) {
//         if (typeof obj[key] !== 'function') { //проверка является ли метод функцией
//             res += `${key}, `                 // формируем строку с элементами чере                                 запятую и пробел
//         } else {
//             res;
//         }   
//     }
//     res = res.slice(0, res.length - 2); // убираем запятую и пробел у последнего  элемента строки
//     return res;   
// }
// res = getKeys(employees)
// console.log(res)

// ex.5.3 В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

// const firstName = "Александр";
// const lastName = "Петров";

// class User {
//     constructor (a,b) {
//         this.firstName = a;
//         this.lastName = b;
//     }
//     set fullName(str) {
//         let data = str.split(" ");
//         this.firstName = data[0];
//         this.lastName = data[1];
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// let user = new User(firstName, lastName);
// console.log(user.fullName);

// 5.4 В программе объявлены переменные name и phone, которые хранят строки. В name указано название заведения, а в phone — его номер телефона. Создайте класс Delivery со свойствами name и phone. Помимо описанных свойств, добавьте свойство validPhone, которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, свойство validPhone должно принять булевое значение false, в противном случае — true. Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. Получившийся экземпляр класса запишите в переменную deliveryName.

// let name = "Pizza";
// let phone = "81234567890";

// class Delivery {
//     constructor(name, phone) {
//         this.name = name;
//         this.phone = phone;
//         this.validPhone = /^\+/.test(phone)
//     }       
// }
// let deliveryName = new Delivery(name, phone);
// console.log(deliveryName.validPhone);

// ex.5.5 В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, значение которого класс принимает в качестве аргумента конструктора.
// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }
// class User extends Permissions {
//     constructor(name) {
//         super ();
//         this.name = name;
//     }
// }

// ex.5.6 В программе задан массив array, элементы которого имеют численное значение, и переменная num, которая является числом. Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array и значение переменной num. Функция должна найти минимальную сумму num элементов из значений массива array. Ответ выведите в консоль.

// const array = [2, 4, 7, 8, 1];
// const num = 2;
// function queue (num, ...array) {
//   array.sort((a, b) => a - b);
//   let res = 0;
//   num !== 0 ? res = array.slice(0, num).reduce((acc, val) => acc+ val) : res = 0; 
//  console.log(res) 
// }
// queue (num, ...array)


