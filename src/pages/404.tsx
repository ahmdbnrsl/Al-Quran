import { Link } from 'react-router-dom';
export default () => {
    return (
        <div className="p-5 index-box bg-center bg-cover bg-no-repeat bg-light-theme justify-center items-center dark:bg-dark-theme">
            <h1 className="text-6xl font-mulish font-black text-teal-500 dark:text-orange-500">404</h1>
            <h1 className="text-center text-2xl mt-3 text-zinc-700 dark:text-zinc-300 font-mono font-extrabold">Not Found</h1>
            <div className="mt-5 flex flex-wrap justify-center gap-3 w-full max-w-sm">
                <Link className="m-0 px-12 btn w-auto rounded-full items-center" to="/masuk">/masuk</Link>
                <Link className="m-0 px-12 btn w-auto rounded-full items-center" to="/daftar">/daftar</Link>
                <Link className="m-0 px-12 btn w-auto rounded-full items-center" to="/surah">/surah</Link>
                <Link className="m-0 px-12 btn w-auto rounded-full items-center" to="/kebijakan_privasi">/kebijakan_privasi</Link>
            </div>
        </div>
    )
}