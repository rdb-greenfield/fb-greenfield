DROP DATABASE IF EXISTS greenfield;
CREATE DATABASE greenfield;
USE greenfield;
CREATE TABLE users
(
  id INT NOT NULL
  auto_increment, 
     firstname      VARCHAR
  (35) NOT NULL, 
     lastname       VARCHAR
  (35) NOT NULL, 
     pw             VARCHAR
  (100) NOT NULL, 
     profilepicture VARCHAR
  (100), 
     email          VARCHAR
  (50), 
     aboutme        VARCHAR
  (500), 
     hometown       VARCHAR
  (50), 
     createdat      TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
     PRIMARY KEY
  (id) 
  );
  CREATE TABLE friends
  (
    id INT NOT NULL
    auto_increment, 
     user1_id INT, 
     user2_id INT, 
     active   BOOLEAN, 
     FOREIGN KEY
    (user1_id) REFERENCES users
    (id) ON
    DELETE CASCADE, 
     FOREIGN KEY (user2_id)
    REFERENCES users
    (id) ON
    DELETE CASCADE, 
     PRIMARY KEY (id)
    );
    CREATE TABLE posts
    (
      id INT NOT NULL
      auto_increment, 
     author_id INT, 
     owner_id  INT, 
     parent_id INT,
     post_type VARCHAR
      (45),
     createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
     body      VARCHAR
      (1000), 
     img       VARCHAR
      (150), 
     video     VARCHAR
      (50), 
     likes     INT, 
     PRIMARY KEY
      (id), 
     FOREIGN KEY
      (author_id) REFERENCES users
      (id) ON
      DELETE CASCADE, 
     FOREIGN KEY (owner_id)
      REFERENCES users
      (id) ON
      DELETE CASCADE,
     FOREIGN KEY (parent_id)
      REFERENCES posts
      (id)
  );
      /*  Execute this file from the command line by typing: 
 *    mysql -u root < server/schema.sql 
 *  to create the database and the tables.*/
      -- load default data on schema creation
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Tyler', 'Standley', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'tyler.standley21@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Mark', 'Khazam', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'mark.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Warren', 'Kwong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Hunter', 'Morgensomething', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Kevin', 'Amirdjanian', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Julian', 'Yuen', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Aaron', 'Melendez', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Justin', 'Kang', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Yu-Lin', 'Kong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Kin', 'Chan', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('David', 'Chung', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Brian', 'Hong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Zach', 'Gallagher', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Warren', 'Kwong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Warren', 'Kwong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Warren', 'Kwong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Warren', 'Kwong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Warren', 'Kwong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren.email@gmail.com');
      SET FOREIGN_KEY_CHECKS
      =0;
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 1, 1, 'post', 'first post by tyler!', null, null, 0);
      SET FOREIGN_KEY_CHECKS
      =1;
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 2, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 3, true);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 1, 1, 'post', 'another post from tyler', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (2, 2, 1, 'post', 'first post by mark!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (2, 2, 1, 'post', 'another post from mark', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (3, 3, 1, 'post', 'first post by warren!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (3, 3, 1, 'post', 'another post from warren', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 1, 2, 'comment', 'a comment by tyler, on his post', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (2, 1, 2, 'comment', 'a comment by mark, on tylers post', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (3, 1, 2, 'comment', 'a comment by warren, on tylers post', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 2, 3, 'comment', 'whats up mark, its tyler', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 3, 5, 'comment', 'whats up warren, its tyler', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 2, 10, 'sub-comment', 'marks comment response to tylers comment', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 3, 11, 'sub-comment', 'warrens comment response to tylers comment', null, null, 0);
/*  Execute this file from the command line by typing: 
 *    mysql -u root < server/schema.sql 
 *  to create the database and the tables.*/     