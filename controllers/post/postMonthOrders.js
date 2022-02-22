import mongoose from 'mongoose'
import addOrder from '../../schema/order.js'
import {decoderToken} from "../../config/decToken.js";

export const postMonthOrders = async (req, res) => {
    const token = req.headers.authorization.split(' ')
    const manager = await decoderToken(token[1])
    const allOrder = await mongoose.model(manager, addOrder, manager).find({month: req.params.mounth})
    res.status(200).json(allOrder)
}