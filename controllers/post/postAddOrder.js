import mongoose from 'mongoose'
import addOrder from '../../schema/order.js'
import {decoderToken} from "../../config/decToken.js";

export const postAddOrder = async (req, res) => {
        const token = req.headers.authorization.split(' ')
        const manager = await decoderToken(token[1])
        if(manager === 'admin'){
                var order = mongoose.model(req.body.manager, addOrder, req.body.manager)
        }else {
                var order = mongoose.model(manager, addOrder, manager)
        }
        let abc = new order(req.body)
        let lastOrder = await mongoose.model(manager).find().limit(1).sort({$natural:-1})
        if(lastOrder[0].id !== undefined){
        abc.id = lastOrder[0].id + 1
        }else {
                abc.id = 1
        }
        try{
                let sav = await abc.save()
                console.log(sav)
                console.log('sucsses')
                res.status(200).send('sucsses')
        }
        catch (e){
                console.log(e)
        }
}
