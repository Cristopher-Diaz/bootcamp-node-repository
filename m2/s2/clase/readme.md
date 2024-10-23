## Query 

``` sql

DROP DATABASE IF EXISTS node_m1_s1_clase;
CREATE DATABASE node_m1_s1_clase;
USE node_m1_s1_clase;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL,
    pass VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (user_name, full_name, role, pass)
VALUES
('cabrogato', 'Cristopher Diaz', 'admin', 'asdagfd4423');

```
