import { Prisma } from '@prisma/client';

export interface CreateTaskDto extends Prisma.TaskCreateInput {}
