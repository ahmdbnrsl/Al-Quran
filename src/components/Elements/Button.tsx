import { ReactNode, MouseEventHandler } from 'react';

export default (
    {children, type, isHidden, onClick}: {
        children: ReactNode,
        type: "button" | "submit" | "reset" | undefined,
        onClick?: MouseEventHandler<HTMLButtonElement>
        isHidden?: boolean
    }) => {
    return (
        <button
        className={`btn ${isHidden ? 'hidden' : 'visible'}`}
        type={type}
        onClick={onClick}
        >{children}</button>
    )
}