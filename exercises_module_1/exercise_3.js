//Exercise 3
/*Convert the functions to the following code snippets in Arrow Functions:*/

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

//converting to arrow function
const newArr = arr.map(item => item + 10);

// 3.2
// Tip: Use a constant for function
const user = { name: 'Diego', age: 23 };

function showAge(usuario) {
 return usuario.idade;
}
showAge(user);

//converting to arrow function
const func = user => user.age;
console.log(func(user))

// 3.3
const name2 = "Diego";
const age2 = 23;

function showUser(name2 = 'Diego', age2 = 18) {
 return { name2, age2 };
}
showUser(name2, age2);
showUser(name2);

//converting to arrow function
const newShowUser = (name = 'Diego', age = 18) => ({ name, age });
console.log(newShowUser(name2, age2));
console.log(newShowUser(name2));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }
   
//converting to arrow function
const newPromise = () => new Promise(resolve, reject => resolve());
