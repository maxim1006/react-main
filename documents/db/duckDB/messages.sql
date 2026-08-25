-- Таблица messages
-- Создана в DuckDB и продублирована в documents/db/duckDB

CREATE TABLE messages (
    id INTEGER PRIMARY KEY,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (id, content) VALUES (1, 'Привет мир');
