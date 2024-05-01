import {
    DetailSurahs,
    SurahBeforeAfter,
    Ayat,
    DetailAyat
} from '../.././types/ResultDetailSurah.interface.ts';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { detailSurah } from '../.././service/FetchData/DetailSurah.service.ts';

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [surah, setSurah] = useState<Array<Ayat> | undefined | null>(null);
    
    useEffect(() => {
        if(!Number(id) || Number(id) < 1 || Number(id) > 114 || !id) {
            navigate('/surah');
        } else {
            const dataSurah: string = window.localStorage.getItem("id_surah_" + id) as string;
            const query = searchParams.get("nama");
            if(!dataSurah) {
                detailSurah(id, (result: DetailSurahs | undefined): void => {
                    setSurah(result?.ayat);
                    if(query !== result?.nama_latin) {
                        navigate('/surah')
                    }
                    if(result !== undefined || result) {
                        window.localStorage.setItem('id_surah_' + result?.nomor?.toString(), JSON.stringify(result));
                    }
                });
            } else {
                const resStorage: DetailSurahs = JSON.parse(dataSurah);
                setSurah(resStorage?.ayat);
                if(query !== resStorage?.nama_latin) {
                    navigate('/surah')
                }
            }
        }
    }, [surah]);
    
    return (
        <>
            <div className="hero-box">
                <h1 className="hero-title">القرآن الكريم</h1>
                <div className="history-box">
                    <h1 className="text-white font-arab"></h1>
                </div>
            </div>
            <div className="list-surah-container">
                <div className="gap-5 list-surah flex-col max-w-[61.5rem]">
                   {
                        surah?.map((ayat: DetailAyat) => {
                            return (
                                <ListAyat ayat={ayat}/>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

const ListAyat = ({ayat} : {ayat: DetailAyat}) => {
    return (
         <div className="ayat-box pt-6">
            <div dir="rtl" className="w-full">
                <h1 className="leading-[4.5rem] text-3xl text-zinc-800 font-arab dark:text-zinc-200">{ayat?.ar?.replace(/ ࣖ/g, '')} &#64830;{ayat?.nomor?.toLocaleString('ar-EG')}&#64831;</h1>
            </div>
            <div className="w-full mt-3">
                <p className="h-full text-lg text-zinc-700 dark:text-zinc-300 font-mulish font-semibold">{parse(ayat?.tr as string)}</p>
            </div>
            <div className="w-full mt-1.5">
                <p className="h-full text-lg text-zinc-600 dark:text-zinc-400 font-mulish font-normal">{ayat?.idn}</p>
            </div>
        </div>
    )
}