---
input:
    toc.md: ''
    eslint.md: ''
    vite.md: ''
replace:
    '\[(.*)\]\(.*images[\\/](.*)\)': '[$1](media/$2)'  # fix links to assets
output:
    name: ../../../README.md
    doctoc: 
        mode: github
        maxlevel: 4
---
