-- Таблица helpful_context
-- Создана в DuckDB и продублирована в documents/db/duckDB

CREATE TABLE helpful_context (
    id INTEGER PRIMARY KEY,
    context_type VARCHAR(100),
    content TEXT,
    source VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSON
);

-- Комментарии к полям:
-- id - уникальный идентификатор записи
-- context_type - тип контекста (например: 'code_snippet', 'documentation', 'example')
-- content - основное содержимое контекста
-- source - источник контекста (например: 'github', 'stackoverflow', 'documentation')
-- created_at - время создания записи
-- updated_at - время последнего обновления записи
-- metadata - дополнительные метаданные в формате JSON

-- Тестовая запись
INSERT INTO helpful_context (id, context_type, content, source) VALUES (1, 'test', 'Тест', 'manual_entry');
