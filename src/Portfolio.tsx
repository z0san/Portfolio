import React, { useState } from "react"
import Hero from "./components/Hero"
import MainContent from "./components/MainContent"

const Portfolio = () => {
	const [theme, setTheme] = useState("dark" as "dark" | "light")

	return (
		<div
			className={`${
				theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
			}  min-h-screen flex w-full`}
		>
			<div className="w-1/2 fixed top-0 left-0">
				<Hero theme={theme} setTheme={setTheme} />
			</div>
			<div className="w-1/2 ml-[50%]">
				<MainContent theme={theme} />
			</div>
		</div>
	)
}

export default Portfolio
