import { v4 as uuidv4 } from 'uuid';

export default (sequelize, Sequelize) => {
  const RefreshToken = sequelize.define("refreshToken", {
    token: { type: Sequelize.STRING },
    expiryDate: { type: Sequelize.DATE },
  });

  RefreshToken.createToken = async function (user) {
    let expiredAt = new Date();
    // 24 horas de duración
    expiredAt.setSeconds(expiredAt.getSeconds() + 86400);

    let _token = uuidv4();
    let refreshToken = await this.create({
      token: _token,
      userId: user.id,
      expiryDate: expiredAt.getTime(),
    });
    return refreshToken.token;
  };

  RefreshToken.verifyExpiration = (token) => {
    return token.expiryDate.getTime() < new Date().getTime();
  };

  return RefreshToken;
};