
export const validateEmail = (email: string) => {
    if (!email) {
        return "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        return "Invalid email address";
    }
    return true;
};

export const validatePassword = (password: string) => {
    if (!password) {
        return "Password is required";
    } else if (password.length < 6) {
        return "Password must be at least 6 characters long";
    }
    return true;
};
