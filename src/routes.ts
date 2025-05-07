import { FastifyInstance } from 'fastify';

import { ListOrdersController } from './controllers/ListOrdersController';
import { SignInController } from './controllers/SignInController';
import { SignUpController } from './controllers/SignUpController';
import { authMiddleware } from './middlewares/authMiddleware';

export async function publicRoutes(fastify: FastifyInstance) {
  fastify.post('/signup', SignUpController.handle);
  fastify.post('/signin', SignInController.handle);
}

export async function privateRoutes(fastify: FastifyInstance) {
  fastify.addHook('onRequest', authMiddleware);

  fastify.get('/orders', ListOrdersController.handle);
}
