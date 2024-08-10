import React from "react"
import Experience from "./Experience"
import Skills from "./Skills"
import Projects from "./Projects"

interface MainContentProps {
	theme: "dark" | "light"
}

const MainContent = ({ theme }: MainContentProps) => {
	return (
		<div className="w-full p-10">
			<Experience theme={theme} />

			<Skills theme={theme} />

			{/* <Projects theme={theme} /> */}
		</div>
	)
}

export default MainContent
