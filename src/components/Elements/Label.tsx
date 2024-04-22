export default ({inputFor, children, styles}: {
    inputFor?: string,
    children?: string,
    styles?: string
}) => <label htmlFor={inputFor} className={`input-label peer-placeholder-shown:translate-y-3 peer-focus:text-teal-500 dark:peer-focus:text-orange-500 peer-focus:-translate-y-3 ${styles}`}>{children}</label>