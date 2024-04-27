import axios from 'axios';
import type { ResultListSurah } from '../.././types/ResultListSurah.interface.ts';

const authToken: string = import.meta.env.VITE_AUTH;
const urlApi: string = import.meta.env.VITE_URLAPI;

export const listSurah = (
    callback: (result: ResultListSurah[] | undefined) => void
) => {
    const options = {
        url: urlApi + 'surah',
        method: 'GET',
        headers: {
            'Authorization': authToken
        },
        withCredentials: true
    }
    axios
    .request(options)
    .then(res => {
        callback(res.data);
    })
    .catch(() => {
        callback(undefined);
    })
}