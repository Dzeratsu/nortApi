import mongoose from 'mongoose'
import addOrder from '../../schema/order.js'
import {decoderToken} from "../../config/decToken.js";


export const putEditOrder = async (req, res) => {
    const token = req.headers.authorization.split(' ')
    const manager = await decoderToken(token[1])
    const order = mongoose.model(manager, addOrder, manager)
   order.count( function (err, text){
       if (err) throw err;
       console.log(text);
   })
}