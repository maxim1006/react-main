import path from 'path';
import crypto from 'crypto';
import del from 'rollup-plugin-delete';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

const LIBRARY_PATH = path.resolve('./src/widgets');
console.log(LIBRARY_PATH);

const production = process.env.production;

const globals = {
    react: 'React', //not works for server components
    'react-dom/client': 'ReactDOMClient',
    'next/link': 'NextLink',
    'custom/next/fetch': 'CustomNextFetch',
    'react/jsx-dev-runtime': 'ReactJsxDevRuntime',
    'react/jsx-runtime': 'ReactJsxRuntime',
    classnames: 'Classnames',
    'style-inject': 'styleInjectEs',
};

export default [
    {
        input: `${LIBRARY_PATH}/index.scss`,
        output: [
            {
                dir: 'dist',
            },
        ],
        plugins: [
            del({ targets: 'dist/*' }),
            scss({
                includePaths: [`${LIBRARY_PATH}/index.scss`],
                output: 'dist/index.css',
            }),
        ],
    },
    {
        input: [path.resolve('./src/widgets/index.ts')],
        // remove node modules from dist
        external: [...Object.keys(globals)],
        // external: id => {
        //     console.log({ id });
        //     return Object.keys(globals).some(el => id.includes(el));
        // },
        output: [
            {
                dir: 'dist',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: LIBRARY_PATH,
            },
            {
                format: 'umd',
                exports: 'named',
                name: 'FooterUmd',
                file: 'dist/FooterUmd.js',
                globals,
            },
            // {
            //     dir: 'dist',
            //     format: 'cjs',
            //     sourcemap: true,
            //     preserveModulesRoot: LIBRARY_PATH,
            //     exports: 'named',
            //     // preserveModules: true,
            //     interop: 'auto',
            // },
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
                extract: false,
                autoModules: true,
                use: ['sass'],
                modules: {
                    /* https://github.com/css-modules/css-modules/issues/363
                     * https://github.com/webpack-contrib/css-loader/issues/1282
                     *
                     * When building new library version hashes of selectors doesn't change,
                     * so it can lead to style conflicts when 2 or more versions of library is on the page.
                     * Here we manually calculate selector's hash - when content changes, selector changes too.
                     */
                    generateScopedName: (name, filename, css) => {
                        const hash = crypto.createHash('md5').update(css).digest('hex');
                        const moduleName = path.basename(filename, '.scss').replace('.', '-');

                        return `${moduleName}_${name}__${hash.slice(0, 6)}`;
                    },
                },
            }),
            typescript({
                sourceMap: true,
                tsconfig: `tsconfig.lib.json`,
            }),
            peerDepsExternal(),
            resolve(),
            url(),
            svgr(),
            commonjs(),
            // modify({
            //     find: /@netcracker\/ux-assets\/icons.*\.svg/gim,
            //     replace: (match) =>
            //         `${match.replace('@netcracker/ux-assets/icons', '@netcracker/ux-assets/lib/icons')}.js`,
            // }),

            terser(),
            // uncomment when need to check bundle
            // visualizer(),
        ],
    },
];
