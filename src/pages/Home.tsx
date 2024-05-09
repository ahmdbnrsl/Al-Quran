import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default () => {
    const [navigate, setNavigate] = useState<string>("surah");
    
    const getCookieValue = (name: string) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    );
    
    useEffect(() => {
        const authToken: string | null = getCookieValue("authToken");
        if(!authToken) {
            setNavigate("masuk");
        }
    }, [navigate]);
    return (
        <div className="index-box bg-center bg-cover bg-no-repeat bg-light-theme justify-center items-center dark:bg-dark-theme">
            <h1 className="text-6xl font-kufi text-teal-500 dark:text-orange-500">القران الكريم</h1>
            <h1 className="text-3xl mt-6 text-zinc-700 dark:text-zinc-300 font-arab">لَّا يَمَسُّهُۥٓ إِلَّا ٱلۡمُطَهَّرُونَ</h1>
            <Link className="px-12 btn w-auto rounded-full items-center" to={`/${navigate}`}>{navigate !== "masuk" ? 'Mulai' : 'Masuk'}</Link>
        </div>
    )
}