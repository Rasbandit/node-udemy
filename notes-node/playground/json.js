// const obj = {
//   name: 'bob ross',
// };

// const stringObj = JSON.stringify(obj);
// console.log(typeof stringObj, stringObj, typeof obj, obj);

// const personString = '{"name": "bob ross", "age": 52}';

// const x = JSON.parse(personString);

// console.log(x);

const fs = require('fs');

const originalNote = { title: 'some title', body: 'some body' };

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

const note = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof note);
