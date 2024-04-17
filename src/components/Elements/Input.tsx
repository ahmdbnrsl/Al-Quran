export default (
    {min, max, type, text, identify}: {
        min?: number,
        max?: number,
        type?: string,
        text?: string,
        identify?: string
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
        />
    )
}