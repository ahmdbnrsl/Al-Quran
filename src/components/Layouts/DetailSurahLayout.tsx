import {
    DetailSurahs,
    SurahBeforeAfter,
    Ayat,
    DetailAyat
} from '../.././types/ResultDetailSurah.interface.ts';
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
            if(!dataSurah) {
                detailSurah(id, (result: DetailSurahs | undefined): void => {
                    setSurah(result?.ayat);
                    searchParams.set("nama", result?.nama_latin as string);
                    setSearchParams(searchParams);
                    if(result !== undefined || result) {
                        window.localStorage.setItem('id_surah_' + result?.nomor?.toString(), JSON.stringify(result));
                    }
                });
            } else {
                const resStorage: DetailSurahs = JSON.parse(dataSurah);
                setSurah(resStorage?.ayat);
                searchParams.set("nama", resStorage.nama_latin as string);
                setSearchParams(searchParams);
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
                                <div className="w-full p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                                <div dir="rtl" className="w-full">
                                    <h1 className="leading-[4.5rem] text-3xl text-white font-arab">{ayat?.ar?.replace(/ ࣖ/g, '')}</h1>
                                </div>
                                <h1 className="text-zinc-400 font-mulish font-medium">{ayat?.idn}</h1>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}