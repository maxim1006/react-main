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
import replace from '@rollup/plugin-replace';

import pkg from './package.json';

export default {
    input: 'src/components/index.ts',
    external: ['react', 'react-dom', 'prop-types', 'antd', 'styled-components', 'antd/lib/dropdown'],
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: 'es',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        // replace({ '\n    ': '', '    ': '', delimiters: ['', ''] }),
        resolve(),
        commonjs(),
        typescript(),
        postcss({
            modules: true,
        }),
        babel({
            exclude: 'node_modules/**',
            transpileTemplateLiterals: false,
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
