const twilio = require('twilio');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.TWILIO_SID);
console.log(process.env.TWILIO_AUTH_TOKEN);
console.log(process.env.PHONE_NUMBER);

function sendSms() {
    const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

    client.messages
        .create({ body: '1243', from: '+12232714590', to: process.env.PHONE_NUMBER })
        .then(m => console.log(`Message sent ${m}`))
        .catch(err => console.log(err));
}

function getFlats() {
    setTimeout(() => {
        fetch(
            'https://flat.pik-service.ru/api/v1/filter/flat-by-block/1688?type=1,2&rooms=-1&floorFrom=10&floorTo=33&status=free&notFirstFloor=1&notLastFloor=1&hasFinish=1&flatPage=1&onlyFlats=1&sortBy=price&orderBy=asc',
            {
                headers: {
                    accept: '*/*',
                    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7',
                    'cache-control': 'no-cache',
                    'content-type': 'text/plain',
                    pragma: 'no-cache',
                    'sec-ch-ua':
                        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"macOS"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'cross-site',
                    token: 'eyJleHAiOjE3MTc3NDcwNDQsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJjdXN0b21lcklkIjoxMTEzNDk5LCJzb3VyY2VJZCI6NSwiZ3VpZCI6ImU4ZWU0YWRjLThjZjgtZWQxMS04NjIwLTAwNTA1NjhkNTU3YyIsImxvZ2luIjoiNzkyNjI0NjQ0MzgiLCJibG9jayI6WzM3OF0sImRldmljZUlkIjoyOTkxODYsImlzQWRtaW4iOmZhbHNlfQ.CF8phvXg_zeenH5JSLAObnBgP7ztCz4vsaY_iFm76o2lxZeNAcanBxX-qaRMOIpcivTU_GCcmDT-aeaMCwO6uIjpc22jUBuc9gBrLChy36zW9-ccwBeJygOB_tXY3YxVEQfkyg_xkizBIlwzajtsa31fsWu11DFUG8VDfOFh3k-j4DNRRL_yY7q4Nqmca38Z2W_-5aK7pUVINk_A7kEJqsqt8CoZxVUXa8HY8_IqC88JELmU7_9mkYaqeVTVManvNrJ4d0mGOIRVQzuXe4lTQAKe30axruRM_ulxfscrnlsjzGi_p3soADRRWgyTaDHFrMGxsBukBqeKHtlk6oqj6w',
                    Referer: 'https://www.pik.ru/',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                },
                body: null,
                method: 'GET',
            },
        )
            .then(data => {
                try {
                    const contentType = data.headers.get('content-type');
                    if (contentType && contentType.includes('application/json')) {
                        return data.json();
                    } else {
                        throw new Error('Response is not JSON');
                    }
                } catch (e) {
                    console.log('Response is not JSON ', e);
                    return null;
                }
            })
            .then(data => {
                if (!data) return getFlats();

                const prices = data.data.items.map(i => i.price).sort((a, b) => a - b);

                console.log(JSON.stringify(prices));

                if (prices?.[0] < 10_000_000) {
                    sendSms();
                }

                getFlats();
            });
    }, 20000);
}

getFlats();
