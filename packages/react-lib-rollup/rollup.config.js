import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import babel from 'rollup-plugin-babel';
import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
// import replace from '@rollup/plugin-replace';

const packageJson = require('./package.json');

export default {
    input: 'src/components/index.ts',
    // without antd/lib/dropdown -> antd is included in the final bundle
    external: ['react', 'react-dom', 'antd', 'styled-components', 'antd/lib/dropdown'],
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        peerDepsExternal(),
        babel({
            exclude: ['node_modules/**'],
            plugins: [
                [
                    'babel-plugin-styled-components',
                    {
                        minify: true,
                        transpileTemplateLiterals: false,
                    },
                ],
            ],
        }),
        commonjs(),
        typescript(),
        postcss({
            extract: false,
            modules: true,
            use: ['less'],
        }),
        url(),
        svgr(),
        terser({
            compress: {
                passes: 2,
            },
        }),
        visualizer(),
    ],
};
