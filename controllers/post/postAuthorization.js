import regUser from '../../schema/reg.js'
import bcrypt from "bcryptjs";
import generateToken from "../../config/tokenGen.js";
let err401 = {
    status: 'false',
    info: 'Не верный логин или пароль'
}
let err400 = {
    status: 'false',
    info: 'Bad Request(одно из полей не заполненно)'
}
let err404 = {
    status: 'false',
    info: 'Пользователь не найден'
}
export const postAuthorization = async (req, res) => {
    console.log(req.body)
            if(req.body.login === '' || req.body.password === ''){
                res.status(400).json(err400)
            }else {
                const login = req.body.login
                let searchUser = await regUser.findOne({'login': login})
                if(searchUser) {
                    bcrypt.compare(req.body.password, searchUser.password, (err, result) =>{
                        if(result){
                            const token = generateToken(req.body.login)
                            let data = {
                                "user": req.body.login,
                                "status": "sucssec",
                                "acsess": searchUser.acsessLvl,
                                "token": token
                            }
                            res.status(200).json(data)
                            console.log('auth.sucssec')
                        }else {
                            res.status(401).json(err401)
                        }
                    })
                }else {
                    res.status(401).json(err404)
                }
            }
}