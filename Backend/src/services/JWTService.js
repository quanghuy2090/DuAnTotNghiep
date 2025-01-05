const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const genneralAccessToken = async (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    "access_token",
    { expiresIn: "1h" }
  );
  return access_token;
};
const genneralRefreshToken = async (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    "refresh_token",
    { expiresIn: "365d" }
  );
  return refresh_token;
};

//admin moi co quyen xoa tai khoan

module.exports = {
  genneralAccessToken,
  genneralRefreshToken,
};
