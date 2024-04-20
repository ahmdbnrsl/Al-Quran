import { ReactNode } from 'react';

export default (
    {children, type, isHidden}: {
        children: ReactNode,
        type: "button" | "submit" | "reset" | undefined,
        isHidden?: boolean
    }) => {
    return (
        <button
        className={`btn ${isHidden ? 'hidden' : 'visible'}`}
        type={type}
        >{children}</button>
    )
}