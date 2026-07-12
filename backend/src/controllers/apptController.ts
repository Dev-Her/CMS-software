import "../config/env.js";
import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export const getAllAppointments = async (req: Request, res: Response) => {
  const clients = await prisma.appointment.findMany();
  res.json(clients);
};

export const getAppointmentById = async (req: Request, res: Response) => {
  const appointmentId = Number(req.params.id);

  try {
    const client = await prisma.appointment.findUnique({
      where: {
        id: appointmentId,
      },
    });
    if (!client) {
      return res.status(404).json({
        message: "Appointment not found",
      });
    }
    return res.json(client);
  } catch (error) {``
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  const { name, email, phone, dueDate} = req.body;

  if (!name || !email || !phone || !dueDate) {
    return res.status(400).json({
      message: "Name, email, phone, and date are required",
    });
  }
  try {
    const newAppointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        dueDate: new Date(dueDate)
      },
    });
    
    res.status(201).json({
        message:"Appointment created successfully"
    })

  } catch (error)
   {
    return res.status(400).json({
      message: "Can't Create Appointment",
    });
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
  const appointmentId = Number(req.params.id);
  const { name, email, phone, status } = req.body;

  const data: {
    name?: string;
    email?: string;
    phone?: string;
    status?: string;
  } = {};

  if (name) {
    data.name = name;
  }
  if (email) {
    data.email = email;
  }
  if (phone) {
    data.phone = phone;
  }
  if (status) {
    data.status = status;
  }

  try {
    const updatedAppointment = await prisma.appointment.update({
      where: {
        id: appointmentId,
      },
      data,
    });

    return res.status(200).json({
      message: "Appointment updated successfully",
    });
    res.json(updatedAppointment);
  } catch (updatedAppointment) {
    return res.status(404).json({
      message: "Appointment not found",
    });
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  const appointmentId = Number(req.params.id);

  try {
    await prisma.appointment.delete({
      where: {
        id: appointmentId,
      },
    });

    res.json({
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "Appointment not found",
    });
  }
};
