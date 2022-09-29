const db = require('./db/connection.js');
const startMenu = require('./routes/apiRoutes/inquire');

db.connect(err => {
    if (err) throw err;
})

startMenu();