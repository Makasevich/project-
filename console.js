// let message;

// if (login == 'Сотрудник ') {
//      message = 'Привет';
// } else if (login == 'Директор') { 
//      message = 'Здравствуйте';
// } else if (login == ''){
//      message = 'Нет логина';
// } else {
//      message = '';
// }


// let message  = (login == 'Сотрудник') ? 
// 'Привет': (login == 'Директор') ? 'Здравствуйте' : 
// (login == ' ') ? 'Не логина' : 'пустота';

// ||(или) - false - не выводим, true - выводим
// &&(и) - true - не выводим, fasle - выводим

// сначало &&(и)    потом ||(или)


// let ask = prompt('Your login');

// if(ask == null){ 
//      alert('Отмена')
// }
// else if(ask == 'admin') {
//     let password = prompt('Who is it');
//     if(password == 'Head'){
//          alert('Здравствуйте');
//     }
//     else if(password == null || password == ''){
//          alert('Отмена')
//     }

//     else {
//          alert('Неверный пароль');
//     }
    
// }
//  else {
//       alert('I don know you')
//  }

// let i = 0;
// while (i < 3) {
//      console.log(i);
//      i++;
// }j==0 

// for (let i =0; i < 3; i++){
// console.log(`number ${i}!`);
// }
     
// let i = 0;
// while(i < 3){
//      console.log(`number ${i++}`);
// }

// let num;

// do {
//      num = prompt('enter your number');
//      } while (num <=100 );

// let n = 10;

// nextPrime:
// for (let i = 2; i <=n; i++){
//      for (let j =2; j < i; j++){
//           if(i % j==0) continue nextPrime;
//      }
//      alert(i);
// }

// let i = +prompt('enter your number more than 100');
// for(i=0; i<=100; i++)
//     if(i<100) continue; {
//         alert('enter other number!') 
//     }

// let a = 3;

// switch (a) {
//     case 3:
//         alert('so many');
//         break;
//     case 2:
//         alert('to many');
//         break;
//         case 4:
//         alert('you are right')
//         break;
//     default:
//         alert('looser');
// }


// let a = 5;

// switch (a) {
//     case 4:
//         alert('true!');
//         break;
//         case 3:
//         case 5:
//             alert('not true');
//             alert('nothing true');
//             break;
//         default:
//             alert('game over!');
// }

// let arg = prompt('enter your number');

// switch (arg) {
//     case '0':
//     case '1':
//         alert('one or zero');
//         break;
//     case '2':
//         alert('two');
//         break;

//     case 3:
//         alert('never will happend');
//         break;
//     default:
//         alert('game over');
// }

// Вопрос к юре

// let browser = 'Chrdsaasdome';

// if(browser === 'Edge'){
//     alert('You have got the Edge!');
// }
// else if(browser === 'Chrome' || browser === 'Firefox' || browser == 'safari'){
//     alert('Okay we support these browsers')
//     console.log(browser)
// }
// else{
//     alert('We hope that this page looks ok');
// }


// const number = +prompt('Enter number from 0 to 3');

// switch(number){
//     case 0:
//         alert('Your number =0');
//         break;
//     case 1:
//         alert('Your number = 1');
//         break;
//     case 2:
//     case 3:
//         alert('Your number 2 or 3')
//         break;
// }

// let userName = 'vasia';

// function showMesage() {
//     userName = 'Petia';

//     let message = 'hello' + userName;
//     alert(message)
// }

// alert(userName);

// showMesage();

// alert(userName);

// function showMesage(a, b) {
//     alert(a + '-'+ b);
// }

// showMesage('artem', 'nastya');
// showMesage('olya', 'ivan');


// function showMesage(from, text) {
//     from = '*' + from + '*' ;
//     alert(from + '-' + text);
// }

// let from = 'artem';

// showMesage(from, 'hello');

// alert(from);

// function sum(a, b) {
//     return a + b;
// }

// let result = sum(1, 2);
// alert(result);



// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('your parents argee?')
//     }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//     alert ('you have');
// } else {
//     alert('you do not have')
// }




// function checkAge(age){
//     if (age > 18){
//         return true || confirm('parent know?')
//     }
// }

