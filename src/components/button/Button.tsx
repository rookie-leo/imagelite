interface ButtonProps {
    color?: TailwindColors,
    label?: string
    onClick?: (event: any) => void
}

export const Button: React.FC<ButtonProps> = ({ color = 'blue', label, onClick }) => {
    return (
        <>
            <button className={`${colorClasses[color]} text-white px-4 py-2 rounded-lg text-gray-900 transition-transform ease-in duration-300 transform hover:shadow-lg hover:translate-y-2`}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    )
}

export type TailwindColors =
    | "blue"
    | "indigo"
    | "gray"
    | "green"
    | "red"
    | "pink"
    | "purple"


const colorClasses: Record<TailwindColors, string> = {
    blue: "bg-blue-500 hover:bg-blue-700",
    indigo: "bg-indigo-500 hover:bg-indigo-700",
    gray: "bg-gray-500 hover:bg-gray-700",
    green: "bg-green-500 hover:bg-green-700",
    red: "bg-red-500 hover:bg-red-700",
    pink: "bg-pink-500 hover:bg-pink-700",
    purple: "bg-purple-500 hover:bg-purple-700",
}
