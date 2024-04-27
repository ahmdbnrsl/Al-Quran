import { ChangeEventHandler } from 'react';
export default (
    {type, text, identify, onChanges, styles}: {
        type?: string,
        text?: string,
        identify?: string,
        onChanges?: ChangeEventHandler<HTMLInputElement>,
        styles?: string
    }) => {
    return (
        <input
        className={`peer input placeholder:text-transparent ${styles}`}
        type={type ? type : 'text'}
        placeholder={text}
        id={identify}
        name={identify}
        onChange={onChanges}
        //required
        />
    )
}