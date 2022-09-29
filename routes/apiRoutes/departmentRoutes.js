const db = require('../db/connection.js');

const allDepartments = `SELECT * FROM departments`;

const departmentName = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the department name?'
    }
];

const departmentInsert = (({ deptName }) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = deptName;
    db.query(sql, params, (err, res) => {});
});

const getDepartmentCost = `
SELECT departments.name AS department, SUM(roles.salary) AS cost 
FROM employees
LEFT JOIN roles ON role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id 
GROUP BY department`;

departmentDelete = [
    {
        type: 'list',
        name: 'deleteDepartment',
        message: 'Choose the department that you would like to remove?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal', 'Human Resources']
    }
];

departmentDeleteName = (({ deleteDepartment }) => {
    const sql = `DELETE FROM departments WHERE name = ?`;
    const params = [deleteDepartment];
    db.query(sql, params, (err, res) => {});
});

module.exports = {
    allDepartments,
    departmentName,
    departmentInsert,
    getDepartmentCost,
    departmentDelete, 
    departmentDeleteName
};