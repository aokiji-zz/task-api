import prisma from '../config/database/prisma';
import { CreateTaskDto } from './dto/body/create-task';
import { UpdateTaskDto } from './dto/body/update-task';
import { Task } from './dto/model';

export default class TaskService {
  async findUnique(id: number): Promise<Task> {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
    });
    return {
      description: task.description,
      completed: task.completed,
      createdAt: task.createdAt,
      id: task.id,
      priority: task.priority,
      title: task.title,
      updatedAt: task.updatedAt,
      dueDate: task.dueDate,
    };
  }

  async findMany({ take = 10, skip = 0 }): Promise<Task[]> {
    const findManyTasks = await prisma.task.findMany({ take, skip });

    return findManyTasks;
  }

  async create(body: CreateTaskDto): Promise<Task> {
    const createTask = await prisma.task.create({
      data: {
        ...body,
      },
    });

    return createTask;
  }

  async update(body: UpdateTaskDto): Promise<Task> {
    const updateProduct = await prisma.task.update({
      where: {
        id: body?.id,
      },
      data: {
        ...body,
      },
    });

    return updateProduct;
  }

  async delete(id: number): Promise<void> {
    await prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
