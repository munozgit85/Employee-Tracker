# Employee-Tracker

  ## Description
This application allows a business owner the ability to manage and track 
the departments, roles, and employees for a company. The user of this app is given a command line prompt that when started , 
there is an option to view all departments, view all roles, view all employees, add a department,
add a role, add an employee, and update an employee role. 
When viewing all departments, then a formatted table showing department names and department ids is presented.
When viewing all roles, then a table with job title, role id, the department that role belongs to, and the 
salary for that role is presented. When viewing all employees by manager or department a table with the 
employee data, including employee ids, first names, last names, job titles, departments, salaries, and 
managers that the employees report to is presented. The user is also able to choose to add a department, and when this 
is chosen, then the user is prompted to enter the name of the department and that department is added to the database. 
When the user chooses to add a role, then the user is prompted to enter the name, salary, and department for the role and that role is added to the database. 
When the user choosed to add an employee, then the user enters the employee’s first name, last name, role, and manager, 
and that employee is added to the database. The user is also able to update an employee role. When this is choosen, then 
the user is prompted to select an employee to update and their new role and this information is updated in the database
Additionally, the user is able to choose the option to update the employee's managers, Delete departments, roles, and employees, 
and View the total utilized budget of a department. 


  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Video](#Video)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ***
  ## Installation
1. install SQL https://www.npmjs.com/package/mysql2
2. install inquirer, please use npm i inquirer@8.2.4.
3. install console.table package https://www.npmjs.com/package/console.table

  ## Usage
    Clone the repository. 
    Add the Installations above. 
    Insert your SQL username and Password in the connection.js file
    Navigate to the root of the application , and login into SQL using 
    in the command line : mysql -u root -p
    Type in your password 
    Type into SQL : 
    source db/db.sql       //this is to create the database
    USE Employees
    source db/schema.sql   //this is the create the table
    source db/seeds.sql    //this is to place values into table
    quit 
    Then type in command line Node index and follow prompts 


  ## Video 
   https://watch.screencastify.com/v/Ww5vXVlpU9q1GMEyWvld
  https://github.com/munozgit85/Employee-Tracker/blob/b1f5c1daa4fd8ab3b02c8a7496829a7c5aab538d/Employee%20tracker.mp4

  ## License
    No license. 

  ## Contributing
  none

  ## Test
  none
  
  ## Questions
  For further Questions About This Application , Please Feel Free To Use The Contact Below:
  >Email: Racquelg85@hotmail.com
  >GitHub : [Racquel](https://github.com/munozgit85/Employee-Tracker.git)
  
