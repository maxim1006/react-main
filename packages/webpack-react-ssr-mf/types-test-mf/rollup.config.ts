import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import url from 'node:url';

import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { apiExtractor } from 'rollup-plugin-api-extractor';
import del from 'rollup-plugin-delete';
import externals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import transformFactory from 'typescript-transform-paths';

import type Rollup from 'rollup';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const currentDir = path.dirname(url.fileURLToPath(import.meta.url));

const srcDir = path.resolve(currentDir, '..', 'src');

const distDir = path.resolve(currentDir);

function getExternalsExcludePatterns() {
    return [/\.css$/];
}

// типы @types/max-test-mf__federated-host
// модуль @max-test-mf/federated-host
function getExternalsAdditions() {
    return ['@max-test-mf/federated-host'];
}

function createConfig(): Rollup.RollupOptions[] {
    const getOpts = (name: string, inputFileName: string): (Rollup.RollupOptions | false)[] => {
        const folderName = path.basename(name);
        const tsCongigPath = path.resolve(srcDir, '..', 'tsconfig.json');
        const packagePath = path.resolve(srcDir, '..', 'package.json');

        const tsConfig = JSON.parse(fs.readFileSync(tsCongigPath, 'utf8')) as {
            compilerOptions: { paths: Record<string, string[]> };
        };

        const entries = Object.entries<string[]>(tsConfig.compilerOptions.paths).reduce(
            (acc, [find, [replacement]]) => ({
                ...acc,
                [find.replace('/*', '')]: path.resolve(
                    srcDir,
                    replacement.replace('/*', '').replace('*', ''),
                ),
            }),
            {},
        );

        return [
            {
                context: 'window',
                input: path.resolve(srcDir, inputFileName),
                output: {
                    dir: path.resolve(distDir, folderName),
                    format: 'es',
                    sourcemap: true,
                },
                plugins: [
                    externals({
                        packagePath,
                        exclude: getExternalsExcludePatterns(),
                        include: getExternalsAdditions(),
                        devDeps: true,
                    }),
                    commonjs(),
                    alias({ entries }),
                    svg(),
                    resolve({ extensions: ['.ts', '.tsx', '.js'] }),
                    typescript({
                        tsconfig: tsCongigPath,
                        sourceMap: true,
                        compilerOptions: {
                            rootDir: './src',
                            module: 'ES2022',
                            moduleResolution: 'Bundler',
                            outDir: path.resolve(distDir, folderName),
                            declaration: true,
                            emitDeclarationOnly: true,
                            sourceMap: true,
                        },
                        transformers: {
                            // для розолва алиасов в файлах декларации типов
                            afterDeclarations: [
                                {
                                    type: 'program',
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    // @ts-ignore
                                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
                                    factory: program => transformFactory.default(program),
                                },
                            ],
                        },
                    }),
                    apiExtractor({
                        local: true,
                        cleanUpRollup: false,
                        configuration: {
                            projectFolder: path.resolve(distDir, folderName),
                            mainEntryPointFilePath: `<projectFolder>/${inputFileName}.d.ts`,
                            compiler: {
                                tsconfigFilePath: tsCongigPath,
                            },
                            dtsRollup: {
                                enabled: true,
                                untrimmedFilePath: `<projectFolder>/../${folderName}.d.ts`,
                            },
                            tsdocMetadata: {
                                enabled: false,
                            },
                        },
                    }),
                    del({
                        targets: path.resolve(distDir, folderName),
                        runOnce: true,
                        hook: 'closeBundle',
                    }),
                    postcss({
                        extract: false,
                        use: {
                            sass: {
                                silenceDeprecations: [
                                    'legacy-js-api',
                                    'import',
                                    'mixed-decls',
                                    'global-builtin',
                                ],
                            },
                            stylus: undefined,
                            less: undefined,
                        },
                    }),
                ].filter(Boolean),
            },
        ];
    };

    let mfExportsData;

    try {
        mfExportsData = JSON.parse(
            fs.readFileSync(path.resolve(srcDir, '..', 'mf-exposes.json'), 'utf-8'),
        );
    } catch (error) {
        console.error('Error while reading mf exports');
        console.error(error);
        process.exit(1);
    }

    if (!mfExportsData) {
        console.error('Error while reading mf exports');
        process.exit(1);
    }

    const mfExports = (Array.isArray(mfExportsData) ? mfExportsData : [mfExportsData]).reduce<
        Record<string, string>
    >((acc, it) => {
        if (typeof it === 'string') {
            acc[it] = it;
        } else {
            Object.entries(it).forEach(([key, value]) => {
                if (typeof value === 'string') {
                    acc[key] = value;
                }
            });
        }
        return acc;
    }, {});

    const pkgPath = path.resolve(currentDir, 'package.json');

    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8')) as {
        exports?: Record<string, { types: string }>;
    };

    pkg.exports = Object.keys(mfExports).reduce<Record<string, { types: string }>>(
        (acc, it) => {
            acc[it] = {
                types: `${it}.d.ts`,
            };
            return acc;
        },
        { '.': { types: './index.d.ts' } },
    );

    fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`.replace(/\r\n|\r|\n/g, os.EOL), {
        encoding: 'utf-8',
    });

    // console.log({ mfExports }); // { mfExports: { './TestMf': './test.mf' } }

    return Object.entries(mfExports)
        .flatMap(it => getOpts(it[0], it[1]))
        .filter(<T>(opt: T): opt is Exclude<T, false> => Boolean(opt));
}

// eslint-disable-next-line import/no-default-export
export default createConfig();
