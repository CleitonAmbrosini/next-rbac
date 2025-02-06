import fastifyCors from '@fastify/cors';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { createAccound } from './routes/auth/create-account';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(fastifyCors);

app.register(createAccound);

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running');
});
