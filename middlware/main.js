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

export const allowCrossDomain = (req, res, next) => {
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type, Accept,Authorization,Origin");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Credentials", true);
        next()
}