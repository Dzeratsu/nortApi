import regUser from '../../schema/reg.js'
import bcrypt from 'bcryptjs'
let err400 = {
    status: 'false',
    info: 'Bad Request'
}
let err409 = {
    status: 'false',
    info: 'Пользователь с таким e-mail уже существует'
}

export const registration = async (req, res) => {
    if(req.body.login === '' || req.body.email === '' || req.body.password === ''){
        res.status(400).json(err400)
    }else{
        const hashPassword = await bcrypt.hashSync(req.body.password, 10)
        const login = req.body.email.split('@')
        const user = {
            'login': login[0],
            'eMail': req.body.email,
            'password': hashPassword
        }
        let testEmail = await regUser.findOne({'eMail': user.eMail})
        if(testEmail){
            console.log('Пользователь с таким e-mail уже существует')
            res.status(409).json(err409)
        }else {
            let sh = new regUser(user)
            try {
                let saveUser = await sh.save()
                console.log(saveUser)
                res.send('sucsess')
            } catch (e) {
                console.log(e)
            }
        }
    }
}