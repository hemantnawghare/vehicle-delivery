import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, require: true, enum: ["client", "driver", "staff"]},
    info: {type: mongoose.Schema.Types.Mixed, default: {}}
}, {minimize: false})

const userModel = mongoose.models.newUser || mongoose.model("newUser", userSchema)

export default userModel;