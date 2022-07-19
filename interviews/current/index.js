const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

let map;
let marker;
let geocoder;
let responseDiv;
let response;

let listOfCities = [
    'RiyadhRiyadh',
    "Al Majma'ah",
    'Harmah',
    'Tumair',
    'Al Artawiya',
    'Az Zulfi',
    'Al Ghat',
    'Afif',
    'Thadiq',
    'Shaqra',
    'Al Duwadimi',
    'Al Bijadiya',
    'Huraymila',
    'Ad Diriyah',
    'Al Uyaynah',
    'Dhurma',
    'Al Quwaiiya',
    'Ar Ruwaidha',
    'Ar-Rayyan',
    'Al-Muzahmiy',
    'Al-Kharj',
    'Ad Dilam',
    'Wadi ad-Dawasir',
    'As Sulayyil',
    'Al Hariq',
    'Howtat Bani Tamim',
    'Layla',
    'Taif',
    'Mecca',
    'Jeddah',
    'Rabigh',
    'Khulais',
    'Al Khurma',
    'Al Jumum',
    'Al Qunfudhah',
    'Thuwal',
    'Turbah',
    'King Abdullah Economic City',
    'Medina',
    'AlUla',
    'Khaybar',
    'Yanbu',
    'Badr',
    'Yanbu',
    'Buraydah',
    'Unayzah',
    'Qbah',
    'Al Asyah',
    'Uyun Al Jawa',
    'Ar Rass',
    'Al Mithnab',
    'Riyadh Al Khabra',
    'Al Badayea',
    'Alhalaliyah',
    'Al Bukayriyah',
    'Ash Shimasiyah',
    'An Nabhaniyah',
    'Al Marmuthah',
    'Al Hofuf',
    'Dammam',
    'Al Khobar',
    'Hafar Al Batin',
    'Al Qatif',
    'Qaryat Al Ulya',
    'Al Jubail',
    'Nairyah',
    'Dhahran',
    'Buqayq',
    'Saihat',
    'Tarout',
    'Al Oyun',
    'Safwa',
    'Al Jesh',
    'Anak',
    'Darin',
    'Khafji',
    'Ras Tanura',
    'Madinatal Umran',
    'Al Mubarraz',
    'Madinat Al Jafr',
    'Juatha',
    'Umm Al-Hamam',
    'Abha',
    'Khamis Mushait',
    'Ahad Rafidah',
    'Tereeb',
    'Almajaridah',
    'Tathleeth',
    'Bisha',
    'Sabt Al Alayah',
    'Muhayil',
    'As Sudah',
    'Al Namas',
    'Tabab',
    'Billasmar',
    'Sarat Abidah',
    'Tendaha',
    'Tabuk',
    'Haql',
    'Tayma',
    'Al Wajh',
    'Umluj',
    'Duba',
    'Hail',
    'Ash Shinan',
    'Turaif',
    'Arar',
    'Al Uwayqilah',
    'Rafha',
    'Jazan',
    'Sabya',
    'Abu Arish',
    'Samtah',
    'Al Aridhah',
    'Ahad Al Masarihah',
    'Yadamah',
    'Sharorah',
    'Najran',
    'Baljurashi',
    'Al Bahah',
    'Al Qurayyat',
    'Suwayr',
    'Sakaka',
    'Tubarjal',
    'Dumah Al Jandal',
    'Adari',
    "Al Majma'ah",
    'Harmah',
    'Tumair',
    'Al Artawiyah',
    'Az Zulfi',
    'Al Ghat',
    'Afif',
    'Thadiq',
    'Shaqra',
    'Al Duwadimi',
    'Al Bijadiyah',
    'Huraymila',
    'Ad Diriyah',
    'Al Uyaynah',
    'Dhurma',
    'Al Quwaiiyah',
    'Ar Ruwaidhah',
    'Ar-Rayyan',
    'Al-Muzahmiya',
    'Al-Kharj',
    'Ad Dilam',
    'Wadi ad-Dawasir',
    'As Sulayyil',
    'Al Hariq',
    'Howtat Bani Tamim',
    'Layla',
    'Taif',
    'Mecca',
    'Jeddah',
    'Rabigh',
    'Khulais',
    'Al Khurma',
    'Al Jumum',
    'Al Qunfudhah',
    'Thuwal',
    'Turbah',
    'King Abdullah Economic City',
    'Medina',
    'AlUla',
    'Khaybar',
    'Yanbu',
    'Badr',
    'Yanbu',
    'Buraydah',
    'Unayzah',
    'Qbah',
    'Al Asyah',
    'Uyun Al Jawa',
    'Ar Rass',
    'Al Mithnab',
    'Riyadh Al Khabra',
    'Al Badayea',
    'Alhalaliyah',
    'Al Bukayriyah',
    'Ash Shimasiyah',
    'An Nabhaniyah',
    'Al Marmuthah',
    'Al Hofuf',
    'Dammam',
    'Al Khobar',
    'Hafar Al Batin',
    'Al Qatif',
    'Qaryat Al Ulya',
    'Al Jubail',
    'Nairyah',
    'Dhahran',
    'Buqayq',
    'Saihat',
    'Tarout',
    'Al Oyun',
    'Safwa',
    'Al Jesh',
    'Anak',
    'Darin',
    'Khafji',
    'Ras Tanura',
    'Madinatal Umran',
    'Al Mubarraz',
    'Madinat Al Jafr',
    'Juatha',
    'Umm Al-Hamam',
    'Abha',
    'Khamis Mushait',
    'Ahad Rafidah',
    'Tereeb',
    'Almajaridah',
    'Tathleeth',
    'Bisha',
    'Sabt Al Alayah',
    'Muhayil',
    'As Sudah',
    'Al Namas',
    'Tabab',
    'Billasmar',
    'Sarat Abidah',
    'Tendaha',
    'Tabuk',
    'Haql',
    'Tayma',
    'Al Wajh',
    'Umluj',
    'Duba',
    'Hail',
    'Ash Shinan',
    'Turaif',
    'Arar',
    'Al Uwayqilah',
    'Rafha',
    'Jazan',
    'Sabya',
    'Abu Arish',
    'Samtah',
    'Al Aridhah',
    'Ahad Al Masarihah',
    'Yadamah',
    'Sharorah',
    'Najran',
    'Baljurashi',
    'Al Bahah',
    'Al Qurayyat',
    'Suwayr',
    'Sakaka',
    'Tubarjal',
    'Dumah Al Jandal',
    'Adari',
];

