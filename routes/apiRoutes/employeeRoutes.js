const db = require('../../db/connection');

const employeeByManager = `
SELECT e.id, e.first_name, e.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
LEFT JOIN roles ON e.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id
ORDER BY manager`;

const employeeByDepartment = `
SELECT e.id, e.first_name, e.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, CONCAT_WS(' ', m.first_name, m.last_name) AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id
LEFT JOIN roles ON e.role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id
ORDER BY department`;

const  employeeName = [
    {
        type: 'input',
        name: 'first',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Janitor', 'Facilities Director', 'Lab Technician','Microbiologist', 'Physician', 'Pathologist', 'Nurse', 'Nurse Manager', 'Director of Finance','Chief Quality Officer']
    },
    {
        type: 'confirm',
        name: 'confirmManager',
        message: 'Does this employee have a manager?',
        default: true
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: ['Marlene McClennan', 'Michael Gifts', 'Shree Kuwas', 'Eva Ladd', 'Samuel Reid'],
        when: ({ confirmManager }) => {
            if (confirmManager) {
                return true;
            } else {
                return false;
            }
        }
    }
];

const getId = (employeenamebyID) => {
    let employeeId;

    if (employeenamebyID === 'Marlene McClennan') {employeeId = 1}
    if (employeenamebyID === 'Jackie Chapman') {employeeId = 2}
    if (employeenamebyID === 'Michael Gifts') {employeeId = 3}
    if (employeenamebyID === 'Evadney Ramsook') {employeeId = 4}
    if (employeenamebyID === 'Shree Kuwas') {employeeId = 5}
    if (employeenamebyID === 'Zach Munoz') {employeeId = 6}
    if (employeenamebyID === 'Eva Ladd') {employeeId = 7}
    if (employeenamebyID === 'Sebastian Sherfey') {employeeId = 8}
    if (employeenamebyID === 'Samuel Reid') {employeeId = 9}
    if (employeenamebyID === 'Shane James') {employeeId = 10}

    return employeeId;
}

const employeeInsert = (({ first, last, role, manager, confirmManager }) => {
    let managerId;

    if (confirmManager === false) {
        managerId = null;
    } else {
        managerId = getId(manager);
    }
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, (SELECT id FROM roles WHERE title = ?), ?)`;
    const params = [first, last, role, managerId];
    db.query(sql, params, (err, res) => {});
});

const employeeupdateName = [
    {
        type: 'list',
        name: 'employee',
        message: 'Which employee would you like to update?',
        choices: ['Marlene McClennan', 'Jackie Chapman', 'Michael Gifts', 'Evadney Ramsook', 'Shree Kuwas', 'Zach Munoz', 'Eva Ladd', 'Sebastian Sherfey', 'Samuel Reid', 'Shane James']
    },
    {
        type: 'list',
        name: 'newRole',
        message: 'What is their new role?',
        choices: ['Janitor', 'Facilities Director', 'Lab Technician','Microbiologist', 'Physician', 'Pathologist', 'Nurse', 'Nurse Manager', 'Director of Finance','Chief Quality Officer']
    },
    {
        type: 'confirm',
        name: 'confirmUpdateManager',
        message: "Does this employee's manager need to be updated?",
        default: true
    },
    {
        type: 'list',
        name: 'newManager',
        message: "Who is the employee's new manager?",
        choices: ['Marlene McClennan', 'Michael Gifts', 'Shree Kuwas', 'Eva Ladd', 'Samuel Reid'],
        when: ({ confirmUpdateManager }) => {
            if (confirmUpdateManager) {
                return true;
            } else {
                return false;
            }
        }
    }
]

const employeeUpdateReturn = (({ newRole, employee, confirmUpdateManager, newManager }) => {
    const employeeId = getId(employee);

    let managerId;
    if (confirmUpdateManager === true) {
        managerId = getId(newManager)
    }

    const sql = `UPDATE employees SET role_id = (SELECT id FROM roles WHERE title = ?), manager_id = ? WHERE id = ?`;
    const params = [newRole, managerId, employeeId];
    db.query(sql, params, (req, res) => {})
});

employeeDelete = [
    {
        type: 'list',
        name: 'deleteEmployee',
        message: 'Which employee would you like to remove?',
        choices: ['Marlene McClennan', 'Jackie Chapman', 'Michael Gifts', 'Evadney Ramsook', 'Shree Kuwas', 'Zach Munoz', 'Eva Ladd', 'Sebastian Sherfey', 'Samuel Reid', 'Shane James']
    }
];

employeeDeleteName = (({ deleteEmployee }) => {
    const sql = `DELETE FROM employees WHERE CONCAT_WS(' ', first_name, last_name) = ?`;
    const params = [deleteEmployee];
    db.query(sql, params, (err, res) => {});
});

module.exports = {
    employeeByManager,
    employeeByDepartment,
    employeeName,
    employeeInsert,
    employeeupdateName,
    employeeUpdateReturn,
    employeeDelete,
    employeeDeleteName
};