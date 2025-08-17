class AppError extends Error {
    constructor(message, code, statusCode = 500, context = {}) {
        super(message);
        this.name = 'AppError';
        this.code = code;
        this.statusCode = statusCode;
        this.context = context;
        this.timestamp = new Date().toISOString();
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            statusCode: this.statusCode,
            context: this.context,
            timestamp: this.timestamp,
            stack: this.stack,
        };
    }
}

console.log(
    new AppError('Database connection failed', 'DB_CONNECTION_ERROR', 503, {
        host: 'localhost',
        port: 5432,
        retryAttempt: 3,
    }).toJSON(),
);

// Usage with rich context
throw new AppError('Database connection failed', 'DB_CONNECTION_ERROR', 503, {
    host: 'localhost',
    port: 5432,
    retryAttempt: 3,
});
