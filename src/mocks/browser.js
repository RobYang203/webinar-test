import { createServer } from 'miragejs';
import { factories, models } from './db';
import routes from './routes';

const configureServer = () => {
  return createServer({
    routes,
    factories,
    models,
    fixtures: {
      users: [
        {
          name: 'Tony',
          password: '123456',
          email: 'tony@gmail.com',
        },
      ],
    },
    seeds(server) {
      server.loadFixtures();
      
      server.createList('webinar', 100);
    },
  });
};

export default configureServer;
