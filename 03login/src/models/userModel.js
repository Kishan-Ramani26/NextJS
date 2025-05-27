
import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: string,
  forgotPasswordExpiry: Date,
  verifyToken: string,
  verifyTokenExpiry: Date,
});


const User = mongoose.model.users || mongoose.model("user s", userSchema);

export default User;