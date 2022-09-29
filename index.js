const db = require('./db/connection');
const startMenu = require('./routes/apiRoutes/inquire');

db.connect(err => {
    if (err) throw err;
})

startMenu();