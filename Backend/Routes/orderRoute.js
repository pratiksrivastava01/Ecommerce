import express from "express";
import { newOrder } from "../Controller/orderController.js";

const router = express.Router();

router.route("/order/new").post(newOrder);

export default router