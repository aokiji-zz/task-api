import { Router } from 'express';
import prisma from './config/database/prisma';
import TaskService from './task/task.service';

const route = Router();

const task = new TaskService();

route.post('/task', async (request, response) => {
  console.log('reqeust', request?.body);
  const criarProduto = await task.create(request?.body);
  return response.json(criarProduto);
});

route.get('/task/:id', async (request, response) => {
  const id = Number(request.params.id);
  console.log('id', id);
  const findUniqueTask = await task.findUnique(id);
  console.log(findUniqueTask);
  return response.json(findUniqueTask);
});

route.get('/tasks', async (request, response) => {
  console.log('query', request?.query);
  const listaDeProdutos = await task.findMany(request?.query);

  return response.json(listaDeProdutos);
});

route.put('/update/:id', async (request, response) => {
  const { title, description } = request.body;

  const id = Number(request.params.id);

  const atualizarProduto = await task.update(request.body);

  return response.json(atualizarProduto);
});

route.delete('/delete/:id', async (request, response) => {
  const id = Number(request.params.id);

  const deletarProduto = await task.delete(id);

  return response.json(deletarProduto);
});

export default route;
