//Exercise 1
/*Create a file called functions.js with the following content:*/
/*
export const idade = 23;

export default class Usuario {
 static info() {
 console.log('Apenas teste');
 }*/

//1.1
//Now in your main file, import only the User class renaming it to User Class and call the info () function;

import UserClass from '.functions';

UserClass.info();

//1.2
//In your main file, import the age variable and display it on screen;

import { age } from '.functions';

console.log(age);

//1.3
//In your main file import both the class and the age variable and rename the age variable for User Age.

import User, { age as userAge } from '.functions';
