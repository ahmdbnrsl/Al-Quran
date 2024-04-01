import axios from 'axios';

export const getData: any = (callback: any) => {
  axios.get('https://alquranqu.up.railway.app/surah')
  .then(data => {
    callback(data.data);
  })
}