import {z} from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number(),
}); 

const result = schema.parse({
  name: "John",
  age: "asdf",
});