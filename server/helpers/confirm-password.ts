import bcrypt from 'bcrypt';
export const confirmPasswordFunction = async (password: string, confirmPassword: string) => {
    try {
        const isMatch = await bcrypt.compare(password, confirmPassword);
        return isMatch;
    } catch (error) {
        return false;
    }
};