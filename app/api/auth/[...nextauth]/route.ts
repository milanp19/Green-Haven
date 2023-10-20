import users from "@/app/helpers/constants";
import { url } from "inspector";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", placeholder: "Username" },
        password: {
          label: "Password",
          placeholder: "Password",
        },
      },

      //@ts-ignore
      async authorize(credentials, req) {
        if (!credentials || !credentials.username || !credentials.password) {
          return null;
        }

        const user = users.find((item) => item.name === credentials?.username);

        if (user?.password === credentials.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  // callbacks: {
  //   async signIn({ account, profile }) {
  //     if (account?.provider === "google") {
  //       return (
  //         // @ts-ignore
  //         profile?.email_verified && profile.email?.endsWith("@gmail.com")
  //       );
  //     }
  //     return true; // Do different verification for other providers that don't have `email_verified`
  //   },
  // },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
