interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

const Button = ({ label, onClick, variant = "primary" }: ButtonProps) => {
    const variantClasses = {
        primary: "bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-500 transform transition-transform duration-300 hover:scale-105",
        secondary: "border border-emerald-600 text-emerald-600 px-4 py-2 rounded-md hover:border-emerald-500 hover:text-emerald-500 transform transition-transform duration-300 hover:scale-105"
    }

    return (
        <button className={`${variantClasses[variant]} text-white px-4 py-2 rounded-md`} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;