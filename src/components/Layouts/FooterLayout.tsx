import DarkImage from '/logo/dark_logo.png';
import LightImage from '/logo/light_logo.png';
import { Link } from 'react-router-dom';

export default () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <div className="footer-container">
            <div className="footer">
                
                <div className="flex flex-col items-center w-full">
                    <img
                    src={isDarkMode ? DarkImage : LightImage}
                    width={70}
                    height={70}
                    />
                    <h1 className="font-mulishsemibold text-xl -mt-3 mb-0 border-b-0 text-teal-500 dark:text-orange-500">Alquranqu</h1>
                    <p className="text-sm font-mulish text-zinc-900 dark:text-zinc-500">© 2024 | Ahmad Beni Rusli</p>
                </div>
                <div className="flex flex-col">
                    <h1 className="footer-title">Navigasi</h1>
                    <Link to="/beranda" className="footer-navigate">Beranda</Link>
                    <Link to="/surah" className="footer-navigate">Surah</Link>
                    <Link to="/daftar" className="footer-navigate">Daftar</Link>
                    <Link to="/masuk" className="footer-navigate">Masuk</Link>
                </div>
                <div className="flex flex-col">
                    <h1 className="footer-title">Informasi</h1>
                    <Link to="/faq" className="footer-navigate">FAQ</Link>
                    <Link to="/privasi" className="footer-navigate">Privasi</Link>
                    <Link to="/polisi" className="footer-navigate">Polisi</Link>
                </div>
            </div>
        </div>
    )
}