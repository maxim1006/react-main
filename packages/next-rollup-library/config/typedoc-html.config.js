/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    out: '../public/docs',
    plugin: [
        'typedoc-plugin-missing-exports',
        'typedoc-material-theme',
        'typedoc-plugin-rename-defaults',
    ],
    themeColor: '#cb9820',
    entryPoints: ['../src/widgets/**/index.ts'],
    githubPages: false,
    tsconfig: '../tsconfig.json',
};
