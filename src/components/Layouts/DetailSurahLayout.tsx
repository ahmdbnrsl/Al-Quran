import {
    DetailSurahs,
    SurahBeforeAfter,
    Ayat,
    DetailAyat
} from '../.././types/ResultDetailSurah.interface.ts';
import parse from 'html-react-parser';
import { 
    useState, 
    useEffect,
    forwardRef,
    LegacyRef,
    ChangeEvent,
    SyntheticEvent,
    ForwardRefRenderFunction
} from 'react';
import { 
    FaRegCopy, 
    FaRegBookmark, 
    FaRegShareFromSquare 
} from "react-icons/fa6";
import { 
    useParams,
    useNavigate,
    useSearchParams
} from 'react-router-dom';
import { detailSurah } from '../.././service/FetchData/DetailSurah.service.ts';
import Input from '.././Elements/Input.tsx';
import AyahSkeleton from '../Skeletons/Ayah.skeleton.tsx';
import DescSkeleton from '../Skeletons/DescSurah.skeleton.tsx';

export default () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [ayahLoading, setAyahLoading] = useState<boolean>(true);
    const [desc, setDesc] = useState<DetailSurahs | null>(null);
    const [surah, setSurah] = useState<Array<Ayat>>([]);
    
    const getCookieValue = (name: string) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    );
    
    useEffect(() => {
        const authToken: string | null = getCookieValue("authToken");
        if(!authToken) {
            navigate('/masuk');
        }
    }, []);
    
    useEffect(() => {
        if(!Number(id) || Number(id) < 1 || Number(id) > 114 || !id) {
            navigate('/surah');
        } else {
            const dataSurah: string = window.localStorage.getItem("id_surah_" + id) as string;
            const query = searchParams.get("nama");
            if(!dataSurah) {
                detailSurah(id, (result: DetailSurahs | undefined): void => {
                    setSurah(result?.ayat as Array<Ayat>);
                    setAyahLoading(false);
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
                setSurah(resStorage?.ayat as Array<Ayat>);
                setAyahLoading(false);
                if(query !== resStorage?.nama_latin) {
                    navigate('/surah')
                }
                
            }
        }
    }, [surah, desc, ayahLoading]);
    
    const SearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value !== "") {
            searchParams.set("Ayah", e.target.value);
            setSearchParams(searchParams);
        } else {
            searchParams.delete("Ayah");
            setSearchParams(searchParams);
        }
    }
    
    const query = searchParams.get("Ayah");
    const ID = "7";
    
    const filteredAyah = surah?.filter((ayah: DetailAyat): boolean | undefined => {
        return ayah?.nomor?.toString().toLowerCase().includes(query?.toLowerCase() || "")
    });
    
    return (
        <>
            <a className="hidden scroll" href={`#${ID}`}></a>
            <div className="detail-hero">
                <h1 className="hero-title">القرآن الكريم</h1>
            {
                ayahLoading && <DescSkeleton/>
            }
            {
                !ayahLoading && <div className="desc-container">
                    <div className="header-desc">
                        <div>
                            <p className="desc-nama-latin">{desc?.nama_latin}</p>
                            <p className="desc-arti">{desc?.arti}</p>
                            <p className="desc-tempat-turun">
                                {desc?.tempat_turun}
                            </p>
                        </div>
                        <div>
                            <h1 className="desc-nama">{desc?.nama}</h1>
                            <p className="desc-jumlah-ayat">{desc?.jumlah_ayat?.toLocaleString('ar-EG')} اية</p>
                        </div>
                    </div>
                    <div className="desc-desc">
                        <p className="h-full">{parse(`${desc?.deskripsi?.toString() as  string}`)}</p>
                    </div>
                </div>
            }
            </div>
            <div className="nav-box mt-0 justify-center border-t border-zinc-200 dark:border-zinc-800">
                <div className="justify-between w-full max-w-[61.5rem]">
                    <Input 
                    text="Cari Ayat"
                    identify="search"
                    onChanges={SearchChange}
                    styles="text-sm max-w-[15rem] placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                    />
                </div>
            </div>
            <div className="list-surah-container">
                <div className="gap-3 list-surah flex flex-col items-center justify-start">
                   {
                        ayahLoading && Array(20).fill(0).map(() => {
                            return <AyahSkeleton/>
                        })
                   }
                   {
                        !ayahLoading && filteredAyah?.length > 0 ? filteredAyah?.map((ayat: DetailAyat) => {
                            if(ayat?.id?.toString() === ID) {
                                return (
                                    <ListAyat 
                                    ayat={ayat} 
                                    styles="border-teal-500 dark:border-orange-500"
                                    />
                                )
                            } else {
                                return (
                                    <ListAyat ayat={ayat}/>
                                )
                            }
                        }) : !ayahLoading && <p className="font-mulish text-lg mt-5 text-teal-500 dark:text-orange-500">Ayah tidak ditemukan.</p>
                    }
                    
                </div>
                <div id="beni"></div>
            </div>
        </>
    )
}

const ListAyat = (
    {ayat, styles} : { ayat: DetailAyat, styles?: string | undefined },
) => {
    return (
         <div
         className={`ayat-box pt-6 max-w-[61.5rem] ${styles}`}
         id={ayat?.id?.toString() as string}
         key={ayat?.id?.toString() as string}
         >
            <div dir="rtl" className="w-full">
                <h1 className="ayat-arab">
                    {ayat?.ar?.replace(/ ࣖ/g, '').replace(/\ٖ/g, 'ٍ')}
                    <span className="ayat-nomor">
                        &#64831;{ayat?.nomor?.toLocaleString('ar-EG')}&#64830;
                    </span>
                </h1>
            </div>
            <div className="w-full mt-3">
                <p className="ayat-tr">{parse(ayat?.tr as string)}</p>
            </div>
            <div className="w-full mt-1.5">
                <p className="ayat-idn">{ayat?.idn}</p>
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