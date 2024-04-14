import axios from 'axios';

export const getData: any = (callback: any) => {
    const options = {
        headers: {
            'Authorization': '4Hm4DI3N1RU5L1211807_Vi4Fitri4nA==='
        },
        url: 'https://alquranqu.up.railway.app/surah'
    }
  axios
  .request(options)
  .then(data => {
    callback(data.data);
  })
}