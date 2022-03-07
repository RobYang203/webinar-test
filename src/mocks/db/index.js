import { factory, primaryKey } from '@mswjs/data';
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
    userId: String,
    webinarId: String,
  },
  auth: {
    id: primaryKey(faker.datatype.uuid),
    token: String,
    userId: String,
  },
});

window.db = DBSchema;

export default DBSchema;
