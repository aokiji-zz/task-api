import { Priority } from '@prisma/client';

export interface Task {
  id: number;
  title: string;
  description?: string | null;
  dueDate?: Date | string | null;
  priority: Priority;
  completed: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}
