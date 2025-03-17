import dbConnect, { collectionNames } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials);

                // Add logic here to look up the user from the credentials supplied
                const {username,password} = credentials;
                const user = await dbConnect(collectionNames.TEST_USER).findOne({username})
                const isPasswordOk = password == user.password
                // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (isPasswordOk) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token, user }) {
            if(token) {
                session.user.username = token.username;
                session.user.role = token.role
            }
            return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            if(user){
                token.username = user.username
                token.role = user.role
            }
            return token
          }
      }
}