const sqlite3 = require('sqlite3').verbose();

const { existsSync } = require('fs');

const db = new sqlite3.Database('./db.sqlite3');

if (!existsSync('./db.sqlite3')) {
  db.serialize(() => {
    db.run(
      'CREATE TABLE "users" ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,"username" TEXT)'
    );

    var stmt = db.prepare('INSERT INTO users (username) VALUES (?)');
    for (var i = 0; i < 10; i++) {
      stmt.run('User-' + i);
    }
    stmt.finalize(e => {
      if (e) {
        console.error(e.message);
      } else {
        console.log('Db Finalized');
      }
    });
  });
}

module.exports = {
  addUser: (username, cb) => {
    db.run('INSERT INTO users (username) VALUES (?)', username);
  },
  listUsers: cb => {
    db.each('SELECT * FROM users', cb);
  }
};
