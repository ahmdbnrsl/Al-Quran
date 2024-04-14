export default (
    {min, max, type}: {
        min?: number,
        max?: number,
        type?: string
    }) => {
    return (
        <input
        className="input"
        type={type ? type : 'text'}
        minLength={min}
        maxLength={max}
        />
    )
}