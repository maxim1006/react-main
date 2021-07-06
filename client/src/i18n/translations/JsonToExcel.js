/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const xlsx = require('xlsx');
const path = require('path');

const ENGLISH = 'en';
const JAPANESE = 'ja';
const TRANSLATIONS_FOLDER = 'translations';
const TRANSLATIONS_FILE = `${TRANSLATIONS_FOLDER}/Translations.xlsx`;
const cwd = process.cwd();

function pathTo(file) {
    return path.join(cwd, file);
}

function createWorkBook() {
    const wb = xlsx.utils.book_new();
    wb.Props = {
        Title: 'Translations',
        CreatedDate: new Date(),
    };
    return wb;
}

function addSheet(wb, name, data) {
    wb.SheetNames.push(name);
    const ws = xlsx.utils.aoa_to_sheet(data);
    ws['!cols'] = [{ width: 100 } /* first column */, { width: 100 } /* second column */];
    // eslint-disable-next-line no-param-reassign
    wb.Sheets[name] = ws;
}

function jsonToEntries(json) {
    return Object.keys(json).map(key => [key, json[key]]);
}

const englishJson = require(pathTo(`${TRANSLATIONS_FOLDER}/${ENGLISH}.json`));
const japaneseJson = require(pathTo(`${TRANSLATIONS_FOLDER}/${JAPANESE}.json`));

const wb = createWorkBook();
addSheet(wb, ENGLISH, jsonToEntries(englishJson));
addSheet(wb, JAPANESE, jsonToEntries(japaneseJson));

xlsx.writeFile(wb, TRANSLATIONS_FILE);
