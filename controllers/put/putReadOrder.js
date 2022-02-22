import mongoose from 'mongoose'
import addOrder from '../../schema/order.js'
import {decoderToken} from "../../config/decToken.js";

export const putReadOrder = async (req, res) => {
    const token = req.headers.authorization.split(' ')
    const manager = await decoderToken(token[1])
    const order = await mongoose.model(manager, addOrder, manager)
    const update = {read: true}
    const orderId = await order.findOneAndUpdate({_id: req.params.id}, update)
    try{
        res.status(200).send('sucsses')
        console.log('read: true')
    }catch (e){
        console.log(e)
    }
}