import mongoose from "mongoose";
import bcrypt from "bcrypt";

export interface userDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
};

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre('save',async function(next:any){
  let user = this as userDocument;

  if(!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hashSync(user.password,salt);

  user.password = hash;

  return next();

})

userSchema.method.comparePassword = async function(candidatePassword:string){
    const user = this as userDocument;
    return bcrypt.compare(candidatePassword,user.password).catch((e) => false)
}

const user = mongoose.model("user", userSchema);

export default user;
