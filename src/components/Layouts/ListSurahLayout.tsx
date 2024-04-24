import Input from '.././Elements/Input.tsx';
import { useState, MouseEvent } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from '.././Elements/Button.tsx';
import { RxCross2 } from "react-icons/rx";

export default () => {
    const recentRead: boolean = false;
    const [hidden, setHidden] = useState<boolean>(false);
    
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
        </>
    )
}