// function checkAge(age) {
//     return (age>18) ? true : confirm ('parent know?');
// }

// function min(a, b){ 
//     if (min < 5 ){
//         return a;
//     }
// }

// console.log function(min);

// for (let i = 0; i < 10; i++){

//     for (let j = 0; j < 10; j++){
//        if(j == 0) continue;
//         console.log(i, j, i * j);

//     }

// }

// function min(a ,b){
//     if (a<b){
//         return a;
//     }
//     return b;

// }

// console.log(min(1, 1));


// function pow(x, n){
//     if (n === 0){
//         return 1;
//     }
//     let b = x;
//     for(let i =1; i< n; i++){
//       b = b*x;
      
//     }
//     return b;
   
// }
// console.log(pow(15, 0));
    
// function checkAge(age) {
//     if (age > 18){
//         return true || confirm('parent know');
//     }
// }
  
// function checkAge(age) {

// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('parents know');
// }

// function min(a, b){
//     if(a<b){
//         return a;
//     } else {
//         return b
//     }
    
// }


// function pow(x, n){
//     let result = x;
    
//     for (let i = 1; i < n; i++) {
//         result = x*x;
//     }
//     return result
// }


// function sayHi() {
//     alert ('hello');
// }

// sayHi();

// let sayHi = function() {
//     alert('hello');
// }

// sayHi()


// СПРОСИТЬ У ЮРЫ!!!

// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert ('Do you argee');
// }

// function showCancel() {
//     alert('You cancel working')
// }

// ask('Do you agree', showOk, showCancel);

// let arr = [2, 4, 5];

// function multiplyBy3(x){
//     console.log(x*3)
// }

// arr.forEach(multiplyBy3);


// let func = (arg1, arg2, ...argN) => expression;
      
// =====

// let func = function(arg1, arg2, ...argN){
//     return expression;
// }


// let sayHi = () => alert('Hello!');

// sayHi();


// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };

// alert(sum(1,2));

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no()
// }

// ask('you agree?',
// () => {alert('agree');},
// () => {alert('disargee');}
// );


// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// let a = [1,2,'artem', true];

// console.log(a[2]);

// let b = [
//     'artem',
//     2,
//     true,
//     function artem() {
//         console.log('my name is artem')
//     }
// ]

// console.log(b.length)
// let i;

// for (let i = 1; i<5; i++) {
//     console.log(i)
// }

//  if (n < 0);
//  alert(`Степень ${n} не поддерживается`)

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result = result*x;
//     }
//     return result;
// }
    


// console.log(pow(3,4));


// let user = {
//     name: 'John', 
//     age: 30,
//     'aaa aaa': 20
// }

// user.isAdmin = true;

// alert( user["aaa aaa"]);


// let user = {
//     name: 'John',
//     age: 30
// };

// let key = prompt('what you want to know?');

// alert(user[key]);

// let fruit = prompt('What fruit you want');

// let bag = {
//    [fruit]: 5,
// };

// alert(bag.apple);

// function makeUser(name, age){
//     return {
//         name: name,
//         age: age
//     }
// }

// let user = makeUser('John', 30);
// alert(user.name);

// let user = {
//     name: 'John',
//     age: 30
// }

// alert('age' in user);
// alert('ddd' in user);


// let user = { 
//     name: 'John',
//     age: 30,
//     isAdmin: true
// };

// for (let key in user){


// alert(key);

// alert(user[key]);
// }



// let codes = {
//     '49': 'abc',
//     '22': 'abcd',
//     '33': 'abcde',
//     '1': 'a',
// };

// for (let code in codes) {
//     alert(code);
// }



// let user = {
// name: 'john',
// surname: 'Smith',
// }

// user.surname = 'pete';
// delete user.name

// console.log(user)

// let schedule = {
//     name: 'asd'
// };

// alert( isEmpty(schedule) ); 

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); 


// const user = {
//     name: 'John'
// };

// user.name = 'pete';

// console.log(user.name);



// let user = {
//     name: 'John',
//     surname: 'Smith'
// }

// user.name = 'pete';

// delete user.name;

// console.log(user.name)


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };


// for(let sum in salaries){
  
   
// console.log(salaries[sum]);
// }



// let sum ;

// sum = salaries.John + salaries.Ann + salaries.Pete;

