import axios from 'axios';
import { FormEvent } from 'react';

const authToken: string = import.meta.env.VITE_AUTH;
const urlApi: string = import.meta.env.VITE_URLAPI;

export const register = (
    e: FormEvent<HTMLInputElement | HTMLFormElement>,
    callback: () => void
): void => {
    interface Data extends EventTarget {
        fullname: HTMLInputElement;
        username: HTMLInputElement;
        password: HTMLInputElement;
    }
    interface RegisterData {
        name: string;
        username: string;
        password: string;
    }
    const ev: Data = e.target as Data;
    const data: RegisterData = {
        name: ev.fullname.value,
        username: ev.username.value,
        password: ev.password.value
    }
    const options = {
        url: urlApi + 'user',
        method: 'POST',
        headers: {
            'Authorization': authToken
        },
        withCredentials: true,
        data
    }
    axios
    .request(options)
    .then((res) => {
        alert(res.data);
        callback();
    })
    .catch(err => {
        alert(err.message)
        callback();
    });
}