import faker from 'faker';

export const posts =  Array.from({length: 10}, (item, index) => ({

  id: index,
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph()

}));