// console.log(sum);


// function isEmpty(obj){
// for(let key in obj){
   
// return false;
// }
// return true;

// }

// function isEmpty(obj){
//     let count = 0;
//     for(let key in obj) {
//         count= count+1;
//     }
// if (count == 0){
//     return true
// }
//     return false;

// }

// let schedule = {

// };

// console.log( isEmpty(schedule) ); 

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) );


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // ключи
//     alert( key );  // name, age, isAdmin
//     // значения ключей
//     alert( user[key] ); // John, 30, true
//   }


// let a = 1;
// let b = a;
// let c = {
//     name: 1,
//     name1: 'artem'
// }

// let d = c;

// a = 5;

// console.log(a, b)

// d.name = 2;
// c.name1 = 'yulia'
// console.log(c, d);

// function isEmpty(obj) {
//     for ( let key in obj){
//         return false;
//     }
//     return true;
// }



// let schedule = {};

// alert( isEmpty(schedule) ); 

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) );




// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;

// for (let key in salaries) {
//     sum = sum + salaries[key];
// }

// console.log(sum);

// function multiplyNumeric(obj) { 
//     for (let key in obj) {
//         if (typeof obj[key]== 'number'){
//             obj[key]*=2;
//         }
//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);
  
//   // после вызова функции
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

//   console.log(menu)

// let user = {
//     name: 'artem'
// };

// let admin = user;

// admin.name = 'Pete';

// console.log(user)
// console.log(admin)

// let user = {
//     name: 'artem',
//     age: 30
// }

// let clone = {};

// for (let key in user) { 
//     clone[key] = user[key];
// }
// clone.name = 'pete'

// let user ={
//     name:'artem'
// };

// let permissions1 = {canView: true};
// let permissions2 = {canEdit: true};
// let abc = {
//     age: 45,
//     country: 'ukraine'
// }

// Object.assign(user, permissions1,abc)

// console.log(user)

// let user = {
//     name: 'artem',
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = Object.assign({}, user);

// console.log(user.sizes === clone.sizes)

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//     return {
//         father: man,
//         mother: woman
//     }
// }

// let family = marry({
//     name: ' artem'
// },{
//     name: 'ann'
// });

// console.log(family);


// let user = {
//     name: 'Pete',
//     age: 30
// };
// user.sayHi = function() {
//     console.log('good day!')
// };

// user.sayHi();

// let user = {
//     name: 'Pete',
//     age: 30,

//     sayHi() {
//         console.log(this.age);
//     }
// };

// user.sayHi();

// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   };
  
//   user.go()

// let obj, method;

// obj = {
//     go: function(){
//         console.log(this);
//     }
// }

// obj.go();
// (obj.go)();
// (method = obj.go) ();
// (obj.go || obj.stop) ();

// let calculator = {
// sum() {
//     return this.a + this.b;
// },

// mul(){
//     return this.a * this.b;
// },

// del(){
//     return this.a / this.b;
// },

// read() {
//     this.a = +prompt('Enter you number 1!');
//     this.b = +prompt('Enter your number 2!');
// }

// };


// calculator.read();
// alert( calculator.sum());
// alert( calculator.mul());
// alert( calculator.del());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function() {
//         console.log(this.step);
//     }
// };

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User('Pete');

// alert(user.name);
// alert(user.isAdmin);


// function User() {
//     console.log(new.target);
// }

// User();

// new User();

// 

// function Calculator () {
//     this.read = function() {
//         this.a = +prompt('Firsdt');
//         this.b = +prompt('Second');
//     };
//     this.sum =function() {
//         return this.a + this.b
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }



// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function Accumulator(startingValue) {
//  this.value = startingValue;

//  this.read = function() {
//      this.value = +prompt('How many?')
//  }
// }


// let accumulator = new Accumulator(1); 

// accumulator.read(); 
// accumulator.read(); 

// alert(accumulator.value);


// let amount = 10;
// let cookiesPrice = 7;
// let candyPrice = 8;
// let rest = amount - cookiesPrice;

// if(rest >= candyPrice){
//     console.log('i have enought money')
// }else {
//     console.log('i have not enought money')
// }

// const a = 5;
// const b = 8;

