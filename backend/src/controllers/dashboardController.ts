import "../config/env.js";
import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();


export const getDashboardStats = async (req: Request, res: Response) => {
    try {
        const totalClients = await prisma.client.count();
        const totalTasks =   await prisma.task.count();
        const totalAppointments = await prisma.appointment.count();
    

        return res.json({
            totalClients,
            totalTasks,
            totalAppointments
        });
    }catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }

    
}