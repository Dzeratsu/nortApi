import mongoose from 'mongoose'
import addOrder from '../../schema/order.js'
import {decoderToken} from "../../config/decToken.js";


export const postMonthOrders = async (req, res) => {
    const token = req.headers.authorization.split(' ')
    const manager = await decoderToken(token[1])
    if(manager !== 'admin'){
    const allOrder = await mongoose.model(manager, addOrder, manager).find({month: req.params.mounth})
    res.status(200).json(allOrder)
    }else {
       if(Object.keys(req.body).length === 0){
            res.status(200).send([])
        }else {
        let needManager = req.body.manager
        const allOrderManager = await mongoose.model(needManager, addOrder, needManager).find({month: req.params.mounth})
            res.status(200).json(allOrderManager)
        }
    }
}