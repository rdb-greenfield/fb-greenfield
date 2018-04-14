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
        ('Tyler', 'Standley', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'tyler@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Mark', 'Khuzam', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'mark@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Warren', 'Kwong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'warren@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Hunter', 'Morgensomething', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'hunter@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Kevin', 'Amirdjanian', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'kevin@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Julian', 'Yuen', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'julian@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Aaron', 'Melendez', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'aaronm@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Justin', 'Kang', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'justin@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Yu-Lin', 'Kong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'yulin@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Kin', 'Chan', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'kin@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('David', 'Chung', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'david@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Brian', 'Hong', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'brian@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Zach', 'Gallagher', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'zach@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Michael', 'Pourshalimi', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'michaelp@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Aaron', 'Valdez', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'aaronv@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Jake', 'Barber', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'jake@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Sean', 'Malone', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'sean@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Daniel', 'Lai', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'daniallai@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Nikko', 'Sanchez', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'nikko@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Jooho', 'Lee', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'jooho@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Joseph', 'Nguyen', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'joseph@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Eva', 'Laskowski', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'eva@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Isabella', 'Beltran', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'isabella@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Patrick', 'Wu', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'patrick@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Darren', 'Chan', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'darren@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Lore', 'Wymetal', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'lore@gmail.com');
      INSERT INTO users
        (firstName, lastName, pw, profilepicture, email)
      VALUES
        ('Daniel', 'Kim', '$2a$10$WvFS84pvni6NAGZrgwAdGukzBUbK5iAAoz8WNXkFvtjWFUAjfGuaq', 'http://emblemsbattlefield.com/uploads/posts/2014/7/facebook-default-picture_1.jpg', 'danielkim@gmail.com');
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
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 4, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 5, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 6, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 7, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 8, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 9, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 10, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 11, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 12, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 13, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 14, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 15, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 16, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 17, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 18, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 19, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 20, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 21, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 22, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 23, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 24, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 25, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 26, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (2, 3, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (2, 4, true);
      INSERT INTO friends
        (user1_id, user2_id, active)
      VALUES
        (1, 27, true);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 1, 1, 'post', 'Welcome friends!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (2, 2, 1, 'post', 'Ready 4 a beer.', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (2, 2, 1, 'post', 'Maybe 2 beers.', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (3, 3, 1, 'post', 'Lessss go Warriors!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (3, 3, 1, 'post', 'Hello comrades!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 1, 2, 'comment', 'You''re not cool unless you comment on you''re own post.', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (2, 1, 2, 'comment', 'You''re not alone my friend!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (3, 1, 2, 'comment', 'Dude the nuggets are whack!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 2, 3, 'comment', 'This post is unreal!!!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 3, 5, 'comment', 'Boys boys boys....', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 2, 10, 'sub-comment', 'Boys boys boys!!!!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (1, 3, 11, 'sub-comment', 'You''ve lost it my friend.', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (5, 5, 1, 'post', 'If you find yourself in a bind, its either a callback or a hashtable! Or a bind...', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (5, 5, 1, 'post', 'Not only am I an inspirational speaker, but also an inspirational writer!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (4, 4, 1, 'post', 'This isn''t where I parked my van...', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (4, 4, 1, 'post', 'You''re either with the barefoot movement or you''re against it!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (14, 14, 1, 'post', 'Michael Michael!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (24, 24, 1, 'post', 'Simple - dynamic programming.', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (10, 10, 1, 'post', 'I could tell you the answer, but then I''d have to kill you...', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (6, 6, 1, 'post', 'Hey I''m Julian, and I''m an actor. And similar to javascript, I''m still waiting for my callback...', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (22, 22, 1, 'post', 'It''s pronounced Eva, not Eva...', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (9, 9, 1, 'post', 'This is my happy place! And it is free of hangman :)', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (19, 19, 1, 'post', 'I swear I deleted those pictures... You can check my computer!', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (24, 24, 1, 'post', 'I see you have 100 lines of code there.. you can actually one line that.', null, null, 0);
      INSERT INTO posts
        (author_id, owner_id, parent_id, post_type, body, img, video, likes)
      VALUES
        (20, 20, 1, 'post', 'Stuck in Chinese prison :( can someone come bail me out plz???', null, null, 0);
/*  Execute this file from the command line by typing: 
 *    mysql -u root < server/schema.sql 
 *  to create the database and the tables.*/     