import { setupWorker } from 'msw';
import * as routes from './routes';

const mockWorker = setupWorker(...Object.values(routes));

export default mockWorker;