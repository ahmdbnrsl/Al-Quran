import Input from '.././Elements/Input.tsx';
import { FaBarsProgress } from "react-icons/fa6";

export default () => {
    const recentRead: boolean = false;
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
                        <h1 className="text-lg font-mulish text-zinc-300">Belum ada bacaan</h1>
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
                    <button className="btn-bar">
                        <FaBarsProgress/>
                    </button>
                </div>
            </div>
        </>
    )
}