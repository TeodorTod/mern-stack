import { Router } from "express";
import Transaction from "../models/Transaction.js";
import passport from "passport";
import * as TransactionConroller from '../controller/TransactionController.js'

const router = Router();

router.get('/', TransactionConroller.index);

router.post("/", TransactionConroller.create);

router.delete("/:id", TransactionConroller.destroy);

router.patch("/:id", TransactionConroller.update);

export default router;
