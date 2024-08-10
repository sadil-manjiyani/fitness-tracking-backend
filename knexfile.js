import { knexConnection } from './config/index.js';

export const development = knexConnection;
export const staging = knexConnection;
export const production = knexConnection;
