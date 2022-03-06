import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import faker from '@faker-js/faker';

const DBSchema = factory({
  users: {
    id: primaryKey(faker.datatype.uuid),
    email: String,
    name: String,
    password: String,
  },
  webinars: {
    id: primaryKey(faker.datatype.uuid),
    title: String,
    content: String,
    created_at: Number,
  },
  subscribes: {
    id: primaryKey(faker.datatype.uuid),
    user: oneOf('user'),
    webinar: oneOf('webinars'),
  },
  auth: {
    id: primaryKey(faker.datatype.uuid),
    token: String,
    userId: String,
  },
});

export default DBSchema;
