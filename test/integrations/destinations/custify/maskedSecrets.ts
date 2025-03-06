import path from 'path';

export const secret1 = path.basename(__dirname) + 1;
export const secret2 = path.basename(__dirname) + 2;
export const secret3 = path.basename(__dirname) + 3;
export const secret4 = undefined;

export const authHeader1 = `Bearer ${secret1}`;
export const authHeader2 = `Bearer ${secret2}`;
export const authHeader3 = `Bearer ${secret4}`;
