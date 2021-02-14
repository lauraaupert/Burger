INSERT INTO burgers (burger_name) VALUES ('Cheeseburger');
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', 'true');
INSERT INTO burgers (burger_name) VALUES ('Vegan Burger');

INSERT INTO burgers (burger_name) VALUES ('Cheeseburger');
INSERT INTO burgers (burger_name) VALUES ('Hamburger');
INSERT INTO burgers (burger_name) VALUES ('Vegan Burger');
INSERT INTO burgers (burger_name) VALUES ('Hello');

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30),
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

USE burgers;
SELECT * FROM burgers;

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
  id INT AUTO_INCREMENT,
  author VARCHAR(30) NOT NULL,
  chirp VARCHAR(200) NOT NULL,
  time_created VARCHAR(20),
  PRIMARY KEY (id)
);

-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS todolist;
-- Creates the "todolist" database --
CREATE DATABASE todolist;
