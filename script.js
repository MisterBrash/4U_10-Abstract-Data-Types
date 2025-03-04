/**
 * ICS4U - Mr. Brash 🐿️
 * Abstract Data Types (custom types)
 *
 * Read the README.md and STACK.md files carefully.
 *
 * Author:
 *
 */

'use strict';

/* Example ADT of a 'person'
   We can also use 'let' instead of 'const' */
const account_owner = {
  firstName: "John",
  lastName: "Doe",
  age: 0,

  fullName: function() {
    return this.firstName + " " + this.lastName;
  },

  initials: function() {
    return this.firstName[0].toUpperCase() + this.lastName[0].toUpperCase();
  }
};


/*** Read the instructions
     and implement a Stack ADT ***/
const Stack = {

};
