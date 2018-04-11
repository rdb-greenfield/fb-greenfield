DROP DATABASE IF EXISTS greenfield; 

CREATE DATABASE greenfield; 

USE greenfield; 

CREATE TABLE users 
  ( 
     id             INT NOT NULL auto_increment, 
     firstname      VARCHAR (35) NOT NULL, 
     lastname       VARCHAR (35) NOT NULL, 
     pw             VARCHAR (100) NOT NULL, 
     profilepicture VARCHAR (100), 
     email          VARCHAR (50), 
     aboutme        VARCHAR (500), 
     hometown       VARCHAR (50), 
     createdat      TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
     PRIMARY KEY (id) 
  ); 

CREATE TABLE friends 
  ( 
     id       INT NOT NULL auto_increment, 
     user1_id INT, 
     user2_id INT, 
     active   BOOLEAN, 
     FOREIGN KEY (user1_id) REFERENCES users (id) ON DELETE CASCADE, 
     FOREIGN KEY (user2_id) REFERENCES users (id) ON DELETE CASCADE, 
     PRIMARY KEY (id) 
  ); 

CREATE TABLE posts 
  ( 
     id        INT NOT NULL auto_increment, 
     author_id INT, 
     owner_id  INT, 
     createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
     body      VARCHAR (500), 
     img       VARCHAR (50), 
     video     VARCHAR (50), 
     likes     INT, 
     PRIMARY KEY (id), 
     FOREIGN KEY (author_id) REFERENCES users (id) ON DELETE CASCADE, 
     FOREIGN KEY (owner_id) REFERENCES users (id) ON DELETE CASCADE 
  ); 
/*  Execute this file from the command line by typing: 
 *    mysql -u root < server/schema.sql 
 *  to create the database and the tables.*/     