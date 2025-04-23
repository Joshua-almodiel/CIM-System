import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ success: false, error: "Wrong Password" });
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_KEY,
      { expiresIn: "12h" }
    );

    return res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const verify = (req, res) => {
  return res.status(200).json({ success: true, user: req.user });
};

const getAllUserEmails = async (req, res) => {
  try {
    const users = await User.find({ role: "parent" }, "email");
    const emails = users.map((user) => user.email);

    res.status(200).json({ success: true, emails });
  } catch (error) {
    console.error("Error fetching parent emails:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const registerHealthWorker = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (role !== "healthWorker") {
      return res.status(400).json({ success: false, error: "Invalid role" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ success: true, message: "Health worker added successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

export { login, verify, getAllUserEmails, registerHealthWorker };
