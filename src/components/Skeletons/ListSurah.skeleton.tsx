import { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default () => {
    return (
        <div
        className="surah-box"
        >
            <div className="flex items-center gap-3">
                <div className="icon-star">
                    <Skeleton className="skeletons"  duration={1} height={20} width={20} />
                </div>
                <div className="text-left">
                    <p className="nama_surah">
                        <Skeleton className="skeletons"  duration={1} height={12} width={100} />
                    </p>
                    <p className="arti_surah">
                        <Skeleton className="skeletons"  duration={1} height={12} width={100} />
                    </p>
                    <p className="arti_surah">
                        <Skeleton className="skeletons"  duration={1} height={12} width={100} />
                    </p>
                </div>
            </div>
            <div className="nama_surah_ar">
                <Skeleton className="skeletons"  duration={1} height={20} width={100} />
            </div>
        </div>
    )
}