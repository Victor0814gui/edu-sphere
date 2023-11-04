import { io } from 'socket.io-client';
import { baseUrl } from './api';

// "undefined" means the URL will be computed from the `window.location` object
const URL = baseUrl

export const socket = io(URL);