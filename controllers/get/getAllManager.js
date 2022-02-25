import regUser from "../../schema/reg.js";
export const getAllManager = async (req, res) => {
    const users = await regUser.find({acsessLvl: 2}, {FIO: 1, login: 1, _id: 0})
    if(users){
    res.status(200).json(users)
    }else{
        res.status(500)
    }
}