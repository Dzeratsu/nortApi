let err401 = {
        status: 'false',
        info: 'Пользователь не авторизован'
}

export const auth =  (req, res, next) => {
        if(!req.headers.authorization){
               return  res.status(401).json(err401)
        }
        else {
                next()
        }
}
export const test = (req, res, next) =>{
        console.log('test2')
}