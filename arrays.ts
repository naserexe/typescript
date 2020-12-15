let names = ['JavaScript', 'Typescript', 'LiveScript'];

names.push('C#');

// new value other than string is not going to be push to the array
// names.push(5);

console.log(names)

let mixedArray = ['string', 45, true];

// Now i can push all three value to this array
mixedArray.push(4)
mixedArray.push('Another String')
mixedArray.push(false)

// But if we try to push a Object then this will not going to work
// mixedArray.push({ name: 'zzu' })

// IMPORTANT THING -> In the mixed array I can change value of any index to other type
mixedArray[0] = 12;
mixedArray[1] = 'Changed number to string';


let newArray: number = 45;