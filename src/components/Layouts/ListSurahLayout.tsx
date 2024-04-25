import Input from '.././Elements/Input.tsx';
import { useState, useEffect, MouseEvent } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from '.././Elements/Button.tsx';
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { listSurah } from '../.././service/FetchData/ListSurah.service.ts';
import { ResultListSurah, DetailList } from '../.././types/ResultListSurah.interface.ts';
import ListSurahSkeleton from '.././Skeletons/ListSurah.skeleton.tsx';

export default () => {
    const recentRead: boolean = false;
    const [hidden, setHidden] = useState<boolean>(false);
    const [surahs, setSurahs] = useState<ResultListSurah[]>([]);
    const [loadingSurah, setLoadingSurah] = useState<boolean>(true);
    
    useEffect(() => {
        listSurah((result: ResultListSurah[]): void => {
            setLoadingSurah(false);
            setSurahs(result);
        });
    }, [surahs])
    
    return (
        <>
            <div className="hero-box">
                <h1 className="hero-title">Alquranqu</h1>
                {
                    recentRead ?
                    <div className="history-box">
                        
                    </div>
                    :
                    <div className="history-box items-center justify-center">
                        <h1 className="text-lg font-mulish text-teal-300 dark:text-orange-300">Belum ada bacaan</h1>
                    </div>
                }
            </div>
            <div className="nav-box items-center flex-col">
                <div className="nav-box max-w-2xl pt-1 px-0 pb-0 shadow-none gap-3">
                    <div className="w-full max-w-xs">
                        <Input 
                        text="Cari surah"
                        identify="search"
                        />
                    </div>
                    <button
                    type="button"
                    className={`btn-bar ${hidden ? 'hidden' : 'visible'}`}
                    onClick={(): void => {
                        setHidden(true);
                    }}>
                        <HiMiniBars3BottomRight/>
                    </button>
                    <button
                    type="button"
                    className={`btn-bar ${hidden ? 'visible' : 'hidden'}`}
                    onClick={(): void => {
                        setHidden(false);
                    }}>
                        <RxCross2/>
                    </button>
                </div>
                <div className={`modal-container ${hidden ? 'visible' : 'hidden'}`}>
                    <div className="modal mx-3">
                        <FaCircleUser className="mt-5 text-6xl text-zinc-200 dark:text-zinc-600"/>
                        <h1 className="name">Ahmad Beni Rusli</h1>
                        <p className="username">@ahmadbeni2727</p>
                        <Button type="button">Keluar</Button>
                    </div>
                </div>
            </div>
            <div className="list-surah-container">
                <div className="list-surah">
                    {
                        loadingSurah && Array(114).fill(0).map(() => {
                            return <ListSurahSkeleton/>
                        })
                    }
                    {
                        !loadingSurah && surahs?.map((surah: DetailList) => {
                            return (
                                <BoxSurah surah={surah}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


const BoxSurah = ({surah}: {surah: DetailList}) => {
    return (
        <Link
        to={`/${surah?.nama_latin}`}
        className="surah-box"
        >
            <div className="flex items-center gap-3">
                <div className="icon-star">
                    ۞
                </div>
                <div className="text-left">
                    <p className="nama_surah">{surah?.nomor}. {surah?.nama_latin}</p>
                    <p className="arti_surah">{surah?.arti}</p>
                    <p className="arti_surah">{surah?.tempat_turun === 'mekah' ? 'makkiyah' : 'madaniyah'} | {surah?.jumlah_ayat} Ayat</p>
                </div>
            </div>
            <div className="nama_surah_ar">{surah?.nama}</div>
        </Link>
    )
}