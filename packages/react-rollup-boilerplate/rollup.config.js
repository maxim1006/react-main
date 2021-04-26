import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import pkg from './package.json';

export default {
    input: ['src/index.ts'],
    output: [
        {
            dir: 'dist',
            format: 'es',
            preserveModules: true,
            preserveModulesRoot: 'src',
        },
    ],
    plugins: [
        postcss({
            plugins: [],
            minimize: true,
            extract: false,
            modules: true,
            use: ['less'],
        }),
        peerDepsExternal(),
        typescript({
            typescript: require('typescript'),
            include: ['*.js+(|x)', '**/*.js+(|x)'],
            exclude: ['coverage', 'config', 'dist', 'node_modules/**', '*.test.{js+(|x), ts+(|x)}', '**/*.test.{js+(|x), ts+(|x)}'],
            tsconfig: 'tsconfig.json',
        }),
        babel({
            ...pkg.babel,
            extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
            babelHelpers: 'runtime',
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
        url(),
        svgr(),
        resolve(),
        commonjs(),
        terser(),
        visualizer(),
    ],
};
