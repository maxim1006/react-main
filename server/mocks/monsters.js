import {getRandomIntInclusive} from "../helpers/helpers";
import faker from "faker";

export default Array.from({length: getRandomIntInclusive(5, 15)}, (ittem, index) => ({
    id: index,
    name: faker.name.findName(),
}));