let AddressUnitFieldsEnum = {
    Region: 'administrative_area_level_1',
    City: 'locality',
    District: 'sublocality',
    PostalCode: 'postal_code',
    Street: 'route',
    BuildingNumber: 'street_number',
    SecondaryNumber: 'postal_code_suffix',
};

const keys = ['region', 'city', 'district', 'postalCode', 'street', 'buildingNumber', 'secondaryNumber'];

function mapAddressPartToType(address, type, addressPart) {
    switch (type) {
        case AddressUnitFieldsEnum.Region: {
            address.region = addressPart;
            break;
        }
        case AddressUnitFieldsEnum.City: {
            address.city = addressPart;
            break;
        }
        case AddressUnitFieldsEnum.District: {
            address.district = addressPart;
            break;
        }
        case AddressUnitFieldsEnum.PostalCode: {
            address.postalCode = addressPart;
            break;
        }
        case AddressUnitFieldsEnum.Street: {
            address.street = addressPart;
            break;
        }
        case AddressUnitFieldsEnum.BuildingNumber: {
            address.buildingNumber = addressPart;
            break;
        }
        case AddressUnitFieldsEnum.SecondaryNumber: {
            address.secondaryNumber = addressPart;
            break;
        }
        default: {
            break;
        }
    }
}

let checkResult = [];

function convertGoogleDataToAddressUnitModel(googleData) {
    const address = {};
    googleData.forEach(addressComponent => {
        const addressPart = addressComponent.long_name;
        addressComponent.types.forEach(type => {
            mapAddressPartToType(address, type, addressPart);
        });
    });
    return address;
}

function updateResults(city, missingKeys, googleAddress, convertedAddress) {
    const resultRow = document.createElement('p');
    resultRow.classList.add('row');

    resultRow.insertAdjacentHTML(
        'afterbegin',
        `<p><b>City</b>: ${city}</p><p><b>Missing address unit parts</b>: ${missingKeys}</p><p><b>Google Address:</b>  ${googleAddress}</p><p><b>Converted Address:</b> ${convertedAddress}</p>`
    );

    results.append(resultRow);
}

async function checkAddressUnits() {
    let index = 0;

    while (index < listOfCities.length) {
        const city = listOfCities[index];
        let missingKeys;
        let googleAddress;
        let convertedAddress;

        geocoder
            .geocode({
                address: city,
            })
            .then(res => {
                const result = res.results[0];
                googleAddress = JSON.stringify(result.address_components);
                const currentConvertedAddress = convertGoogleDataToAddressUnitModel(result.address_components);
                convertedAddress = JSON.stringify(currentConvertedAddress);
                missingKeys = keys.filter(i => !Object.keys(currentConvertedAddress).includes(i)).join(', ');
            })
            .catch(e => {
                missingKeys = 'Not Found';
            })
            .finally(() => {
                updateResults(city, missingKeys, googleAddress, convertedAddress);
            });

        await sleep(1000);
        ++index;
    }
}

function initMap() {
    geocoder = new google.maps.Geocoder();

    checkAddressUnits();
}
