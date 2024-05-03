import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
         <div
         className="ayat-box pt-6 max-w-[61.5rem]" 
         >
            <div dir="rtl" className="w-full">
                <h1 className="bg-zinc-100 rounded-xl px-2 leading-[4.5rem] text-2xl text-zinc-700 font-arab dark:text-zinc-200 dark:bg-zinc-800">
                    <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={30}  />
                </h1>
            </div>
            <div className="w-full mt-3">
                <p className="h-full text-sm text-zinc-700 dark:text-zinc-300 font-mulish font-semibold">
                    <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={15} />
                </p>
            </div>
            <div className="w-full mt-1.5">
                <p className="h-full text-sm text-zinc-600 dark:text-zinc-400 font-mulish font-normal">
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