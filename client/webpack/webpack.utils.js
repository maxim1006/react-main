const fs = require('fs');
const path = require('path');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const paths = require('react-scripts/config/paths.js');
const postcssNormalize = require('postcss-normalize');
const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const isEnvProduction = process.env.NODE_ENV === 'production';
const isEnvDevelopment = !isEnvProduction;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// add less
function addLess(config) {
    const lessRegex = /\.(less)$/;
    const lessModuleRegex = /\.module\.(less)$/;

    const oneOfLoadersArr = config.module.rules[1].oneOf;
    const fileLoader = oneOfLoadersArr.slice(-1);
    const restLoaders = oneOfLoadersArr.slice(0, oneOfLoadersArr.length - 1);

    config.module.rules[1].oneOf = [
        ...restLoaders,
        {
            test: lessRegex,
            exclude: lessModuleRegex,
            use: getStyleLoaders(
                {
                    importLoaders: 3,
                    sourceMap: isEnvProduction && shouldUseSourceMap,
                },
                'less-loader'
            ),
            sideEffects: true,
        },
        {
            test: lessModuleRegex,
            use: getStyleLoaders(
                {
                    importLoaders: 3,
                    sourceMap: isEnvProduction && shouldUseSourceMap,
                    modules: {
                        getLocalIdent: getCSSModuleLocalIdent,
                    },
                },
                'less-loader'
            ),
        },
        ...fileLoader,
    ];
}

// common function to get style loaders
function getStyleLoaders(cssOptions, preProcessor) {
    const loaders = [
        isEnvDevelopment && require.resolve('style-loader'),
        isEnvProduction && {
            loader: MiniCssExtractPlugin.loader,
            // css is located in `static/css`, use '../../' to locate index.html folder
            // in production `paths.publicUrlOrPath` can be a relative path
            options: paths.publicUrlOrPath.startsWith('.') ? { publicPath: '../../' } : {},
        },
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                    // Adds PostCSS Normalize as the reset css with default options,
                    // so that it honors browserslist config in package.json
                    // which in turn let's users customize the target behavior as per their needs.
                    postcssNormalize(),
                ],
                sourceMap: isEnvProduction && shouldUseSourceMap,
            },
        },
    ].filter(Boolean);
    if (preProcessor) {
        loaders.push(
            {
                loader: require.resolve('resolve-url-loader'),
                options: {
                    sourceMap: isEnvProduction && shouldUseSourceMap,
                    root: resolveApp('src'),
                },
            },
            {
                loader: require.resolve(preProcessor),
                options: {
                    sourceMap: true,
                },
            }
        );
    }
    return loaders;
}

module.exports = { addLess };
