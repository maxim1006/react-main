// Load features based on configuration or environment
async function loadDatabaseAdapter() {
    const dbType = process.env.DATABASE_TYPE || 'sqlite';

    try {
        const adapter = await import(`#db/adapters/${dbType}`);
        return adapter.default;
    } catch (error) {
        console.warn(`Database adapter ${dbType} not available, falling back to sqlite`);
        const fallback = await import('#db/adapters/sqlite');
        return fallback.default;
    }
}

// Conditional feature loading
async function loadOptionalFeatures() {
    const features = [];

    if (process.env.ENABLE_ANALYTICS === 'true') {
        const analytics = await import('#features/analytics');
        features.push(analytics.default);
    }

    if (process.env.ENABLE_MONITORING === 'true') {
        const monitoring = await import('#features/monitoring');
        features.push(monitoring.default);
    }

    return features;
}
