const { sendOtpEmail } = require('../utils/mailer.util');
const { generateToken } = require('../utils/token.utils');
const { registerSchema, loginSchema } = require('../validations/users.validate');
const bcrypt = require('bcryptjs');
const { Users } = require('../models');

const register = async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { name, email, password } = req.body;
    try {
        const existingUser = await Users.findOne({where: {email}});
        if (existingUser) {
            return res.status(400).json({message: 'User already exists with this email.'});
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = await Users.create({
                name,
                email,
                password: hashedPassword
            });

            res.status(200).json({message: 'User registered successful'});
        }
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).json('Internal server error');
    }
}

const login = async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const {email, password, otp} = req.body;
    try {
        const checkUser = await Users.findOne({where: {email}});
        if (!checkUser) {
            return res.status(400).json({message: 'Please register first.'});
        } 

        if (otp) {
            if (checkUser.otp !== otp || Date.now() > checkUser.otpExpiry) {
                return res.status(401).json({message: 'otp either expired of invalid.'});
            }
            await checkUser.update({otp: null, otpExpiry: null});
        } else if (password) {
            const isPasswordMatch = await bcrypt.compare(password, checkUser.password);

            if (!isPasswordMatch) {
                return res.status(400).json({message: 'Please enter valid password'});
            }
        } else {
            const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
            await checkUser.update({ otp: generatedOtp, otpExpiry: Date.now() + 10 * 60 * 1000 });

            await sendOtpEmail(email, generatedOtp);
            return res.json({ message: 'OTP sent to your email' });
        }
        
        const token = generateToken({ id: checkUser.id, email: checkUser.email });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

module.exports = { register, login};