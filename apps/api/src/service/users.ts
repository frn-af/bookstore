import { users } from "../entity/users";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await users.insert({
    username,
    email,
    password: await hash(password, 10),
  });
  return res.json(user);
};
