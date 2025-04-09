import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { loginUser } from "@/utils/api";

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
        email: { label: "email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log(credentials);
        
        const response = await loginUser(credentials);

        // If login fails, throw an error with detailed message
        if (!response.success) {
          throw new Error(
            JSON.stringify({
              message: response.error,
              remainingAttempts: response.remainingAttempts,
              isLocked: response.isLocked,
              lockoutTime: response.lockoutTime,
            })
          );
        }

        // Return user object on success
        return {
          id: response.user.id,
          email: response.user.email,
        };
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  pages: {
    signIn: "/loginPage",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // Add user ID to session
      return session;
    },
  },
}



const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }