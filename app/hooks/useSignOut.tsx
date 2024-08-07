'use client'
import { useCallback } from "react";
import { signOut as nextAuthSignOut } from "next-auth/react";

const useSignOut = () => {
  const handleSignOut = useCallback(async () => {
    await nextAuthSignOut({callbackUrl: '/sign-in'}) 
  }, []);

  return handleSignOut;
};

export default useSignOut;
