let user: string;
let age: number;
let isLoggedIn: boolean;

let books: string[] = [];

// If we don't set this as a empty array then we can't write push method like below;
books.push('Clean code')
// books.push(45);

// Union type array
let unionExample: (string | number | object)[] = [];

unionExample.push(45);
unionExample.push('String')
// unionExample.push(true) can't do this, boolean type is not include in out union type 

let uuid: number|string; // We don't need parenthesis here; Only need when we declare array

//Object
let book: object;

book = { name: 'book name', rating: 8, author: 'name' };

let dog: {
  name: string,
  height: number,
  color: string,
  canBarkLoud: boolean,
}

dog.name = 'Tommy';
// dog.leg we can't do this