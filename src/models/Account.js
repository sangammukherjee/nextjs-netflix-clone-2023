import mongoose from "mongoose";

const NewAccountSchema = new mongoose.Schema(
  {
    uid: String,
    name: String,
    pin: String,
  },
  { timestamps: true }
);

const Account =
  mongoose.models.Account || mongoose.model("Account", NewAccountSchema);

export default Account;
