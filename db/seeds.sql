INSERT INTO departments (name)
VALUES
('Respiratory'),
('Laboratory'),
('Medicine'),
('Nursing'),
('Administrative');


INSERT INTO roles (title, salary, department_id)
VALUES
('Nurse', 75000, 4),
('Physician', 250000, 3),
('Respiratory Therapist', 65000, 1),
('Director', 85000, 5),
('Chief Nursing Officer', 100000, 5),
('Lab Technician', 55000, 2),
('Chief Medical Officer', 300000, 5),
('Nurse Manager', 75000, 4),
('Microbiologist', 65000, 2),
('Pathologist', 280000, 3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Marlene', 'McClennan', 1, null),
('Jackie' 'Chapman', 2, 2),
('Michael', 'Gifts', 3, null),
('Evadney', 'Ramsook', 4, 4),
('Shree', 'Kuwas', 5, null),
('Zach', 'Munoz', 6, 6),
('Eva', 'Ladd', 7, null),
('Sebastian', 'Sherfey', 8, 8),
('Samuel', 'Reid', 9, null),
('Shane', 'James', 10, 10);