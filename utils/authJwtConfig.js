import jwt from "jsonwebtoken";

const secret = process.env.SECRET_KEY;

export const createTokenforUser = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    profileImage: user.profileImageURL,
    role: user.role,
  };

  const token = jwt.sign(payload, secret);
  return token;
};

export const validateTokenforUser = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};
