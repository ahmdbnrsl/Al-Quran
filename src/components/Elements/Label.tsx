export default ({inputFor, children}: {
    inputFor?: string,
    children?: string
}) => <label htmlFor={inputFor} className="input-label peer-placeholder-shown:translate-y-3 peer-focus:text-teal-500 dark:peer-focus:text-orange-500 peer-focus:-translate-y-3">{children}</label>