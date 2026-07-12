import "../config/env.js";
import type { Request, Response } from "express";
import { PrismaClient, Priority } from "../generated/prisma/client.js";
import type { Priority as PriorityType } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

const isPriority = (value: unknown): value is PriorityType => {
  return value === Priority.Low || value === Priority.Medium || value === Priority.High;
};

export const getAllTasks = async (req: Request, res: Response) => {
  const { search } = req.query;

  try {
    const tasks = await prisma.task.findMany({
      where: search
        ? {
            OR: [
              {
                title: {
                  contains: String(search),
                  mode: "insensitive",
                },
              },
              {
                description: {
                  contains: String(search),
                  mode: "insensitive",
                },
              },
            ],
          }
        : {},
    });

    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const getTaskById = async (req: Request, res: Response) => {
  const taskId = Number(req.params.id);

  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    return res.json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const createTask = async (req: Request, res: Response) => {
  console.log("Reached");
  const { title, description, dueDate, priority } = req.body;

  if (!title || !description || !dueDate || !priority) {
    return res.status(400).json({
      message: "Title, description, due date, and priority are required",
    });
  }

  if (!isPriority(priority)) {
    return res.status(400).json({
      message: "Priority must be Low, Medium, or High",
    });
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        dueDate: new Date(dueDate),
        priority,
      },
    });

    return res.status(201).json({
      message: "Task successfully created",
      task: newTask,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const taskId = Number(req.params.id);
  const { title, description, dueDate, completed, priority } = req.body;

  const data: {
    title?: string;
    description?: string;
    dueDate?: Date;
    completed?: boolean;
    priority?: PriorityType;
  } = {};

  if (title) data.title = title;
  if (description) data.description = description;
  if (dueDate) data.dueDate = new Date(dueDate);
  if (completed !== undefined) data.completed = completed;
  if (priority) {
    if (!isPriority(priority)) {
      return res.status(400).json({
        message: "Priority must be Low, Medium, or High",
      });
    }

    data.priority = priority;
  }

  try {
    await prisma.task.update({
      where: {
        id: taskId,
      },
      data,
    });

    return res.status(200).json({
      message: "Task updated successfully",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const taskId = Number(req.params.id);

  try {
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    return res.json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Task not found",
    });
  }
};