// const perimeter = 2 * a + 2 * b;
// const square = a * b;

// console.log(perimeter);
// console.log(square);

// function printAukleInfo(a, b) {
//     const perimeter = 2 * a + 2 * b;
// const square = a * b;

// console.log(perimeter);
// console.log(square);
// }

// printAukleInfo(5,5);

// printAukleInfo(10,2);


// function buildHouse(numberOffloors) {
//     const house = `${numberOffloors}-floors house`;

//     return house;
// }

// const smallHouse = buildHouse(2);
// const bigHouse = buildHouse(9);

// console.log(smallHouse);
// console.log(bigHouse);

// function whichType(a) {
//     return(a%2===0)
// }

// const whichType = function(a) {
//     return(a%2===0)
// }


// console.log(whichType(3));


// let age = 17;

// if (age > 18) {
//     console.log("Cool");
// }else if(age<18) {
//     console.log('You can not');
// }

// const shortTermCost = 50;
// const weekCost = 40;
// const longTermCost = 30;

// console.log(
//     getRentalPrice(2),
//     getRentalPrice(5),
//     getRentalPrice(10)

// );

// function get


// let age = 19;
// let message = (age > 18) ? 'Adult' : 'Child';

// console.log(message);


// function getLargestExpressionResult (a, b){
//     let result = a + b;
//     if(result < a-b){
//     result = a - b;
//      console.log(result)
//     return result
//     }
//     if(result < a/b){
//     result = a/b;
//      console.log(result)
//     return result
//     }
//     if(result < a*b){
//       result = a*b
//        console.log(result)
//       return result;
//     }
   
//   }
  
//   getLargestExpressionResult(10,5);

// for( let myAge = 0; myAge <=5; myAge++) {
//     console.log('Happy', myAge)
// }
// let sum = 0;

//  for (let i = 3; i <=15; i++) {
//      sum +=i
//      console.log(i)
//  }

//  console.log(sum)

// function printNumbersWithStep(N, step) {
//     for (i=1;i<=N;i+=step) {
//       console.log(i);
//     }
//   }

//   printNumbersWithStep(7,3)


// function printNumbersBackwards(N) {
//     for(let i=N; i>=1;i--)
//     console.log(i);
//     }
    
//     printNumbersBackwards(5);

// function getDrinks(numberOfGuests) {
//     if(numberOfGuests ===0){
//       return 0;
//     }
//     let sum=0;
  
//       for(let i=1;i<= numberOfGuests; i++){
//          sum= sum+i;
//       }
      
   
//     return sum;
//   }
  
//   getDrinks(2)

// function getDrinksWithStep(numberOfGuests, step) {
//     if(numberOfGuests===0){
//       return 0;
//     }
//     let sum=0;
//   for(let i=1;i<=numberOfGuests;i+=step){
//     sum+=i
//     }
//     return sum;
//   }


// for(let i =1;i<=100;i++ ){
//     console.log(i)

// for(let i=0;i<=100;i=i+2){
//     console.log(i)
// }

// for(let i = 654;i>=0;i--){
//     console.log(i);
// }

// for(let i =1;i<=9;i=i+1){
//     let sum = 7*i;
//     console.log(sum); 
    
// }
// let a = 'artem';
// let b = 'artem1';

// const shortest = (a.length > b.length) ? 'first' : 'second';

// console.log(shortest)



// let str = 'abcdefg';

// str[2]='Q';////нельзя так . Строку ньльзя изменять.

// console.log(
//     str[0],
//     str.charAt(2)

// );

// console.log(
  
//     str.charAt[20]
// )


// const word = 'Hello world';

// for(let i =0; i< word.length; i++){
//     console.log(word[i])
// }

// for(let letter of word) {
//     console.log(letter)
// }


// const word = 'abcde';
// const part = 'bc';//подстрока

// console.log( 
//     word.includes(part),//метод поиска подстроки в строке 
//     word.indexOf(part),//метод - посмотреть с какого индекса начинается строка
//     word.indexOf(part),//поиск с конца 
//     word.indexOf(part),//строка начинается с заданой ПАРТ.
//     word.indexOf(part),// заканчивается с заданой ПАРТ. 
// )


