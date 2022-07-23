const jwt = require('jsonwebtoken');

module.exports = (req,res) => {
    const token = req.headers.authorization;
    console.log(token);
}