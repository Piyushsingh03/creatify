import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, unique: true, require: true },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true, require: true },
  creaditBalance: { type: Number, default: 10 },
  planId: { type: Number, default: 1 },
  photo: { type: Schema.Types.ObjectId, ref: "Image" },
  clerkId: { type: String, unique: true, require: true },
});

const User = models?.User || model("User", UserSchema);
export default User;
