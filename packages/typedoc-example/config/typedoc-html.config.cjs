/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
    out: '../public/docs',
    plugin: [
        '@droppedcode/typedoc-plugin-copy-assets',
        'typedoc-material-theme',
        'typedoc-plugin-rename-defaults',
        'typedoc-plugin-replace-text'
    ],
    themeColor: '#cb9820',
    entryPoints: ['../src/lib/**/index.ts'],
    exclude: [
        '../src/lib/counter2/index.ts',
    ],
    copyAssets: {
        onlyImages: false,
        include: ['.(png|webp|md)\\)$'],
        exclude: ['\\(.*?exclude/.*?\\)$']
    },
    githubPages: false,
    tsconfig: '../tsconfig.json',
    customCss: './typedoc.css',
    includes: '../src/lib',
    media: '../src/assets/doc/images',
    replaceText: {
        inCodeCommentText: true,
        inCodeCommentTags: true,
        inIncludedFiles: true,
        replacements: [
            {
                pattern: '\\[(.*)\\]\\(../../../../docs/assets/(.*)\\)',
                replace: '[$1](../media/$2)'
            },
        ]
    }
};
