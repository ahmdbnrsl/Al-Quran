import { ReactNode } from 'react';

export default ({children} : {children?: ReactNode}) => {
    return (
        <div className="mt-3">
            <p className="h-full text-sm font medium text-zinc-600 dark:text-zinc-400">{children}</p>
        </div>
    )
}