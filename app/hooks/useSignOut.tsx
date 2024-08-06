import { useCallback } from "react";

const useSignOut = () => {
  const handleSignOut = useCallback(async () => {
    const response = await fetch("/api/auth/sign-out", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (response.ok) {
      window.location.href = "/sign-in";
    }
  }, []);

  return handleSignOut;
};

export default useSignOut;
