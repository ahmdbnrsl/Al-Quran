import DarkImage from '/logo/dark_logo.png';
import LightImage from '/logo/light_logo.png';
import { Link } from 'react-router-dom';
import {
    FaInstagram,
    FaXTwitter,
    FaLinkedin,
    FaTiktok,
    FaGithub
} from "react-icons/fa6";

export default () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <div className="footer-container">
            <div className="footer mt-5">
                <div className="flex flex-col">
                    <h1 className="footer-title">Navigasi</h1>
                    <Link to="/" className="footer-navigate">Beranda</Link>
                    <Link to="/surah" className="footer-navigate">Surah</Link>
                    <Link to="/daftar" className="footer-navigate">Daftar</Link>
                    <Link to="/masuk" className="footer-navigate">Masuk</Link>
                </div>
                <div className="flex flex-col">
                    <h1 className="footer-title">Informasi</h1>
                    <Link to="/kebijakan_privasi" className="footer-navigate">Kebijakan Privasi</Link>
                </div>
                <div className="flex flex-col">
                    <h1 className="footer-title">Fitur</h1>
                    <Link to="/surah" className="footer-navigate">Terjemah bahasa Indonesia</Link>
                    <Link to="/surah" className="footer-navigate">Pencarian surah dan ayat</Link>
                    <Link to="/surah" className="footer-navigate">Penandaan terakhir dibaca</Link>
                </div>
                <div className="flex flex-col">
                    <h1 className="footer-title">Teknologi</h1>
                    <Link to="https://react.dev" className="footer-navigate">React Js</Link>
                    <Link to="https://tailwindcss.com" className="footer-navigate">Tailwind CSS</Link>
                    <Link to="https://vitejs.dev" className="footer-navigate">Vite</Link>
                    <Link to="https://nodejs.org" className="footer-navigate">Node Js</Link>
                    <Link to="https://typescript.com" className="footer-navigate">Typescript</Link>
                    <Link to="https://mongodb.com" className="footer-navigate">Mongo DB</Link>
                </div>
                <div className="flex flex-col items-center w-full">
                    {
                        isDarkMode ?
                        <img
                        src={DarkImage}
                        width={70}
                        height={70}
                        />
                        :
                        <img
                        src={LightImage}
                        width={70}
                        height={70}
                        />
                    }
                    <h1 className="font-mulish font-black text-xl -mt-3 mb-0 border-b-0 text-teal-500 dark:text-orange-500">Alquranqu</h1>
                    <div className="flex flex-wrap justify-center gap-4 mt-2">
                        <Link to="https://Instagram.com/ahmd.bn.tsx" className="footer-navigate text-lg">
                            <FaInstagram/>
                        </Link>
                        <Link to="https://twitter.com/LiviaOdrig88804" className="footer-navigate text-lg">
                            <FaXTwitter/>
                        </Link>
                        <Link to="https://www.linkedin.com/in/ahmad-beny-15391b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-navigate text-lg">
                            <FaLinkedin/>
                        </Link>
                        <Link to="https://www.tiktok.com/@then_benbennnnn23.exs?_t=8mDalLhRUhk&_r=1" className="footer-navigate text-lg">
                            <FaTiktok/>
                        </Link>
                        <Link to="https://github.com/abrazax56" className="footer-navigate text-lg">
                            <FaGithub/>
                        </Link>
                    </div>
                    <p className="mt-2 text-sm font-mulish text-zinc-900 dark:text-zinc-500">© 2024 | Ahmad Beni Rusli | Untuk Allah</p>
                </div>
            </div>
        </div>
    )
}