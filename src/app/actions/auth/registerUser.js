"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    try {
      //   const db = await dbConnect();
        const userCollection = dbConnect(collectionNames.TEST_USER);

        // Extract email & password
        const { email, password } = payload;
        if (!email || !password) {
            return { success: false, message: "Email and password are required" };
        }

        // Check if user already exists
        const user = await userCollection.findOne({ email });
        if (user) {
            return { success: false, message: "User already exists" };
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;

        // Insert new user
        const result = await userCollection.insertOne(payload);
        
        return {
            success: true,
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString(), // Convert ObjectId to string
        };
    } catch (error) {
        console.error("Error registering user:", error);
        return { success: false, message: error.message };
    }
};
