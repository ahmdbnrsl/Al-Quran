import axios from 'axios';
import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getData } from './service/getData';

function Seceleton() {
  const arr = Array(114)
  return (
    <div className="w-full min-h-screen p-5 bg-slate-50 text-gray-700 flex flex-wrap gap-3 justify-center">
      {
        arr.fill(() => {}).map(() => {
          return (
            <div className="flex justify-between items-center w-full px-4 py-3 rounded bg-white shadow md:max-w-md">
              <div className="flex items-center gap-3">
                <div>
                  <Skeleton className="bg-gray-50"  duration={1} height={25} width={25} />
                </div>
                <div className="leading-4">
                  <Skeleton className="bg-gray-50"  duration={1} height={12} width={100} />
                  <Skeleton className="bg-gray-50" duration={1} height={9} width={100} />
                  <Skeleton className="bg-gray-50" duration={1} height={9} width={100} />
                </div>
              </div>
              <div><Skeleton className="bg-gray-50" duration={1} height={20} width={120} /></div>
           </div>
          )
        })
      }
    </div>
  )
}

function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData((data: any) => {
      setResult(data);
      setLoading(false);
    })
  }, [result, loading]);
  return (
    <>
     <div className="flex justify-center items-center flex-col w-full bg-teal-600 px-5 py-5">
       <div className="font-far font-normal text-white text-3xl">القران الكريم</div>
       <div className="mt-6 px-5 py-2.5 bg-teal-900 w-full rounded max-w-4xl flex justify-between items-center">
         <div>
           <div><p className="h-full text-white font-normal text-xs">Lanjutkan membaca</p></div>
           <div className="mt-2.5"><h1 className="h-full text-white font-medium text-2xl">Al-Fatihah</h1></div>
           <div><p className="text-yellow-400 font-normal text-md h-full">Ayat 5</p></div>
         </div>
         <h1 className="font-far text-3xl font-normal text-white">الفاتحة</h1>
       </div>
      </div>
      <div className="flex justify-center bg-gray-50 w-full p-5 shadow shadow-xl shadow-gray-100 border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full max-w-4xl flex justify-between">
          <input className="bg-gray-100 rounded outline-0 border border-gray-200 px-5 py-1 text-md font-normal focus:border-teal-600 active:border-teal-600" type="text" placeholder="cari surah"/>
          <div className="text-2xl text-gray-400">@</div>
        </div>
      </div>
      {loading && <Seceleton/>}
      {!loading && 
      <div className="w-full min-h-screen p-5 bg-slate-50 text-gray-700 flex flex-wrap gap-3 justify-center">
        {
          result.map((dat: any) => {
            return (
              <div className="flex justify-between w-full px-4 py-3 rounded bg-gray-50 shadow shadow-2xl shadow-gray-200 border border-gray-200 items-center md:max-w-md">
              <div className="flex items-center gap-3">
                <div className="text-teal-600 text-3xl font-normal">
                  ۞
                </div>
                <div className="text-left">
                  <p className="text-gray-900 font-medium font-arial text-sm">{dat.nomor}. {dat.nama_latin}</p>
                  <p className="text-gray-500 text-xs font-normal font-arial">{dat.arti}</p>
                  <p className="text-gray-500 text-xs font-normal font-arial">{dat.tempat_turun === 'mekah' ? 'makkiyah' : 'madaniyah'} | {dat.jumlah_ayat} Ayat</p>
                </div>
              </div>
                <div className="text-teal-600 font-normal text-3xl font-far">{dat.nama}</div>
              </div>
            )
          })
        }
      </div>
      }
    </>
  )
}

export default App
