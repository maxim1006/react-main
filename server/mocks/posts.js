import faker from 'faker';
import {getRandomIntInclusive} from "../helpers/helpers";

export const posts =  Array.from({length: getRandomIntInclusive(5, 15)}, (item, index) => ({

  userId: index,
  id: index,
  title: faker.lorem.sentence().slice(0, 30),
  body: faker.lorem.paragraph().slice(0, 50)

}));
