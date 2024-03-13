import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const LIBRARY_PATH = 'src';
const EXTERNAL_MODULES = ['react', 'react-dom', 'antd', 'styled-components', 'antd/lib/dropdown', 'classnames', 'style-inject'];

export default [
    {
        input: `${LIBRARY_PATH}/index.ts`,
        output: [
            {
                dir: 'dist',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: LIBRARY_PATH
            }
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
                extract: false,
                autoModules: true,
                use: ['sass']
            }),
            typescript(),
            preserveDirectives.default(),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            url(),
            svgr(),
            terser()
        ],
        // remove node modules from dist
        external: id => {
            // console.log(id);
            if (id.includes("src/index.ts")) return false;

            return EXTERNAL_MODULES.some(el => id.includes(el));
        },
        onwarn(warning, handler) {
            // rollup-plugin-preserve-directives fixes this kind of warning (https://github.com/rollup/rollup/issues/4699)
            if (warning.code !== 'MODULE_LEVEL_DIRECTIVE') {
                handler(warning);
            }
        }
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/types.d.ts', format: 'es' }],
        plugins: [dts()]
    }
];
