import jwt from 'jsonwebtoken'
const generateTokenAandSetCookie = (userId, res)=>{
    const token = jwt.sign({userId} , process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIERY
    })
}