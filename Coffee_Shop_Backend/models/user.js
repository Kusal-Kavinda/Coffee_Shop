import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    collection: 'user'
});

// Middleware to hash password before saving
userSchema.pre('save', async function(next) {
    try {
        // Only hash the password if it has been modified (or is new)
        if (!this.isModified('password')) {
            return next();
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

const userModel = mongoose.model('user', userSchema);

export default userModel;