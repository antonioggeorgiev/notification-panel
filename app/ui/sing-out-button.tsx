'use client'

export default function SignOutButton() {
    const handleSignOut = async () => {
        const response = await fetch('/api/auth/sign-out', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });
        if (response.ok) {
          window.location.href = '/sign-in';
        }
    };
  return (
    <button
      onClick={handleSignOut}
      className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <div>Sign Out</div>
    </button>
  );
}
