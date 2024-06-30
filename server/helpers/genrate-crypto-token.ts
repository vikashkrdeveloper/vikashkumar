import crypto from 'crypto';

export const genrateCryptoToken = (minutesValid: number) => {
    const token = crypto.randomBytes(64).toString('hex');
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + minutesValid);
    return { token, expires };
}