
import { 
    useState,
    useEffect,
    MouseEvent,
    ChangeEvent
} from 'react';
import { jwtDecode } from 'jwt-decode';
import { FaCircleUser } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import {
    Link,
    useSearchParams,
    useNavigate
} from "react-router-dom";

import { listSurah } from '../.././service/FetchData/ListSurah.service.ts';
import { logout } from '../.././service/Auth/Logout.ts';
import {
    ResultListSurah,
    DetailList
} from '../.././types/ResultListSurah.interface.ts';

import Input from '.././Elements/Input.tsx';
import Button from '.././Elements/Button.tsx';
import Loading from '.././Elements/Loading.tsx';
import ListSurahSkeleton from '.././Skeletons/ListSurah.skeleton.tsx';
import ProfileSkeleton from '.././Skeletons/ProfileModal.skeleton.tsx';


export default () => {
    interface User {
        name: string;
        username: string;
        password: string;
    }
    
    const getCookieValue = (name: string) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    );
    
    const recentRead: boolean = false;
    const [searchParams, setSearchParams] = useSearchParams();
    const [user, setUser] = useState<User | null>(null);
    const [hidden, setHidden] = useState<boolean>(false);
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [surahs, setSurahs] = useState<ResultListSurah[]>([]);
    const [loadingSurah, setLoadingSurah] = useState<boolean>(true);
    const [loadingProfile, setLoadingProfile] = useState<boolean>(true);
    const getSurah: string | null = window.localStorage.getItem('list_surah');
    const navigate = useNavigate();
    
    useEffect(() => {
        const authToken: string | null = getCookieValue("authToken");
        if(!authToken) {
            navigate('/masuk');
        } else {
            const userInfo: User = jwtDecode(authToken);
            setUser(userInfo);
        }
    }, []);
    
    useEffect(() => {
        if(!getSurah) {
            listSurah((result: ResultListSurah[] | undefined): void => {
                if(result !== undefined) {
                    setSurahs(result);
                    window.localStorage.setItem('list_surah', JSON.stringify(result));
                    setLoadingSurah(false);
                } else {
                    navigate('/surah');
                }
            });
        } else {
            setSurahs(JSON.parse(getSurah));
            setLoadingSurah(false);
        }
    }, [surahs]);
    
    const SearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value !== "") {
            searchParams.set("cari", e.target.value);
            setSearchParams(searchParams);
        } else {
            searchParams.delete("cari");
            setSearchParams(searchParams);
        }
    }
    
    const HandleLogout = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setIsHidden(false);
        logout(() => {
            setIsHidden(true);
            navigate('/masuk');
        });
    }
    
    const query = searchParams.get("cari");
    
    const filteredSurah = surahs?.filter((surah: DetailList): boolean | undefined => {
        if(!Number(query)) {
            return surah?.nama_latin?.toLowerCase().includes(query?.toLowerCase() || "")
        } else {
            return surah?.nomor?.toString().includes(query || "")
        }
    });
    
    return (
        <>
            <div className="hero-box">
                <h1 className="hero-title">القرآن الكريم</h1>
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
                <div className="nav-box max-w-[61.5rem] pt-1 px-0 pb-0 shadow-none gap-3">
                    <div className="w-full max-w-xs relative flex justify-end items-center">
                        <Input 
                        text="Cari surah"
                        identify="search"
                        onChanges={SearchChange}
                        styles="placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                        />
                        <div className="mr-0.5 py-2 px-4 absolute rounded-r-xl bg-zinc-100 dark:bg-zinc-900">
                            <IoSearch className="text-xl text-teal-500 dark:text-orange-500"/>
                        </div>
                    </div>
                    <button
                    type="button"
                    className={`btn-bar ${hidden ? 'hidden' : 'visible'}`}
                    onClick={(): void => {
                        setHidden(true);
                        setTimeout(() => setLoadingProfile(false), 1500);
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
                        {
                            loadingProfile && <ProfileSkeleton/>
                        }
                        {
                            !loadingProfile &&
                            <>
                                <h1 className="name">{user?.name}</h1>
                                <p className="username">@{user?.username}</p>
                            </>
                        }
                        <Button
                        type="button"
                        onClick={HandleLogout}
                        isHidden={!isHidden}
                        >Keluar</Button>
                        <Button
                        type="button"
                        isHidden={isHidden}
                        >
                            <Loading/>
                            Keluar...
                        </Button>
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
                        !loadingSurah && filteredSurah?.length > 0 ? filteredSurah?.map((surah: DetailList) => {
                            return (
                                <BoxSurah surah={surah}/>
                            )
                        }) : !loadingSurah && <p className="text-lg mt-5 text-teal-500 dark:text-orange-500">Surah tidak ditemukan.</p>
                    }
                </div>
            </div>
        </>
    )
}


const BoxSurah = ({surah}: {surah: DetailList}) => {
    return (
        <Link
        to={`/surah/${surah?.nomor}`}
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