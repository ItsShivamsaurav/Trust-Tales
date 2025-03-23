const JWT = require('jsonwebtoken');
const secret = "$hivamsaurav@1718" ;

function createTokenForUser(user){
    const payload = {
        _id:user._id,
        name:user.name,
        email:user.email,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token){
    try{
        const payload = JWT.verify(token, secret);
        return payload;
    }catch(e){
        return null;
    }
}

module.exports = {createTokenForUser, validateToken,};