const program = require('commander');

const { addUser, listUsers } = require('./user-controller');

program.command('add <username>').action(addUser);
program.command('list').action(listUsers);

program.parse(process.argv);
