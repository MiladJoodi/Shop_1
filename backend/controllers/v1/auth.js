const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../../models/user');
const courseUserModel = require('../../models/course-user');
const registerValidator = require('../../validators/v1/register');

exports.register = async (req, res) => {
  console.log(req.body);
  
  const validationResult = registerValidator(req.body);
  if (validationResult != true) return res.status(422).json(validationResult);
  const { username, password, name, email } = req.body;

  const isUserExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  const countOfRegisteredUser = await userModel.count();

  if (isUserExists) {
    return res.status(409).json({
      message: 'username or email is duplicate.',
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await userModel.create({
    email,
    username,
    name,
    password: hashedPassword,
    role: countOfRegisteredUser > 0 ? 'USER' : 'ADMIN',
  });

  const userObject = user.toObject();

  Reflect.deleteProperty(userObject, 'password');

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1 day',
  });

  return res.status(201).json({ user: userObject, accessToken });
};

exports.login = async (req, res) => {
  const { identifier, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ email: identifier }, { username: identifier }],
  });

  if (!user) {
    return res.status(401).json('there is no user with this email or username');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'password is not correct' });
  }

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1 day',
  });

  return res.json({ accessToken });
};

exports.getMe = async (req, res) => {
  const userCourses = await courseUserModel
    .find({ user: req.user._id })
    .populate('course');

  const courses = [];

  for (const userCourse of userCourses) {
    courses.push(userCourse.course);
  }

  return res.json({ ...req.user, courses });
};
