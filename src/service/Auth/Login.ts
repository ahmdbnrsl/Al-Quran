import axios from 'axios';
import { FormEvent } from 'react';

const authToken: string = import.meta.env.VITE_AUTH;
const urlApi: string = import.meta.env.VITE_URLAPI;

export const login = (
    e: FormEvent<HTMLInputElement | HTMLFormElement>,
    callback: (msg: string) => void
) => {
    interface Data extends EventTarget {
        username: HTMLInputElement;
        password: HTMLInputElement;
    }
    interface LoginData {
        username: string;
        password: string;
    }
    const ev: Data = e.target as Data;
    const data: LoginData = {
        username: ev.username.value,
        password: ev.password.value
    }
    const options = {
        url: urlApi + 'user/login',
        method: 'PUT',
        headers: {
            'Authorization': authToken
        },
        withCredentials: true,
        data
    }
    axios
    .request(options)
    .then((res) => {
        callback("Berhasil masuk");
        window.localStorage.setItem("auth_token", res.data.token)
        window.location.href = "/home";
    })
    .catch(err => {
        if(err.response.status === 422) {
            callback("Nama pengguna atau kata sandi salah!");
        } else {
            callback("Terjadi kesalahan");
        }
    });
}