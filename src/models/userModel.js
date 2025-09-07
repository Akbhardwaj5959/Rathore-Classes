import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: [true, "Please provide a username"], unique: true },
    email: { type: String, required: [true, "Please provide an email"], unique: true },
    password: { type: String, required: [true, "Please provide a password"] },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    forgotPasswordToken: { type: String },
    forgotPasswordExpiry: { type: Date },
    verifyToken: { type: String },
    verifyTokenExpiry: { type: Date },
    // role: { type: String, enum: ['user', 'admin'], default: 'user' },

});

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
