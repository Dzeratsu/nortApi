import regUser from '../../schema/reg.js'
import {decoderToken} from "../../config/decToken.js";

export const postUserInfo = async (req, res) => {
    const token = req.headers.authorization.split(' ')
    const manager = await decoderToken(token[1])
    const user = await regUser.find({login: manager}, {_id:0})
    if(user){
    let object = {
        'user': user[0].login,
        'acsessLvl': user[0].acsessLvl,
        'name': user[0].FIO
    }
        res.status(200).json(object)
    }
}