// let message = 'Hello, Misha!';
// let upperMessage = message.toUpperCase();//метод - вывод с большой буквы
// let lowerMessage = message.toLocaleLowerCase();//метод - с маленькой буквы 

// console.log(upperMessage);
// console.log(lowerMessage);
// console.log(message)

//поиск телефона
// const model ='Apple iPhone 11';
// const search = 'iph';

// const condition = model.toLocaleLowerCase().includes(search.toLocaleLowerCase());

// if(condition) {
//     console.log('found');
// }

//метод получения части строки- substr, substring, slice

// const message = '0123456789';

// console.log(
//     message.substr(3,5),// начинаю с индекса 3 взяли 5 символов 
//     message.substring(3,5),// с индекса 3 до 5(не включая 5)
//     message.slice(3,5)// похож на стринг. позволяет работать с отрицательными аргументами

//     )

//превратить число в строку
// const x = 123456;

// console.log(
//     String(x),
//     '' + x,//конкатенация способ
//     `${x}`     //интерполяция способ
// )

//как найти ошибку в задаче

// const fullName = 'Artem Makasevich';
// console.log(
//    fullName.indexOf('Ad')
// )

// let sum = 'Misha';
// for(let i = 0; i<sum.length;i++){
//     console.log(sum[i])
// }

//считаем количество пробелов 

// const text = 'how many  someting';
// let spacesCount = 0;

// for(let i = 0;i<text.length;i++){
//     if(text[i]===' '){
//       spacesCount++;
//     }
// }
// console.log(spacesCount)

//перебрать все символы в строке 
//  const sum = 'artem s '
//  let Count = 0
//   for(i=0;i<sum.length;i++){
//     if(sum[i]===' '){
//        Count++;
//     }  
//   }
// console.log(Count);

//перебрать символы с помощью конс оф 
// const name = 'artem1';

// for(const letter of name) {
//     console.log(letter);
// }

// function search(text,part) {
//     const normalizedText = text.toLowerCase();
//     const normalizedPart = part.toLowerCase();

//     return normalizedText.includes(normalizedPart);
// }

// console.log(
//     search('misha', 'm')
// )

// function countMs(text) {
//     let count = 0;
//     for(const letter of text.toLowerCase()){
//       if(letter === 'm' ){
//         count++
//       }
//     }
//     return count;
//   }


// function removeVowels(doc) {
//     let result ='';
//     for(let count of doc){
//       if(!['a','e','i','o','u','y','A','E', 'I', 'O', 'U','Y'].includes(count) ){
//         result = result+count;
//       }
      
//     }
//     return result;
//   }


// function makeAbbr(words) {
    // let letter=words.split(' ');
   
    // let firstLetter = letter.map(function(x){
    //     return x[0].toUpperCase();
    // })
   
    // let result = firstLetter.join('')
   
// return words.split(' ').map(function(x){
//     return x[0].toUpperCase();
// }).join('');
//   }

//   console.log(makeAbbr('nat sam tuf'))


// function makeAbbr(words) {
//     let result = words[0];
//     for(let i=0;i<words.length;i++){
//       if(words[i] === ' '){
//           result = result + words[i+1]
//       }
  
//     }
//     return result.toUpperCase();
//   }

//вывод строк наоборот
// function decryptMessage(message) {
//     let result='';
//     for(let i =message.length-1;i>=0;i--){
//       console.log(message[i])
//         result = result + message[i]
//       console.log(result);
//     }
//    return result;
//   }
//   decryptMessage('abc');

// function isWerewolf(target) {
//     let direct = ''
//   for(let i of target) {
//       direct=direct+i.toLowerCase() ;
//     console.log(direct)
//   }

  
//   let reversed = '';
//       for(let i =target.length-1;i>=0;i--){
//           reversed = reversed + target[i].toLowerCase()
//         console.log(reversed);
//       }
     
//     if(direct === reversed){
//     return true
//   }else{
//     return false
//   }
//   }
  
//   console.log(isWerewolf('Rotator'))

//сравнение слова и перевертня 
// function isWerewolf(target) {
//     let list = ' ,?.+:-$';

//    let stroka = '';
//    for(let a = 0;a < target.length;a++){
//        if(!list.includes(target[a]) ){
//            stroka = stroka+target[a]
//            console.log(stroka)
        
