const User = require("../models/UserModel");
const bcryptjs = require("bcryptjs");
const { genneralAccessToken, genneralRefreshToken } = require("./JWTService");
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = newUser;
    try {
      const checkUser = await User.findOne({
        email: email,
      });
      if (checkUser !== null) {
        resolve({
          status: "OK",
          message: "The email is already",
        });
      }
      const hash = bcryptjs.hashSync(password, 10);
      console.log(hash);
      const createdUser = await User.create({
        name,
        email,
        password: hash,
        confirmPassword: hash,
        phone,
      });
      if (createdUser) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createdUser,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
const loginUser = (userLogin) => {
  return new Promise(async (resolve, reject) => {
    const { name, email, password, confirmPassword, phone } = userLogin; // Chỉ cần email và password cho login
    try {
      // Tìm user theo email
      const checkUser = await User.findOne({ email });
      if (!checkUser) {
        return resolve({
          status: "ERROR",
          message: "The user is not defined",
        });
      }

      // So sánh mật khẩu
      const comparePassword = bcryptjs.compareSync(
        password,
        checkUser.password
      );
      if (!comparePassword) {
        return resolve({
          status: "ERROR",
          message: "The password or user is incorrect",
        });
      }
      const access_token = await genneralAccessToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });
      const refresh_token = await genneralRefreshToken({
        id: checkUser.id,
        isAdmin: checkUser.isAdmin,
      });
      // Nếu thành công
      return resolve({
        status: "SUCCESS",
        message: "Login successful",
        data: checkUser,
        access_token,
        refresh_token,
      });
    } catch (error) {
      // Xử lý lỗi
      return reject({
        status: "ERROR",
        message: "An error occurred during login",
        error: error.message,
      });
    }
  });
};
module.exports = {
  createUser,
  loginUser,
};
