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
          const { password } = credentials as {
            password: string;
          };
          const user = password === process.env.ADMIN_PASSWORD ? { id: "1" } : null;
          return Promise.resolve(user);
        } catch (error) {
          console.error("Authentication error:", error);
          return Promise.resolve(null);
        }
      },
    }),
    // other providers
  ],
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
