import { ChangeEventHandler } from 'react';
export default (
    {type, text, identify, onChanges}: {
        type?: string,
        text?: string,
        identify?: string,
        onChanges?: ChangeEventHandler<HTMLInputElement>
    }) => {
    return (
        <input
        className="peer input placeholder:text-transparent"
        type={type ? type : 'text'}
        placeholder={text}
        id={identify}
        name={identify}
        onChange={onChanges}
        //required
        />
    )
}