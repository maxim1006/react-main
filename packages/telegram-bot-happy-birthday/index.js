import { birthdays } from './admin/birthdays.js';
import * as dotenv from 'dotenv';

dotenv.config();

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

// URL для отправки сообщения
const sendMessageUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

let initedOnStart = false;

function main() {
    if (!initedOnStart) {
        congratulate();
        initedOnStart = true;
    }

    setTimeout(
        () => {
            congratulate(main);
            console.log(`${new Date()} tick`);
        },
        1000 * 60 * 60 * 24,
    );
}

function congratulate(cb) {
    const date = new Date();
    const todayDay = date.getDate();
    const todayMonth = date.getMonth() + 1;

    console.log('birthday script triggered', new Date());

    birthdays.forEach(([name, date]) => {
        const [birthdayDay, birthdayMonth] = date.split('/');
        const birthdayDayNum = +birthdayDay;
        const birthdayMonthNum = +birthdayMonth;

        if (todayDay === birthdayDayNum && todayMonth === birthdayMonthNum) {
            // Отправка запроса
            fetch(sendMessageUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `С днем рождения ${name} !!! 🍰🍰🍰`,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    data.ok
                        ? console.log('Message sent successfully to ' + name)
                        : console.log('Failed to send message:', data);

                    cb?.();
                })
                .catch(error => console.error('Error:', error));
        }
    });
}

main();
