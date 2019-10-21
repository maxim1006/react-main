import faker from 'faker';

const date1 = new Date().toLocaleDateString();
const date2 = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString();
const date3 = new Date(new Date().setDate(new Date().getDate() - 2)).toLocaleDateString();

export const comments = [
    {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        content: faker.lorem.sentence(),
        date: date1,
        img: faker.image.avatar(),
        occupation: faker.name.jobTitle(),
        id: 1
    },
    {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        content: faker.lorem.sentence(),
        date: date2,
        img: faker.image.avatar(),
        occupation: faker.name.jobTitle(),
        id: 2
    },
    {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        content: faker.lorem.sentence(),
        date: date3,
        img: '/images/icons/bell.svg',
        occupation: faker.name.jobTitle(),
        id: 3
    }
];
