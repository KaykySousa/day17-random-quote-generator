import { useEffect, useState } from "react"
import tailwindColors from "tailwindcss/colors"
import Button from "./components/Button"
import Social from "./components/Social"
import { Quote } from "./types/api"

export default function App() {
	const [quote, setQuote] = useState<Quote | null>(null)
	const [error, setError] = useState("")
	const [color, setColor] = useState("#ffffff")

	async function getRandomQuote() {
		try {
			const res = await fetch("https://api.quotable.io/random")

			if (!res.ok) throw new Error("HTTP Error: " + res.status)

			const json = await res.json()

			setQuote(json)
			setError("")
			getColor()
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message)
				console.error(error)
			}
		}
	}

	function getColor() {
		const colors = [
			"amber",
			"blue",
			"cyan",
			"emerald",
			"fuchsia",
			"green",
			"indigo",
			"lime",
			"neutral",
			"orange",
			"pink",
			"purple",
			"red",
			"rose",
			"sky",
			"violet",
			"yellow",
		]

		const randomColor = colors[Math.floor(Math.random() * colors.length)]
		const tonalityColor = Math.floor(Math.random() * 2 + 1) * 100

		setColor((tailwindColors as any)[randomColor][tonalityColor])
	}

	useEffect(() => {
		getRandomQuote()
	}, [])

	return (
		<div
			style={{
				backgroundColor: color,
			}}
			className="min-h-screen w-full flex flex-col justify-center items-center p-6"
		>
			{error ? (
				<p className="font-serif text-4xl font-light block">
					Something went wrong!
				</p>
			) : quote ? (
				<div className="max-w-lg font-serif">
					<q className="w-full text-4xl font-light block">
						{quote?.content}
					</q>
					<p className="text-right text-lg mt-2">
						{"-"} {quote?.author}
					</p>
				</div>
			) : (
				<p className="font-serif text-4xl font-light block">
					Loading...
				</p>
			)}
			<Button className="!mt-8" onClick={getRandomQuote}>
				Get Quote
			</Button>
			<Social />
		</div>
	)
}
