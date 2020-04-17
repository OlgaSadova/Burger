drop schema burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    isDevoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);