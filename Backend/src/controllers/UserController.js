const UserService = require("../services/UserServer");
const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const res = await UserService.createUser();
    return res.status(200).json(res);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createUser,
};
