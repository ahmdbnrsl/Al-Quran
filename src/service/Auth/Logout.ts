import axios from 'axios';

const authToken: string = import.meta.env.VITE_AUTH;
const urlApi: string = import.meta.env.VITE_URLAPI;

export const logout = (
    callback: () => void
) => {
    const getCookieValue = (name: string) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    );
    
    const options = {
        url: urlApi + 'user/logout',
        method: 'PUT',
        headers: {
            'Authorization': authToken,
            'Userauth': getCookieValue('authToken')
        },
        withCredentials: true
    }
    axios
    .request(options)
    .then(() => {
        document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        callback();
    })
    .catch(() => {
        callback();
    });
}