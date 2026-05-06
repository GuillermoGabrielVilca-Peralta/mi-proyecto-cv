// ... importaciones anteriores
const { refreshToken: RefreshToken, user: User } = db;

export const refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (!requestToken) return res.status(403).json({ message: "Refresh Token es requerido" });

  try {
    let refreshToken = await RefreshToken.findOne({ where: { token: requestToken } });

    if (!refreshToken) return res.status(403).json({ message: "Token no encontrado en BD" });

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.destroy({ where: { id: refreshToken.id } });
      return res.status(403).json({ message: "El token expiró. Inicie sesión de nuevo" });
    }

    const user = await refreshToken.getUser();
    let newAccessToken = jwt.sign({ id: user.id }, authConfig.secret, { expiresIn: '1h' });

    return res.status(200).json({ accessToken: newAccessToken, refreshToken: refreshToken.token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const signout = async (req, res) => {
  try {
    // El ID viene del middleware verifyToken (req.userId)
    await RefreshToken.destroy({ where: { userId: req.userId } });
    res.status(200).send({ message: "Sesión cerrada con éxito" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};