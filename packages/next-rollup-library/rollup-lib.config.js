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
import preserveDirectives from 'rollup-plugin-preserve-directives';

const LIBRARY_PATH = 'src/widgets';

const production = process.env.production;

const globals = {
    react: 'React', //not works for server components
    'react-dom/client': 'ReactDOMClient',
    'next/link': 'NextLink',
    'custom/next/fetch': 'CustomNextFetch',
    'react/jsx-dev-runtime': 'ReactJsxDevRuntime',
    'react/jsx-runtime': 'ReactJsxRuntime',
    classnames: 'Classnames',
};

const plugins = [
    postcss({
        plugins: [],
        minimize: true,
        extract: false,
        autoModules: true,
        use: ['sass'],
        modules: true,
    }),
    typescript({
        sourceMap: true,
        tsconfig: `tsconfig.lib.json`,
    }),
    peerDepsExternal(),
    preserveDirectives(),
    resolve(),
    url(),
    svgr(),
    commonjs(),
    // modify({
    //     find: /@netcracker\/ux-assets\/icons.*\.svg/gim,
    //     replace: (match) =>
    //         `${match.replace('@netcracker/ux-assets/icons', '@netcracker/ux-assets/lib/icons')}.js`,
    // }),

    // terser(),
    // uncomment when need to check bundle
    // visualizer(),
];

const external = [...Object.keys(globals)];
// external: id => {
//     console.log({ id });
//     return Object.keys(globals).some(el => id.includes(el));
// },

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
        input: [`${LIBRARY_PATH}/footer/client/index.ts`],
        // remove node modules from dist
        external,
        output: [
            {
                dir: 'dist',
                format: 'esm',
                preserveModules: true,
                preserveModulesRoot: LIBRARY_PATH,
                sourcemap: true,
            },
            {
                format: 'umd',
                exports: 'named',
                name: 'FooterClientUmd',
                file: 'dist/FooterClientUmd.js',
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
        plugins,
    },
    {
        input: [`${LIBRARY_PATH}/footer/server/index.ts`],
        // remove node modules from dist
        external,
        output: [
            {
                dir: 'dist',
                format: 'esm',
                preserveModules: true,
                preserveModulesRoot: LIBRARY_PATH,
                sourcemap: true,
            },
            {
                format: 'umd',
                exports: 'named',
                name: 'FooterServerUmd',
                file: 'dist/FooterServerUmd.js',
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
        plugins,
    },
];
