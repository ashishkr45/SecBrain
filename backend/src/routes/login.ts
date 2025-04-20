0// Libraries Imported
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";  
import { z } from "zod";
import { User } from "../database/db"; 

// Creating Express Instance
const loginRouter: Router = Router();
const JWT_SECRET = process.env.JWT_SECRET as string;

// Defining Schema for User Input
const signupSchema = z.object({
	username: z.string().min(3),
	email: z.string().email().max(60),
	password: z.string().min(10).max(45),
});

const signinSchema = z.object({
	username: z.string().min(8, { message: "Name should be at least 8 characters" }),
	password: z.string().min(10).max(45)
});

loginRouter.post("/signup", (req: Request, res: Response) => {
    const handleSignup = async () => {
        const parseData = signupSchema.safeParse(req.body);
        if (!parseData.success) {
            return res.status(400).json({
                message: "Error in inputs",
                error: parseData.error.errors,
            });
        }

        const { email, password, username } = req.body;

        const repeated = await User.findOne({ username });
        if (repeated) {
            return res.status(403).json({
                message: "Username is already taken!",
            });
        }

        const hashedPass = await bcrypt.hash(password, 10);
        await User.create({ email, password: hashedPass, username });

        return res.status(201).json({ 
            message: "Signed Up Successfully!",
        });
    };

    handleSignup().catch((error) => {
        const errMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(500).json({ message: "Error while signing up", error: errMessage });
    });
});

loginRouter.post("/signin", (req: Request, res: Response) => {
  const handleSignin = async () => {
    const parseData = signinSchema.safeParse(req.body);
    if (!parseData.success) {
      return res.status(400).json({
        message: parseData.error.issues.map((issue) => issue.message).join(", "),
      });
    }

    const { username, password } = parseData.data;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user.id.toString() }, JWT_SECRET);
    return res.status(200).json({ message: "Signed in successfully", token });
  };

  handleSignin().catch((error) => {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ message: "Error while signing in", error: errMessage });
  });
});

export default loginRouter;
