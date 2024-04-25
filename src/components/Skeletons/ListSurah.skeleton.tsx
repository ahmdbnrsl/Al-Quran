import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => {
    
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return (
        <div
        className="surah-box"
        >
            <div className="flex items-center gap-3">
                <div className="icon-star">
                    <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'}  duration={1} height={20} width={20} />
                </div>
                <div className="text-left">
                    <p className="nama_surah">
                        <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'}  duration={1} height={12} width={100} />
                    </p>
                    <p className="arti_surah">
                        <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'}  duration={1} height={12} width={100} />
                    </p>
                    <p className="arti_surah">
                        <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'}  duration={1} height={12} width={100} />
                    </p>
                </div>
            </div>
            <div className="nama_surah_ar">
                <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'}  duration={1} height={20} width={100} />
            </div>
        </div>
    )
}