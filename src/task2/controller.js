const schedule = async (req, res, next) => {
  try {
    // development pending
    return res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = { schedule };
