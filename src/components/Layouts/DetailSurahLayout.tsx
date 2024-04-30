import {
    DetailSurahs,
    SurahBeforeAfter,
    Ayat,
    DetailAyat
} from '../.././types/ResultDetailSurah.interface.ts';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { detailSurah } from '../.././service/FetchData/DetailSurah.service.ts';

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [surah, setSurah] = useState<Ayat[] | undefined>([]);
    
    useEffect(() => {
        if(!Number(id) || Number(id) < 1 || Number(id) > 114 || !id) {
            navigate('/surah');
        } else {
            detailSurah(id, (result: Ayat[] | undefined): void => {
                setSurah(result)
            })
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
                <div className="list-surah flex-col items-end">
                   {
                        surah?.map((ayat: DetailAyat) => {
                            return (
                                <h1 className="text-2xl text-white font-arab">{ayat?.ar?.replace(/ ࣖ/g, '')}</h1>
                            )
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}