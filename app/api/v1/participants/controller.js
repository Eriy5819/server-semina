const {
  signupParticipant,
  activateParticipant,
} = require('../../../services/mongoose/participant');

const { StatusCodes } = require('http-status-codes');

const signup = async (req, res, next) => {
  try {
    const result = await signupParticipant(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const activeParticipant = async (req, res, next) => {
  try {
    const result = await activateParticipant(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, activeParticipant };
