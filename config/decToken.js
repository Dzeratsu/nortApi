import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config({path:'.env'})



export const decoderToken = async (token) => {
    let decoded = await jwt.decode(token, process.env.TOKEN_SECRET)
    let manager = await decoded
    return manager
}