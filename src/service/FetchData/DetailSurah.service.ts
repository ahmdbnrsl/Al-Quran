import axios from 'axios';
import {
    DetailSurahs,
    SurahBeforeAfter,
    Ayat,
    DetailAyat
} from '../.././types/ResultDetailSurah.interface.ts';

const authToken: string = import.meta.env.VITE_AUTH;
const urlApi: string = import.meta.env.VITE_URLAPI;

export const detailSurah = (
    id: string | undefined,
    callback: (result: Ayat[] | undefined) => void
) => {
    const options = {
        url: urlApi + 'surah/' + id,
        method: 'GET',
        headers: {
            'Authorization': authToken
        },
        withCredentials: true
    }
    axios
    .request(options)
    .then(res => {
        callback(res.data.ayat);
    })
    .catch(() => {
        callback(undefined);
    })
}