//        }
//    }

  
//   let reversed = '';
//       for(let i =stroka.length-1;i>=0;i--){
//           reversed = reversed + stroka[i]
    
//       }
     
//     return (stroka.toLowerCase() === reversed.toLowerCase())
  
//   }
  
//   console.log(isWerewolf('eva, can i see bees in a cave'))
 

  //сравнение слова и перевертня 
//   function isWerewolf(target) {
   
//     let stroka = '';
//        for(let a = 0;a < target.length;a++){
//            if(target[a]!== ' ' && target[a]!== ',' && target[a]!== '?'){
//                stroka = stroka+target[a]
//                console.log(stroka)
            
//            }
//        }
    
      
//       let reversed = '';
//           for(let i =stroka.length-1;i>=0;i--){
//               reversed = reversed + stroka[i]
        
//           }
         
//         return (stroka.toLowerCase() === reversed.toLowerCase())
      
//       }


// function getSuccessRate(statistic) {
//     let check = 0;
//     for(i=0;i<statistic.length;i++){
//       console.log(check)
//       if(+statistic[i]===1){
//         check+=100;
        
//       }
//     }
//     return Math.round(check/statistic.length)
//     }

//     console.log(getSuccessRate('11000'))




//МАССИВЫ
// let massive = [10,20,30,40];

// for(let i =0;i<massive.length;i++){
//     console.log(massive[i])
// }

// const numbers2 = new Array(10, true, 12, 'abc');

// console.log(numbers2)


// function createArray(N) {
//     let numbers = [];
//     for(let i=1;i<=N;i++){
//       numbers=numbers+push(i)
//       console.log(number)
//     }
//     if(N=0){
//       return 0;
//     }
//     return numbers;
   
//   }
//   createArray(5)



// function createArray(N) {
//     let numbers = [];
//     for(let i=1;i<=N;i++){
//       numbers.push(i)
//     }
//     // if(N===0){
//     //   return [];
//     // }
//     return numbers;
   
//   }



// function makeStickers(detailsCount, robotPart) {
//     if(detailsCount === 0){
//       return [];
//     }
//     let massive = [];
    
//     for(let i =1;i<=detailsCount;i++){
      
//       massive.push(`${robotPart} detail #${i}`)
     

//     }
//     return massive
//     }
    
//     console.log(makeStickers(5, 'Body'))


//помножити кожный элемент на два
// function doublePower(currentPowers) {
//     let numbers = [];
//     for(let i=0;i<currentPowers.length;i++){
//        numbers.push(currentPowers[i]*2)
      
//     }
//     console.log(numbers)
//     return numbers;
//  }

//  doublePower([0,4,10]);

// проверка чисел на увеличение
// function isSorted(boxNumbers) {
//     if(boxNumbers.length<=1){
//         return true;
//     }
//     if(boxNumbers.length===2){
//         return boxNumbers[0]<=boxNumbers[1];

//     }
   
//     for(let i=1;i<boxNumbers.length-1;i++){
//       if(boxNumbers[i]>=boxNumbers[i-1] && boxNumbers[i]<=boxNumbers[i+1]){ 
      

//       }
//       else{
          
//           return false
//       }
      
//     }
//   return true
//  }
//  console.log(isSorted([3, 0,10]));

//перетворення команд руху
// function getLocation(coordinates, commands) {
//     let x = coordinates[0];
//     let y = coordinates[1]
   
//    for ( let i = 0; i<=commands.length; i++)
//     if(commands[i] === 'left'){
//       x = x - 1;
//     }else if(commands[i] === 'right'){
//         x = x + 1;
//     }else if(commands[i] === 'back'){
//         y =  y - 1;
//     }else if(commands[i] === 'forward'){
//         y =  y + 1;
//     }
//    console.log(x, y)
//     return x, y
//   }

//   console.log(getLocation([0,0], ['forward','right']));
//   console.log(getLocation([2,3], ['back','back','back','right']));
  

//вычисление добавления проценка каждого года
// function getPlan(startProduction, numberOfMonths, percent) {
//     let goals = [];
//     let currentProduction=startProduction;
  
