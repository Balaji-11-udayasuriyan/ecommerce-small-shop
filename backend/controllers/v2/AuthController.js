const User = require('../../models/User');

const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

// Register a new user

const register = async ( req, res ) =>{

    try{

        const {username, email, password} = req.body;

        const existingUser = await User.findOne({email});

        if (existingUser) return res.status(400).json({ message: 'Email already registed'});

        const user = new User({ username, email, password });
        await user.save();

        res.status(201).json({ message: 'User registered Successfully'});
        

    }catch(err){

        res.status(500).json({ error: err.message});

    }
};

// Login user

const login = async (req, res) => {

    try{

        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))){

            return res.status(401).json({ message: 'Invalid email or password'});

        }

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET,{ expiresIn: '1h'});
        res.status(200).json({ token, user: { id: user._id, username: user.username, email: user.email} });

    }catch(err){

        res.status(500).json({error: err.message});

    }
};

// Logout user

const logout = async( req, res ) => {

   res.status(200).json({message: "User Logged out successfully "});
};

// const logout = (req, res) => {
//     const token = req.header('Authorization')?.replace('Bearer ', '').trim();
//     if (token) {
//         tokenBlacklist.add(token); // Blacklist the token
//         res.status(200).json({ message: 'Logged out successfully' });
//     } else {
//         res.status(400).json({ message: 'No token provided' });
//     }
// };

module.exports = { register, login, logout };