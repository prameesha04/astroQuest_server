import astroCollection from "../Model/astroQuestModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();
const genrateToken = (id) => {
  return jwt.sign({ id }, process.env.JSON_WEB, {
    expiresIn: "1h",
  });
};

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await astroCollection.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = astroCollection({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      jwt: generateToken(_id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkMail = await astroCollection.findOne({ email });
    if (!checkMail) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      jwt: genrateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
