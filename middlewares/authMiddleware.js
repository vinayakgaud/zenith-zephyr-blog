import { validateTokenforUser } from "../utils/authJwtConfig.js";

export function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      next();
    } else {
      const token = tokenCookieValue.split("Bearer ")[1];
      try {
        const userPayload = validateTokenforUser(token);
        req.user = userPayload;
      } catch (error) {
        console.log(error);
      }
      next();
    }
  };
}
