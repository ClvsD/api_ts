import { Request, Response } from 'express';

interface Task {
  id: number;
  desc: string;
}

let task: Task[] = [];
export const List_Task = (req: Request, res: Response): void => {
  res.json(task);
};

export const Create_Task = (req: Request, res: Response): void => {
    const { desc }: { desc: string } = req.body;
    const newTask: Task = { id: task.length + 1, desc };
    task.push(newTask);
    res.status(201).json(newTask);
};  