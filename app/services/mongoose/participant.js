const Participant = require('../../api/v1/participants/model');
const {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} = require('../../errors');
const { otpMail } = require('../mail');

const signupParticipant = async (req) => {
  const { firstName, lastName, email, password, role } = req.body;

  // jika email dan status tidak aktif
  let result = await Participant.findOne({
    email,
    status: 'Tidak aktif',
  });

  if (result) {
    result.firstname = firstName;
    result.lastName = lastName;
    result.role = role;
    result.email = email;
    result.password = password;
    result.otp = Math.floor(Math.random() * 9999);
    await result.save();
  } else {
    result = await Participant.create({
      firstName,
      lastName,
      email,
      password,
      role,
      otp: Math.floor(Math.random() * 9999),
    });
  }
  await otpMail(email, result);

  delete result._doc.password;

  return result;
};

module.exports = { signupParticipant };
