import { nameSchema, usernameSchema, passwordSchema } from './ZodValidation.ts';
import { ChangeEvent, useState } from 'react';
import { ZodError } from 'zod';

export const validate = (
    e: ChangeEvent<HTMLInputElement>,
    type: string,
    callback: (msg: string) => void
): void => {
    switch (type) {
        case 'name':
            try {
                nameSchema.parse(e.target.value);
                callback("Masukan nama lengkap");
            } catch (e) {
                if(e instanceof ZodError) {
                    const errorMessage = JSON.parse(e.message);
                    callback(errorMessage[0].message);
                }
            }
            break;
        case 'username':
            try {
                usernameSchema.parse(e.target.value);
                callback("Masukan nama pengguna");
            } catch (e) {
                if(e instanceof ZodError) {
                    const errorMessage = JSON.parse(e.message);
                    callback(errorMessage[0].message);
                }
            }
            break;
        case 'password':
            try {
                passwordSchema.parse(e.target.value);
                callback("Masukan kata sandi");
            } catch (e) {
                if(e instanceof ZodError) {
                    const errorMessage = JSON.parse(e.message);
                    callback(errorMessage[0].message);
                }
            }
            break;
    }
}