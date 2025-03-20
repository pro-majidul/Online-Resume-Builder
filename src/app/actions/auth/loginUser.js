"use server"

import dbConnect, { collectionNames } from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

export const loginUser = async (payload) => {
    const {email, password} = payload;

    const userCollection = await dbConnect(collectionNames.USERS);
    const user = await userCollection.findOne({email})

    if(!user) return null
    const isPasswordOk = await bcrypt.compare(password, user.password); // Fixed
    if(!isPasswordOk) return null

    return user
}