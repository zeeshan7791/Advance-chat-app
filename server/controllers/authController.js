import User from "../models/user.js";
import bcryptjs from "bcrypt"

export const signUp = async (req, res, next) => {
    const { username, email, password, photo } = req.body;
    // console.log(req.file);
    console.log(req.body);
    const filename = req.file ? req.file.filename : "";
    try {
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
        if (existingUser.username === username) {
          // Username is already in use
          return next(errorHandler(409, "Duplicate username"));
        }
        if (existingUser.email === email) {
          // Email is already in use
          return next(errorHandler(409, "Duplicate email "));
        }
      }
    //   const hashedPassword = bcryptjs.hashSync(password, 10);
     console.log(req.body,"User value")
     const hashedPassword = bcryptjs.hashSync(password, 10);
      const newUser = new User({
        username,
        email,
        password:hashedPassword,
      photo,
      });
      await newUser.save();
    //   console.log(newUser.avatar);
      res.status(201).json("user creater successfully");
    } catch (error) {
    res.status(400).json("error")
      // next(errorHandler(501, "error from my sde"));
    }
  };