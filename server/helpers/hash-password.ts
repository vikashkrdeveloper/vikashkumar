import bcrypt from "bcrypt";
export const hashPasswordFunction = async (password: string) => {
    try {
        const salt = 12;
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        return error;
    }
};