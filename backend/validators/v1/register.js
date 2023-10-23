const Validator = require('fastest-validator');

const v = new Validator();

const schema = {
  name: { type: 'string', min: 3, max: 255 },
  username: { type: 'string', min: 3, max: 100 },
  email: { type: 'email' },
  password: { type: 'string' },
  confirmPassword: { type: 'equal', field: 'password' },
  $$strict: true, // no additional properties allowed
};

const check = v.compile(schema);

module.exports = check;
