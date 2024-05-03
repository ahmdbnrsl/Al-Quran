import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <div className="mt-3 w-full max-w-[61.5rem] p-5 bg-teal-700 rounded-2xl dark:bg-orange-900">
             <div className="p-5 w-full flex justify-between items-center">
                <div>
                    <p className="text-lg text-zinc-50 font-mulish font-bold dark:text-zinc-50">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={60} />
                    </p>
                    <p className="text-sm text-zinc-100 font-mulish font-semibold dark:text-zinc-50">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={15} width={50} />
                    </p>
                    <p className="text-sm text-teal-300 font-mulish font-semibold dark:text-orange-400">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={15} width={40} />
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl font-kufi text-teal-300 dark:text-orange-400">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={40} width={60} />
                    </h1>
                    <p className="font-arab mt-2 text-lg text-teal-300 font-semibold dark:text-orange-400">
                        <Skeleton baseColor={!isDarkMode ? '#0d9488' : '#9a3412'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={50} />
                    </p>
                </div>
            </div>
            <div className="text-xs bg-teal-900 text-zinc-100 mt-3 rounded-2xl w-full p-5 flex flex-col items-center dark:bg-orange-950">
                <p className="h-full w-full">
                    <Skeleton baseColor={!isDarkMode ? '#0f766e' : '#7c2d12'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={30}/>
                </p>
            </div>
        </div>
    )
}