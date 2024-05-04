import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
         <div
         className="ayat-box pt-6 max-w-[61.5rem]" 
         >
            <div dir="rtl" className="w-full">
                <h1 className="ayat-arab">
                    <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={30}  />
                </h1>
            </div>
            <div className="w-full mt-3">
                <p className="ayat-tr">
                    <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={15} />
                </p>
            </div>
            <div className="w-full mt-1.5">
                <p className="ayat-idn">
                    <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={15} />
                </p>
            </div>
            <div className="w-full flex justify-start gap-3 mt-3">
                <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={50} />
                <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={20} />
                <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={20} />
            </div>
        </div>
    )
}