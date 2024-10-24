## Query 

``` sql

DROP DATABASE IF EXISTS node_m2_s2;
CREATE DATABASE node_m2_s2;
USE node_m2_s2;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(200) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    role VARCHAR(50) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (email, first_name, last_name, full_name, age, role, pass)
VALUES
('gato@correo.cl', 'Cabro', 'Gato', 'Cristopher Diaz', 22, 'admin', 'asdagfd4423'),
('laura@correo.cl', 'Laura', 'Sanchez', 'Laura Sanchez', 24, 'user', 'asdagfd1242'),
('pedro@correo.cl', 'Pedro', 'Perez', 'Pedro Perez', 30, 'editor', 'gsdfg24242'),
('maria@correo.cl', 'Maria', 'Gomez', 'Maria Gomez', 27, 'admin', 'gffg565sdd'),
('juan@correo.cl', 'Juan', 'Rodriguez', 'Juan Rodriguez', 35, 'user', 'dfg324gfdfg'),
('ana@correo.cl', 'Ana', 'Lopez', 'Ana Lopez', 29, 'editor', 'saasaer342r'),
('carlos@correo.cl', 'Carlos', 'Mendoza', 'Carlos Mendoza', 26, 'user', 'sadf3234dfg');

CREATE TABLE IF NOT EXISTS students (
	id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(70) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    n_identity INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO students (first_name, last_name, age, n_identity) 
VALUES 
('Jorge', 'Contreras', 18, 13453452),
('Maria', 'Dugarte', 21, 73658434),
('Pedro', 'Valera', 26, 5373367),
('Juan', 'Valenzuela', 22, 2235429),
('Gerardo', 'Camacho', 42, 5243677),
('Valentina', 'Vielma', 26, 7981559),
('Cristina', 'De Jesus', 28, 4774418),
('Betis', 'Camargo', 32, 1740406),
('Lisbeth', 'Gutiérrez', 27, 874456),
('Alfredo', 'Camacaro', 39, 4521478);


CREATE TABLE IF NOT EXISTS courses (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(250) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO courses (title, description)
VALUES
('Programación 1', 'Descripción de programación 1'),
('Programación 2', 'Descripción de programación 2'),
('Programación 3', 'Descripción de programación 3'),
('Base de datos 1', 'Descripción de base de datos 1'),
('Base de datos 2', 'Descripción de base de datos 2'),
('Base de datos 3', 'Descripción de base de datos 3'),
('Bootcamp IA', 'Descripción de bootcamp IA');

ALTER TABLE courses 
ADD COLUMN deleted_at TIMESTAMP DEFAULT NULL;

UPDATE courses
SET deleted_at = NOW()
WHERE id IN (1,3,5,7);

SELECT * FROM courses;

```
