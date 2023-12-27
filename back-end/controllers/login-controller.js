import { UserModel } from "../models/user-model.js";

export const login = async (req, res) => {
  // password, email
  const body = req.body;

  if (body.email === undefined) {
    res.status(403).json({ message: "Email required" });
    return;
  }
  if (body.password === undefined) {
    res.status(403).json({ message: "Password required" });
    return;
  }

  const user = await UserModel.findOne({ email: body.email });

  if (!user) {
    res.status(405).json({ message: "User not found" });
  } else {
    if (user.password === body.password) {
      res.status(200).json({ user: user });
      return;
    } else {
      res.status(405).json({ message: "Password not match" });
      return;
    }
  }
};
