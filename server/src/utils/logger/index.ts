import pino from "pino";
import pretty from "pino-pretty";

const stream = pretty({
  colorize: true,
  translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
  ignore: 'pid,hostname'
});

export const logger = pino(
  {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
  },
  stream
);
