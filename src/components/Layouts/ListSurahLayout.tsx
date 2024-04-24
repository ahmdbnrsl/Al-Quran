import Input from '.././Elements/Input.tsx';
import { useState, MouseEvent } from 'react';
import { FaCircleUser } from "react-icons/fa6";
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
            <div className="nav-box justify-center">
                <div className="nav-box max-w-2xl pt-1 px-0 pb-0 shadow-none">
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
                        <FaCircleUser/>
                    </button>
                    <button
                    type="button"
                    className={`btn-bar bg-zinc-200 dark:bg-zinc-900 ${hidden ? 'visible' : 'hidden'}`}
                    onClick={(): void => {
                        setHidden(false);
                    }}>
                        <RxCross2/>
                    </button>
                </div>
            </div>
        </>
    )
}