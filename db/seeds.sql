INSERT INTO departments (name)
VALUES
('Facilities'),
('Laboratory'),
('Medicine'),
('Nursing'),
('Administrative');



INSERT INTO roles (title, salary, departments_id)
VALUES

('Janitor', 65000, 1),
('Facilities Director', 85000, 1),
('Lab Technician', 55000, 2),
('Microbiologist', 65000, 2),
('Physician', 250000, 3),
('Pathologist', 280000, 3),
('Nurse', 75000, 4),
('Nurse Manager', 75500, 4),
('Director of Finance', 85000, 5),
('Chief Quality Officer', 300000, 5);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Marlene', 'McClennan', 1, 2),
('Jackie', 'Chapman', 2, null),
('Michael', 'Gifts', 3, 4),
('Evadney', 'Ramsook', 4, null),
('Shree', 'Kuwas', 5, 6),
('Zach', 'Munoz', 6, null),
('Eva', 'Ladd', 7, 8),
('Sebastian', 'Sherfey', 8, null),
('Samuel', 'Reid', 9, 10),
('Shane', 'James', 10, null);

