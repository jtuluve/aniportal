import { adminLogin } from "@/lib/dbfunctions";
import NextAuth,{AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions:AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign In",
      type: "credentials",
      credentials: {},
      // credentials options
      async authorize(credentials, req) {
        try {
          const { username, password } = credentials as {
            username: string;
            password: string;
          };
          if(!username || !password) return Promise.resolve(null);
          const user = await adminLogin({username, password});
          return Promise.resolve(user ? {id: user._id, ...user}: null);
        } catch (error) {
          console.error("Authentication error:", error);
          return Promise.resolve(null);
        }
      },
    }),
    // other providers
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
