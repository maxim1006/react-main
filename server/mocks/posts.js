import faker from 'faker';

export const posts =  Array.from({length: 10}, (item, index) => ({

  userId: index,
  id: index,
  title: faker.lorem.sentence().slice(0, 30),
  body: faker.lorem.paragraph().slice(0, 50)

}));
