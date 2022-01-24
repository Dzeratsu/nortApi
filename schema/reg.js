import mongoose from 'mongoose'
const Schema = mongoose.Schema
const registredUser = new Schema ({
    login: {type:String, requred: true},
    eMail: {type: String, requred: true},
    FIO: {type: Array, requred: true},
    password: {type: String, requred: true},
    acsessLvl: {type: Number, default: 2},
    registredAt: {type: Date, default: Date.now()}
})

const regUser = mongoose.model('users', registredUser, 'users')
export default regUser

/*
    login: берется из первой части email,
    eMail: указывается при регистрации,
    password: указывается при регистрации, хранится в hex,
    acsessLvl: уровни пользователя, 1 - начальник, 2 менеджер, по умолчанию 2,
    registredAt: дата регистрации
*/
