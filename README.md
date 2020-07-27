# This repository contains the final exercises I did for each module of the JavaScrip ES6 course on the RocketSeat platform

## Exercises: Module 01

**1) To test your knowledge with classes, create a class with the name "Admin", that class must extend a second class called "User".**  

**User class must receive two parameters in the constructor method, email, and password set then to other properties in class. The "Admin" class does not receive any parameters, but must pass the parent class email and password parameters and mark an "admin" property as `true` in the class.**

**Now with your formatted classes, add a method in the User class called isAdmin that returns whether the user is an administrator or not based on the `admin` property being `true` or not.**

```javascript
const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```
**2) From the following vector and using the array methods (map, reduce, filter and find):**

```javascript
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```
**2.1 Using the ```map```**  
Create a variable that contains all ages of users: [23, 15, 30]

**Using the ```filter```**  
Create a variable that has only users who work at Rocketseat and over 18 years old: [{name: 'Diego', age: 23, company: 'Rocketseat'}]

**2.3 Using ```find```**  
Create a variable that looks for a user who works for the Google company: ```undefined```

**2.4 Joining operations**  
Multiply the age of all users by two and then perform a filter on users who have maximum 50 years:

**3) Convert the functions to the following code snippets in Arrow Functions:**

```javascript
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});
```

```javascript
// 3.2
// Tip: Use a constant for function
const user = { name: 'Diego', age: 23 };
function showAge(usuario) {
 return usuario.idade;
}
showAge(user);
```

```javascript
// 3.3
const name2 = "Diego";
const age2 = 23;

function showUser(name2 = 'Diego', age2 = 18) {
 return { name2, age2 };
}
showUser(name2, age2);
showUser(name2);
```

```javascript
// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }
```

**4) Destructuring Exercises**  

**Simple destructuring**

From the following object:
```javascript
onst company = {
    name: 'Rocketseat',
    address: {
        city: 'Rio do Sul',
        state: 'SC',
    }
};
```
Use the destructuring to transform the properties name, city and state into variables  

**Destructuring in parameters**  

In the following function:
```javascript
function Info(user) {
    return `${user.name} tem ${user.age} anos.`;
}
Info({ name: 'Diego', age: 23 })
```
Use the destructuring in the function parameters to search for the user's name and age separately and the function can only return:  
```javascript
return `${name} tem ${age} anos.`;
```
**5) Using the rest / spread operator (...) perform the following operations:**  

**5.1 Rest**  

From the array: const ```arr = [1, 2, 3, 4, 5, 6]``` , define a variable x that receives the first
position of the vector and another variable y that receives all the rest of the data.
```javascript
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```
Create a function that takes numerous parameters and returns the sum of them all:
```javascript
console.log(sum(1, 2, 3, 4, 5, 6)); // 21
console.log(sum(1, 2)); // 3
```
**5.2 Spread**  

From the object and using the spread operator:

```javascript
const user = {
    name: 'Diego',
    age: 23,
    address: {
        city: 'Rio do Sul',
        state: 'SC',
        country: 'Brasil',
    }
};
```
Create a user2 variable that contains all user data but named Gabriel.  
Create a user3 variable that contains all user data but with city Lontras.  

**6) Convert the following code snippet using Template Literals:**  
```javascript
const user = 'Diego';
const age = 23;
console.log('The user ' + user + ' is ' + age + ' years old');
```
**7) Use Object Short Syntax on the following object:**  
```javascript
const name = 'Diego';
const age = 23;
const user = {
    name: name,
    age: age,
    city: 'Rio do Sul',
};
```

## Exercises: Module 02  
**1) Create a file called ```functions.js``` with the following content:**
```javascript
export const age = 23;
export default class User {
 static info() {
 console.log('Testing');
 }
}
```
**1.1 Now in your main file, import only the User class renaming it to User Class and call the ```info ()``` function.**  
**1.2 In your main file, import the age variable and display it on screen.**  
**1.3 In your main file import both the class and the age variable and rename the age variable for ```UserAge```.**

## Exercises: Module 03  
Transform the following code snippets using asynchronous / wait:
```javascript
// Delay function triggers .then after 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function onePerSecond() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
onePerSecond();
```  
```javascript
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('User does not exist');
        })
}
getUserFromGithub('tatiana.mara');
getUserFromGithub('tatiana124123');
```  
```javascript
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repository does not exist');
            })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
```  
```javascript
const searchUser = user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('User does not exist');
        });
}
searchUser('tatiana.mara');
```
