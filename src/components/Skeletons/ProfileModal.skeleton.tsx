import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return (
        <>
            <h1 className="name">
                <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'}  duration={1} height={20} width={100} />
            </h1>
            <p className="username">
                <Skeleton baseColor={!isDarkMode ? '#e4e4e7' : '#27272a'} highlightColor={!isDarkMode ? '#fafafa' : '#52525b'} duration={1} height={12} width={100} />
            </p>
        </>
    )
}