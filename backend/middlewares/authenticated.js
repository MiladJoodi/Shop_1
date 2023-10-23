const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

module.exports = async (req, res, next) => {
  const authorizationHeader = req.header('Authorization')?.split(' ');

  if (authorizationHeader?.length != 2) {
    return res.status(403).json({
      message: "this route is protected and you can't have access to  it.",
    });
  }

  const token = authorizationHeader[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id).lean();
    Reflect.deleteProperty(user, 'password');

    req.user = user;

    next();
  } catch (error) {
    console.error({ errorOnValidatingJWT: error });
  }
};
