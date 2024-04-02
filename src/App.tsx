import axios from 'axios';
import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getData } from './service/getData';

function Seceleton() {
  const arr = Array(114)
  return (
    <div className="w-full min-h-screen p-5 bg-slate-50 text-gray-700 flex flex-wrap gap-5 justify-center">
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
      {loading && <Seceleton/>}
      {!loading && 
      <div className="w-full min-h-screen p-5 bg-slate-50 text-gray-700 flex flex-wrap gap-3.5 justify-center">
        {
          result.map((dat: any) => {
            return (
              <div className="flex justify-between w-full px-4 py-3 rounded bg-gray-50 shadow shadow-2xl shadow-gray-200 border border-gray-200 items-center md:max-w-md">
              <div className="flex items-center gap-3">
                <div className="text-blue-500 text-lg font-semibold">{dat.nomor}.</div>
                <div>
                  <p className="text-gray-900 font-medium font-arial text-sm">{dat.nama_latin} <span className="text-gray-600 font-normal text-xs">({dat.tempat_turun === 'mekah' ? 'makkiyah' : 'madaniyah'})</span></p>
                  <p className="text-gray-600 text-xs font-normal font-arial">{dat.arti}</p>
                  <p className="text-blue-500 text-xs font-normal font-arial">{dat.jumlah_ayat} Ayat</p>
                </div>
              </div>
                <div className="text-gray-800 font-semibold text-xl">{dat.nama}</div>
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
