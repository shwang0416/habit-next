const Button = ({children, onClick, type, styles}: {children: React.ReactNode, onClick: () => void, type: "primary" | "secondary", styles: string}) => {
    return (
        <button onClick={onClick} 
        className={`
            ${TYPE_STYLES[type]}
            ${styles}
            cursor-pointer
        `}>
            {children}
        </button>
    )
}
const TYPE_STYLES = {
    primary: "bg-lime-400 text-white hover:bg-lime-500",
    secondary: "border-1 border-gray-400 text-gray-400 hover:bg-gray-500"
}
export default Button;