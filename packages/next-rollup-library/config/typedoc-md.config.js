/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    out: '../docs/md',
    plugin: [
        'typedoc-plugin-missing-exports',
        'typedoc-plugin-markdown',
        'typedoc-plugin-rename-defaults',
    ],
    entryPoints: ['../src/widgets/**/index.ts'],
    githubPages: false,
    tsconfig: '../tsconfig.json',
};
