DROP DATABASE IF EXISTS greenfield;

CREATE DATABASE greenfield;

USE greenfield;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  firstName varchar(25) NOT NULL,
  lastName varchar(25) NOT NULL,
  pw varchar(25) NOT NULL,
  profilePicture varchar(50),
  email varchar(50),
  aboutMe varchar(500),
  hometown varchar(25),
  createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  id int NOT NULL AUTO_INCREMENT,
  user1_id int,
  user2_id int,
  active boolean,
  FOREIGN KEY (user1_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (user2_id) REFERENCES users(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);

CREATE TABLE posts (
  id int NOT NULL AUTO_INCREMENT,
  author_id int,
  owner_id int, 
  createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
  body varchar(500),
  img varchar(50),
  video varchar(50),
  likes int,
  PRIMARY KEY (id),
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id int NOT NULL AUTO_INCREMENT,
  author_id int,
  post_id int, 
  parent_id int, 
  createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
  body varchar(500),
  img varchar(50),
  video varchar(50),
  likes int,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (parent_id) REFERENCES comments(id) ON DELETE CASCADE,
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
