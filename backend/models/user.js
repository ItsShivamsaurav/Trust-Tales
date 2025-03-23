const {Schema,model} = require('mongoose');
const {createHmac, randomBytes} = require('crypto');
const {createTokenForUser} = require('../services/authentication');

const userSchema = new Schema({
    name:{
       type: String,
       required:true,
    },
    email:{
       type:String,
       require:true,
    },
    salt:{
       type: String,
    },
    password:{
       type:String,
       require: true,
    }
},{timestamps:true});


userSchema.pre('save', function(next){
    const user = this;
    if(!user.isModified('password'))return;
        const salt = randomBytes(16).toString("hex");
        const hashpassword = createHmac('sha256',salt).update
        (user.password).digest('hex');
        this.salt = salt;
        this.password = hashpassword;
        next();
    
})


userSchema.static("matchpasswordAndGenerateToken", async function(email,password){
    const user = await this.findOne({email});
    if(!user)throw new Error("User not found");
    const salt = user.salt;

    console.log(salt);

    const hashedPassword = user.password;
    const userProvidedhashedPassword = createHmac('sha256',salt
    ).update(password).digest('hex');
    if(hashedPassword !== userProvidedhashedPassword)throw new Error("Password does not match");
    const token = createTokenForUser(user);
    return token;
});
    

const User = model('user',userSchema);
module.exports = User;