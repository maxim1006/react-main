/* eslint-disable */
const xlsx = require('xlsx');
const fs = require('fs');

const ENGLISH = 'en';
const JAPANESE = 'ja';
const TRANSLATIONS_FOLDER = 'translations';
const TRANSLATIONS_FILE = `${TRANSLATIONS_FOLDER}/Translations.xlsx`;

function convertValue(value) {
    return value.replace(/\r\n/g, '\n');
}

function stringify(obj) {
    return JSON.stringify(obj, null, 2);
}

const workbook = xlsx.readFile(TRANSLATIONS_FILE);

function convertPortalToMobile(sheetName) {
    const ws = workbook.Sheets[sheetName];
    const result = xlsx.utils.sheet_to_json(ws, { header: ['key', 'value'] }).reduce((accumulator, { key, value }) => {
        accumulator[key] = convertValue(value);
        return accumulator;
    }, {});
    return result;
}

// convert English
const englishMap = convertPortalToMobile(ENGLISH);
fs.writeFileSync(`${TRANSLATIONS_FOLDER}/${ENGLISH}.json`, stringify(englishMap));
