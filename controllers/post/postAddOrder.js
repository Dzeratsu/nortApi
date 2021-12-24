import mongoose from 'mongoose'
import addOrder from '../../schema/order.js'

export const postAddOrder = async (req, res) => {
        const order = mongoose.model(req.body.manager, addOrder, req.body.manager)
        let abc = new order(req.body)
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
