import { Prisma } from '@prisma/client';

export interface UpdateTaskDto extends Prisma.TaskUpdateInput {
  id: number;
  title: string;
  description: string;
}
