// Import the Fastify library
import FastifyJWT from '@fastify/jwt';
import 'dotenv/config';
import Fastify from 'fastify';

import { env } from './config/env';
import { privateRoutes, publicRoutes } from './routes';

const fastify = Fastify();

fastify.register(FastifyJWT, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '2d',
  },
});

fastify.register(publicRoutes);
fastify.register(privateRoutes);

fastify.listen({ port: 3001 }).then(() => {
  console.log('> Server is now listening on http://localhost:3001');
});
