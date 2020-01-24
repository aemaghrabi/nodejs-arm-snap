const { addUser, listUsers } = require('./db');

module.exports = {
  addUser: function(username, cmdObj) {
    console.log(`Adding user ${username} to list`, cmdObj);
    addUser(username, (results, err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
      }
    });
  },
  listUsers: function(cmdObj) {
    console.log('Listing users', cmdObj);
    listUsers((err, row) => {
      if (err) {
        console.error(err);
      }
      console.log('Result', JSON.stringify(row));
    });
  }
};
