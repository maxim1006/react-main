export const DB_CREATE_POSTS_TABLE = `
CREATE TABLE IF NOT EXISTS "posts" (
   ID SERIAL PRIMARY KEY,
   title VARCHAR(100),
   content VARCHAR(255),
   user_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES users (id)
);
`;
