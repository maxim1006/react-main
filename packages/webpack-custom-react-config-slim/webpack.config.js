const { merge } = require('webpack-merge');
const commonConfig = require('./config/webpack.common');

module.exports = env => {
    const envConfig = require(`./config/webpack.${env.mode}`);
    console.log(env);

    return merge({ mode: env.mode }, commonConfig, envConfig);
};
