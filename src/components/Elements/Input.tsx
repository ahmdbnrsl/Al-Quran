export default (
    {min, max, type, text}: {
        min?: number,
        max?: number,
        type?: string,
        text?: string
    }) => {
    return (
        <input
        className="peer input placeholder:text-transparent"
        type={type ? type : 'text'}
        minLength={min}
        maxLength={max}
        placeholder={text}
        />
    )
}