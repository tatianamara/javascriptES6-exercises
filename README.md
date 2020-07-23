# javascriptES6-exercises
# This repository contains the final exercises I did for each module of the JavaScrip ES6 course on the RocketSeat platform

## Exercises: Module 01

**1) To test your knowledge with classes, create a class with the name "Admin", that class must
extend a second class called "User".
User class must receive two parameters in the constructor method, email, and password set then to other properties
in class. The "Admin" class does not receive any parameters, but must
pass the parent class email and password parameters and mark an "admin" property as
true in the class.**

**Now with your formatted classes, add a method in the User class called isAdmin that
returns whether the user is an administrator or not based on the admin property being true or not.**

```javascript
const User1 = new User('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```
