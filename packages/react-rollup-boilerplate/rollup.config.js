import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

const LIBRARY_PATH = 'src';
const EXTERNAL_MODULES = ['node_modules', 'react', '@mui/icons-material', '@mui/lab', '@mui/material', 'style-inject'];

export default [
    {
        input: `${LIBRARY_PATH}/index.ts`,
        external: ['react', 'react-dom', 'antd', 'styled-components', 'antd/lib/dropdown'],
        output: [
            {
                dir: 'dist',
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: LIBRARY_PATH,
            },
        ],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
                extract: false,
                autoModules: true,
                modules: true,
                use: ['sass'],
            }),
            typescript(),
            peerDepsExternal(),
            commonjs(),
            url(),
            svgr(),
            terser(),
        ],
        // remove node modules from dist
        // external: (id) => {
        //     console.log(id);
        //     return EXTERNAL_MODULES.some((el) => id.includes(el));
        // },
    },
];
