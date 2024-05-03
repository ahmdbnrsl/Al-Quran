import {
    DetailSurahs,
    SurahBeforeAfter,
    Ayat,
    DetailAyat
} from '../.././types/ResultDetailSurah.interface.ts';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { 
    FaRegCopy, 
    FaRegBookmark, 
    FaRegShareFromSquare 
} from "react-icons/fa6";
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { detailSurah } from '../.././service/FetchData/DetailSurah.service.ts';
import Input from '.././Elements/Input.tsx';

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [desc, setDesc] = useState<DetailSurahs | null>(null);
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
                    setDesc({
                        nomor: result?.nomor,
                        nama: result?.nama,
                        jumlah_ayat: result?.jumlah_ayat,
                        nama_latin: result?.nama_latin,
                        arti: result?.arti,
                        tempat_turun: result?.tempat_turun,
                        deskripsi: result?.deskripsi,
                        audio: result?.audio
                    });
                    if(query !== result?.nama_latin) {
                        navigate('/surah')
                    }
                    if(result !== undefined || result) {
                        window.localStorage.setItem('id_surah_' + result?.nomor?.toString(), JSON.stringify(result));
                    }
                });
            } else {
                const resStorage: DetailSurahs = JSON.parse(dataSurah);
                setDesc({
                    nomor: resStorage?.nomor,
                    nama: resStorage?.nama,
                    jumlah_ayat: resStorage?.jumlah_ayat,
                    nama_latin: resStorage?.nama_latin,
                    arti: resStorage?.arti,
                    tempat_turun: resStorage?.tempat_turun,
                    deskripsi: resStorage?.deskripsi,
                    audio: resStorage?.audio
                });
                setSurah(resStorage?.ayat);
                if(query !== resStorage?.nama_latin) {
                    navigate('/surah')
                }
            }
        }
    }, [surah, desc]);
    
    return (
        <>
            <div className="bg-hero bg-center bg-cover bg-no-repeat w-full p-5 flex flex-col items-center bg-teal-500 dark:bg-zinc-900 dark:bg-orange-600">
                <div className="p-5 w-full max-w-[61.5rem] flex justify-between items-center bg-teal-700 rounded-2xl dark:bg-orange-900">
                    <div>
                        <p className="text-lg text-zinc-50 font-mulish font-bold dark:text-zinc-50">{desc?.nama_latin}</p>
                        <p className="text-sm text-zinc-100 font-mulish font-semibold dark:text-zinc-50">{desc?.arti}</p>
                        <p className="text-sm text-teal-300 font-mulish font-semibold dark:text-orange-400">
                            {desc?.tempat_turun}
                        </p>
                    </div>
                    <div>
                        <h1 className="text-3xl font-kufi text-teal-300 dark:text-orange-400">{desc?.nama}</h1>
                        <p className="font-arab mt-2 text-lg text-teal-300 font-semibold dark:text-orange-400">{desc?.jumlah_ayat?.toLocaleString('ar-EG')} اية</p>
                    </div>
                </div>
                <div className="hidden bg-teal-100 border border-zinc-200 shadow-2xl shadow-zinc-300 max-w-[61.5rem] text-zinc-600 mt-3 rounded-2xl w-full p-5 flex flex-col items-center bg-zinc-100 dark:bg-[#222] dark:text-zinc-400 dark:shadow-zinc-950 dark:border-zinc-800">
                    <p className="h-full">{parse(`${desc?.deskripsi?.toString() as  string}`)}</p>
                </div>
            </div>
            <div className="nav-box mt-0 justify-center border-t border-zinc-200 dark:border-zinc-800">
                <div className="justify-between w-full max-w-[61.5rem]">
                    <Input 
                    text="Cari Ayat"
                    identify="search"
                    styles="max-w-xs placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                </div>
            </div>
            <div className="list-surah-container">
                <div className="gap-5 list-surah flex-col items-center justify-start">
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
         <div
         className="ayat-box pt-6 max-w-[61.5rem]" 
         id={ayat?.id?.toString() as string}
         key={ayat?.id?.toString() as string}
         >
            <div dir="rtl" className="w-full">
                <h1 className="leading-[4.5rem] text-2xl text-zinc-700 font-arab dark:text-zinc-200">
                    {ayat?.ar?.replace(/ ࣖ/g, '').replace(/\ٖ/g, 'ٍ')}
                    <span className="text-2xl text-teal-500 dark:text-orange-500">
                        &#64831;{ayat?.nomor?.toLocaleString('ar-EG')}&#64830;
                    </span>
                </h1>
            </div>
            <div className="w-full mt-3">
                <p className="h-full text-sm text-zinc-700 dark:text-zinc-300 font-mulish font-semibold">{parse(ayat?.tr as string)}</p>
            </div>
            <div className="w-full mt-1.5">
                <p className="h-full text-sm text-zinc-600 dark:text-zinc-400 font-mulish font-normal">{ayat?.idn}</p>
            </div>
            <div className="w-full flex justify-start gap-3">
                <button className="items-center btn rounded-full w-auto gap-2">
                    <FaRegBookmark/>
                    Tandai
                </button>
                <button className="items-center btn rounded-full px-3 w-auto bg-zinc-200 text-teal-500 dark:text-orange-500 dark:bg-zinc-800">
                    <FaRegCopy/>
                </button>
                <button className="items-center btn rounded-full px-3 w-auto bg-zinc-200 text-teal-500 dark:text-orange-500 dark:bg-zinc-800">
                    <FaRegShareFromSquare/>
                </button>
            </div>
        </div>
    )
}