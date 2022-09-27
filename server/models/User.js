import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: { type: String, required: ['Firstname is required'] },
    lastName: { type: String, required: ['Lastname is required'] },
    email: { type: String, required: ['Email is required'] },
    password: { type: String, required: ['Password is required'] }
},
    { timestamps: true }
);

export default new mongoose.model('User', userSchema);