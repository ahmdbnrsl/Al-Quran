import { FormEvent } from 'react';
import { ZodError } from 'zod';
import { registerSchema, loginSchema } from './ZodValidation.ts';

export const submitValidate = (
    e: FormEvent<HTMLInputElement | HTMLFormElement>,
    type?: string
) => {
    interface Data extends EventTarget {
        fullname: HTMLInputElement;
        username: HTMLInputElement;
        password: HTMLInputElement;
    }
    const ev: Data = e.target as Data;
    if(type === "daftar") {
        const data: {
            name: string,
            username: string,
            password: string
        } = {
            name: ev.fullname.value,
            username: ev.username.value,
            password: ev.password.value
        }
        
        try {
            registerSchema.parse(data);
        } catch (error) {
            if(error instanceof ZodError) {
                const msg = JSON.parse(error.message);
                if(msg[0].path[0] === "name") {
                    ev.fullname.focus();
                } else if(msg[0].path[0] === "username") {
                    ev.username.focus();
                } else if(msg[0].path[0] === "password") {
                    ev.password.focus();
                }
            }
        }
    } else {
        const data: {
            username: string,
            password: string
        } = {
            username: ev.username.value,
            password: ev.password.value
        }
        
        try {
            loginSchema.parse(data);
        } catch (error) {
            if(error instanceof ZodError) {
                const msg = JSON.parse(error.message);
                if(msg[0].path[0] === "username") {
                    ev.username.focus();
                } else if(msg[0].path[0] === "password") {
                    ev.password.focus();
                }
            }
        }
    }
}