//     for(let i =0;i<numberOfMonths;i++){
//       currentProduction = currentProduction +  ((currentProduction /100) * percent);
//       goals.push(currentProduction);
//       console.log(currentProduction);
//     }
//     return goals;
//   }
//   console.log(getPlan(200,3,50))


// мінімальне, максимальне, середне значення
// function getSpeedStatistic(testResults) {
//     if(testResults.length === 0){
//          return [0, 0, 0]
//        }
       
//       let max = testResults[0];
//       let min = testResults[0];
//       let sum = 0;
   
  
//       for(let i=0;i<testResults.length;i++){
//           sum = sum + testResults[i];
         
//           console.log(1,sum)
  
//        if(max < testResults[i]){
//          max = testResults[i]
//       //    console.log(max)
//        }else if(min > testResults[i]){
//            min= testResults[i]
//        }
       
       
//       }
//       return [min, max, Math.floor(sum/testResults.length)]
//    }

//порівнює два роботи 
// function compareRobots(firstRobotResults, secondRobotResults) {
//     let sum = 0;
//     let sum1 = 0;
  
//     for(let i =0;i<firstRobotResults.length;i++){
//        sum = sum + firstRobotResults[i];
//        console.log(sum)
//     }
//     for(let i =0;i< secondRobotResults.length;i++){
//        sum1 = sum1 + secondRobotResults[i]
//        console.log(sum1)
//     }

//     if(sum > sum1){
//         console.log( 'First robot for sale!')
//     }if( sum1 > sum){
//         console.log('Second robot for sale!')
//     }if(sum === sum1) {
//         console.log('Both robots for sale!')
//     }
    
//   }
//   compareRobots([12, 4, 13], [1, 1, 4, 5, 12])




//проверка
// function checkNumber(number) {
    
//     let positiveNew;
//     if(number > 0){
//        positiveNew = true

//     }else{
//          positiveNew = false
//     }
//     let doubleNumberNew;

//      if(number % 2 === 0){
//       doubleNumberNew = true;
//     }else{
//         doubleNumberNew = false;
//     }
//     let divisionTenNew;
//     if (number % 10 === 0){
//       divisionTenNew = true
//     }else{
//         divisionTenNew = false
//     }
//     return [positiveNew, doubleNumberNew, divisionTenNew]
//  }

// или так проверка

// function checkNumber(number) {
    
    // let positiveNew = number > 0;
    
    
    // let doubleNumberNew = number % 2 === 0;

     
    // let divisionTenNew = number % 10 === 0;
    
//     return [number>0, number % 2 === 0, number % 10 === 0]
//  }

//  console.log(checkNumber(0))



// Реалізуй функцію getArraysSum, яка приймає два масива чисел
//  однакової довжини, та повертає суму усіх елементів цих масивів.
// function getArraysSum(arr1, arr2) {
//     let firstArray=0;
    
//     for(let i = 0; i < arr1.length; i++){
//         firstArray = firstArray+arr1[i];
        
//     } 
//     let secondArray=0;
//     for(let i = 0;i<arr2.length;i++){
//         secondArray = secondArray+arr2[i];
        
//     }
//    return firstArray+secondArray;
//    }
   
//    console.log((getArraysSum([2, 2], [2, 2])))



// function getArraysSum(arr1, arr2) {
//     let firstArray=0;
    
    
//     for(let i = 0; i < arr1.length; i++){
//         firstArray = firstArray+arr1[i]+arr2[i];
        
        
//     } 
    
//    return firstArray;
//    }
   
//    console.log((getArraysSum([2, 10,2,10], [2, 10,4,5])))

// недоделаная задача матеакадеми
// function combineArrays(first, second) {
//     let first1=0;
//     let second1=0;
//     for(let i =0;i<first.length;i++){
//       first1=first1+first[i]+ second[i]
//       second1=second1+second[i]
//       console.log(first1)
     
//     } 
//     console.log(first1)
//     console.log(second1)
//   }
  
//   console.log(combineArrays([1,2,3], [4,5,6]))

// alert('hello')

const answers = [];

// answers[0] = prompt('Как ваше имя?')
// answers[1] = prompt('How old are you?')
// answers[2] = prompt('Where are you from?')

console.log(typeof(answers))
console.log('Artem');