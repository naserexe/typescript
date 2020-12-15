let user = {
  name: 'naser',
  email: 'naser.exe@hotmail.com',
  age: 24,
};

// I can change the value of those keys but I cant change type of those keys
user.name = 'Abdullah'; // I can do this
// user.age = 'string' // I can't do this because this is different type when we initialized the object
// Also i can't change the type of user it always should be an object and cannot add or remove any keys in that objects