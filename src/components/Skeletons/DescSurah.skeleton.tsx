import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <div className="desc-container">
             <div className="header-desc">
                <div>
                    <p className="desc-nama-latin">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={60} />
                    </p>
                    <p className="desc-arti">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={15} width={50} />
                    </p>
                    <p className="desc-tempat-turun">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={15} width={40} />
                    </p>
                </div>
                <div>
                    <h1 className="desc-nama">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={40} width={60} />
                    </h1>
                    <p className="desc-jumlah-ayat">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={50} />
                    </p>
                </div>
            </div>
            <div className="desc-desc">
                <p className="h-full w-full">
                    <Skeleton baseColor={!isDarkMode ? '#0f766e' : '#7c2d12'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={30}/>
                </p>
            </div>
        </div>
    )
}