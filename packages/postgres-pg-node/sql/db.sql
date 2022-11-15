CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

CREATE TABLE posts (
   ID SERIAL PRIMARY KEY,
   title VARCHAR(100),
   content VARCHAR(255),
   user_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES users (id)
);
