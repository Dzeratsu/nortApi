import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({path:'.env'})


/*сгенерировать токен */
function generateToken(name){
    return jwt.sign(name, process.env.TOKEN_SECRET)
}

export default generateToken