console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

const command = argv._[0];

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getOne(argv.title);
} else if (command === 'remove') {
  notes.removeOne(argv.title);
} else {
  console.log('command not recognized');
}
