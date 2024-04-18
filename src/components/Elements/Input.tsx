import { ChangeEventHandler } from 'react';
export default (
    {min, max, type, text, identify, onChanges}: {
        min?: number,
        max?: number,
        type?: string,
        text?: string,
        identify?: string,
        onChanges?: ChangeEventHandler<HTMLInputElement>
    }) => {
    return (
        <input
        className="peer input placeholder:text-transparent"
        type={type ? type : 'text'}
        minLength={min}
        maxLength={max}
        placeholder={text}
        id={identify}
        name={identify}
        onChange={onChanges}
        required
        />
    )
}