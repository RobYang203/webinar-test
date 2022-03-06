import { setupWorker } from 'msw';
import { serverInit } from './db';
import * as routes from './routes';

const mockWorker = setupWorker(...Object.values(routes));

serverInit();

export default mockWorker;