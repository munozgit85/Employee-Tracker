const inquirer = require('inquirer');
const { allDepartments,
    departmentName,
    departmentInsert,
    getDepartmentCost,
    departmentDelete, 
    departmentDeleteName } = require('../apiRoutes/departmentRoutes');

const { allRole, 
        roleName, 
        roleInsert, 
        roleDelete, 
        roleDeleteName } = require('../apiRoutes/roleRoutes');

const { employeeByManager, 
        employeeByDepartment, 
        employeeName, 
        employeeInsert, 
        employeeupdateName, 
        employeeUpdateReturn, 
        employeeDelete, 
        employeeDeleteName} = require('../apiRoutes/employeeRoutes');    



const db = require('../../db/connection');

const startMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please choose whether you would like to view all departments, roles, or employees ( by manager or department)?',
            choices: [
                new inquirer.Separator('-----VIEW ALL TABLES-----'),
                'View all departments',
                'View all roles',
                'View all employees by manager',
                'View all employees by department',
                'View utilized budget by department',
                new inquirer.Separator('-----ADD TO TABLES-----'),
                'Add a department',
                'Add a role',
                'Add an employee',
                new inquirer.Separator('-----UPDATE TABLES-----'),
                'Update an employee role',
                new inquirer.Separator('-----REMOVE COLUMNS FROM TABLES-----'),
                'Remove a department',
                'Remove a role',
                'Remove an employee'
            ]
        }
    ])
    .then(({ menu }) => {
        if (menu === 'View all departments') {viewAll(allDepartments)}
        if (menu === 'View all roles') {viewAll(allRole)}
        if (menu === 'View all employees by manager') {viewAll(employeeByManager)}
        if (menu === 'View all employees by department') {viewAll(employeeByDepartment)}
        if (menu === 'View utilized budget by department') {viewAll(getDepartmentCost)}
        if (menu === 'Add a department') {add(departmentName, departmentInsert)}
        if (menu === 'Add a role') {add(roleName, roleInsert)}
        if (menu === 'Add an employee') {add(employeeName, employeeInsert)}
        if (menu === 'Update an employee role') {update(employeeupdateName, employeeUpdateReturn)}
        if (menu === 'Remove a department') {remove(departmentDelete, departmentDeleteName)}
        if (menu === 'Remove a role') {remove(roleDelete, roleDeleteName)}
        if (menu === 'Remove an employee') {remove(employeeDelete, employeeDeleteName)}
    })
}

const viewAll = (viewAllTable) => {
    db.query(viewAllTable, (err, result) => console.table(result));
    setTimeout(startMenu, 1000);
}

const add = (inquireQuestions, insertSql) => {
    return inquirer.prompt(inquireQuestions)
    .then(insertSql)
    .then(startMenu)
};

const update = (inquireQuestions, updateSql) => {
    return inquirer.prompt(inquireQuestions)
    .then(updateSql)
    .then(startMenu)
};

const remove = (inquireQuestions, deleteSql) => {
    return inquirer.prompt(inquireQuestions)
    .then(deleteSql)
    .then(startMenu)
};

module.exports = startMenu;