import type { NextAuthConfig } from "next-auth";

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
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        return url;
      }
      return baseUrl;
    },
    signIn() {
      return "/";
    }

  },
  providers: [],
} satisfies NextAuthConfig;
