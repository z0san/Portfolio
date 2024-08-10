import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faCode,
	faServer,
	faDatabase,
	faCloud,
} from "@fortawesome/free-solid-svg-icons"

const skillsData = [
	{
		id: 0,
		title: "Frontend",
		icon: faCode,
		items: ["React", "Vue.js", "JavaScript/TypeScript", "HTML/CSS"],
	},
	{
		id: 1,
		title: "Backend",
		icon: faServer,
		items: ["Node.js", "PHP/Laravel", "Java/Kotlin", "Python", "C/C++/C#"],
	},
	{
		id: 2,
		title: "Databases",
		icon: faDatabase,
		items: ["SQL", "MongoDB", "DynamoDB"],
	},
	{
		id: 3,
		title: "Cloud & DevOps",
		icon: faCloud,
		items: ["AWS (Lambda, S3, EC2)", "Git", "Linux/Bash"],
	},
]

interface SkillsProps {
	theme: "light" | "dark"
}

const Skills = ({ theme }: SkillsProps) => {
	const [hover, setHover] = useState(null as null | number)

	return (
		<section id="skills" className="py-8 md:py-20">
			<div className="">
				<h2
					className={`text-lg md:text-3xl font-bold mb-4 md:mb-8 text-left sticky top-0 z-10 p-5 rounded-lg ${
						theme === "dark"
							? "bg-gray-700 text-gray-300"
							: "bg-gray-100 text-gray-700"
					}`}
				>
					Skills
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{skillsData.map((data, index) => {
						return (
							<div
								key={index}
								className={`p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
									theme === "dark"
										? "text-gray-300 bg-gray-700"
										: "text-gray-700 bg-gray-100"
								} ${hover !== data.id && hover !== null && "opacity-50"}`}
								onMouseEnter={() => setHover(data.id)}
								onMouseLeave={() => setHover(null)}
							>
								<div className="flex items-center mb-4">
									<FontAwesomeIcon
										icon={data.icon}
										className={`w-6 h-6 mr-2 ${
											theme === "dark" ? "text-blue-400" : "text-blue-600"
										}`}
									/>
									<h3
										className={`text-lg md:text-xl font-bold ${
											theme === "dark" ? "text-white" : "text-gray-800"
										}`}
									>
										{data.title}
									</h3>
								</div>
								<ul
									className={`text-sm md:text-base list-disc list-inside ${
										theme === "dark" ? "text-gray-300" : "text-gray-600"
									}`}
								>
									{data.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Skills
