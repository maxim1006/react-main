import faker from 'faker';

export const users = Array.from({length: 10}, (item, index) => {
    return {
        id: index,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        occupation: faker.name.jobTitle(),
        address: {
            city: faker.address.city(),
            street: faker.address.streetName(),
            zip: faker.address.zipCode(),
        }
    }
});
