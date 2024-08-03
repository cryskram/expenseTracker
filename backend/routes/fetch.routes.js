import { PrismaClient } from "@prisma/client";
import express from "express";

const router = express.Router();
const prisma = new PrismaClient();

// GET: Fetch all the expenses
router.get("/", async (req, res) => {
  console.log("[DATABASE] Fetching all the data");
  const expensesData = await prisma.expense.findMany({});
  res.status(200).json(expensesData);
});

// POST: Create new expense
router.post("/new", async (req, res) => {
  const { reason, amount, type, category } = req.body;
  console.log("[DATABASE] Creating new expenses");
  try {
    const newData = await prisma.expense.create({
      data: {
        reason,
        amount: parseFloat(amount),
        type,
        category,
      },
    });

    res.status(201).json(newData);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

export default router;
