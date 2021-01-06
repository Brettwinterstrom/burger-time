CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;

CREATE TABLE burger (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (50) NOT NULL,
devoured boolean DEFAULT false,
PRIMARY KEY (id)
)