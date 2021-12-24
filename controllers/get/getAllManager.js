import regUser from "../../schema/reg.js";
export const getAllManager = async (req, res) => {
    const users = await regUser.find()
    if(users){
    res.status(200).json(users)
    }
}