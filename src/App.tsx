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
     <div className="flex justify-center items-center flex-col w-full bg-teal-600 px-5 py-8">
       <div className="font-far font-normal text-white text-5xl">القران الكريم</div>
       <div className="mt-6 font-far font-normal text-yellow-400 text-3xl">لَّا يَمَسُّهُۥٓ إِلَّا ٱلْمُطَهَّرُونَ</div>
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
                  <p className="text-gray-900 font-medium font-arial text-sm">{dat.nama_latin}</p>
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
