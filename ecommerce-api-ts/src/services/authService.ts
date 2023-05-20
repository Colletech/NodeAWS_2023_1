import * as jwt from "jsonwebtoken";

const secret: string = "ul176AD^^^Eso[xQBMZ~";

export const verifyToken = (token: string): string => {
  const decoded: { userId: string } = jwt.verify(token, secret) as {
    userId: string;
  };

  console.log(jwt.verify(token, secret));
  console.log(decoded);

  const { userId } = decoded;

  return userId;
};
