const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer', '').trim();;
    if (!token) return res.status(401).json({ message: 'Unauthorized'});

    try{

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();

    }catch(err){

        res.status(401).json({ message: 'Invalid token'});
    }

};

module.exports = authMiddleware;



// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {

//     // const token = req.headers['authorization']?.split('')[1];
//     const token = req.headers['authorization']?.split(' ')[1];  // Corrected split syntax
//     if (!token) return res.status(403).send('A token is reqired for authentication');

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

//         if (err) return res.status(401).send('Invalid Token');
//         req.user = decoded;
//         next();
//     });

// };
