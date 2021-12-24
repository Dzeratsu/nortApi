import mongoose from 'mongoose'
const Schema = mongoose.Schema
const AddOrder = new Schema({
    date: {type: Date, default: Date.now},
    manager: String,
    source: {type: Number, min: 0, max: 1},
    id: Number,
    name: String,
    eMail: String,
    phone: {type:String, maxlenght: 11},
    sity: String,
    status: {type: Number, min:0, max: 6, default: 0},
    textOrder: {type: String, required: true},
    result: {type:[String], default: []},
    read: {type:Boolean, default: false}
})
/*const OrderSheme = mongoose.model('OrderScheme', AddOrder)*/
export default AddOrder

/*
    date: Дата,
    source: 0 почта, 1 сайт
    id: заявки менеджера(при переноси надо перезаписать),
    name: Клиент или имя закачика,
    eMail: емайл,
    phone: телефон в 10 значном виде,
    sity: Город,
    status: Статусы,
    textOrder: Текст заявки,
    result: Коментарии менеджера в массиве - push новый комент
    read: Прочитано\не прочитано

 */