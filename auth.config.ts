import type { NextAuthConfig } from "next-auth";
import { use } from "react";

export const authConfig = {
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedPage = nextUrl.pathname === "/";
      if (isProtectedPage) {
        if (isLoggedIn) return true;
        return false;
      }
      return true;
    },
    async signIn({ user, account, profile }) {
      return true;
    },
    async redirect({ baseUrl, url }) {
      console.log(baseUrl, url);
      if (url.endsWith("/sign-in")) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
