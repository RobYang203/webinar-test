import faker from '@faker-js/faker';
import { Factory, Model } from 'miragejs';

export const models = {
  user: Model,
  subscribe: Model,
  webinar: Model,
};

export const factories = {
  user: Factory.extend({
    id(i) {
      return i + 1;
    },
  }),
  webinar: Factory.extend({
    id(i) {
      return i + 1;
    },
    title() {
      return faker.lorem.words();
    },
    content() {
      return `<p>${faker.lorem.paragraphs()}</p> <p>${faker.lorem.paragraphs()}</p>`;
    },
    created_at() {
      return faker.time.recent('unix');
    },
  }),
  subscribe: Factory.extend({
    id(i) {
      return i + 1;
    },
  }),
};
