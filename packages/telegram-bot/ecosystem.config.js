module.exports = {
    apps: [
        {
            name: 'maximprosvbot',
            script: './public/index.js',
            env_production: {
                NODE_ENV: 'production',
            },
            env_development: {
                NODE_ENV: 'development',
            },
            error_file: './error.log',
            out_file: './out.log',
        },
    ],
};
