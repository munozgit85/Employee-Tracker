const db = require('../../db/connection');

const allRole = `SELECT roles.id, roles.title, roles.salary, departments.name
AS department
FROM roles
LEFT JOIN departments
ON roles.department_id = department.id`;



const  roleName = [
    {
        type: 'input',
        name: 'roleName',
        message: 'What is the role name?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary? (Enter a NUMBER)'
    },
    {
        type: 'list',
        name: 'department',
        message: 'Choose the department for this role.',
        choices: ['Facilities','Laboratory','Medicine','Nursing','Administrative']
    }
];

const roleInsert = (({ roleName, salary, department }) => {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, (SELECT MAX(id) FROM departments))`;
    const params = [roleName, salary, department];
    db.query(sql, params);
});

 roleDelete = [
    {
        type: 'list',
        name: 'deleteRole',
        message: 'Which role would you like to remove?',
        choices: ['Janitor', 'Facilities Director', 'Lab Technician','Microbiologist', 'Physician', 'Pathologist', 'Nurse', 'Nurse Manager', 'Director of Finance','Chief Quality Officer']
    }
];

roleDeleteName = (({ deleteRole }) => {
    const sql = `DELETE FROM roles WHERE title = ?`;
    const params = [deleteRole];
    db.query(sql, params, (err, res) => {});
});

module.exports = {
    allRole,
     roleName,
    roleInsert,
     roleDelete,
    roleDeleteName
};