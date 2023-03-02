import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, ...props }: ButtonProps) {
	return (
		<button
			className={`h-10 px-4 font-serif border border-black rounded transition-colors hover:bg-black hover:text-white ${className}`}
			{...props}
		/>
	)
}
