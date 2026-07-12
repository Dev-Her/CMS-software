import "../config/env.js";
import type { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export const getAllClients = async (req: Request, res: Response) => {
  const clients = await prisma.client.findMany();
  res.json(clients);
};

export const getClientById = async (req: Request, res: Response) => {
  const clientId = Number(req.params.id);

  try {
    const client = await prisma.client.findUnique({
      where: {
        id: clientId,
      },
    });
    if (!client) {
      return res.status(404).json({
        message: "Client not found",
      });
    }
    return res.json(client);
  } catch (error) {``
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const createClient = async (req: Request, res: Response) => {
  const { name, email, phone, status } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      message: "Name, email, and phone are required",
    });
  }
  try {
    const newClient = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        status: status || "lead",
      },
    });
    res.status(201).json(newClient);
  } catch (error) {
    return res.status(400).json({
      message: "Email already exists!",
    });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  const clientId = Number(req.params.id);
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
    const updatedClient = await prisma.client.update({
      where: {
        id: clientId,
      },
      data,
    });

    return res.status(200).json({
      message: "Client updated successfully",
    });
    res.json(updatedClient);
  } catch (updatedClient) {
    return res.status(404).json({
      message: "Client not found",
    });
  }
};

export const deleteClient = async (req: Request, res: Response) => {
  const clientId = Number(req.params.id);

  try {
    await prisma.client.delete({
      where: {
        id: clientId,
      },
    });

    res.json({
      message: "Client deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: "Client not found",
    });
  }
};
