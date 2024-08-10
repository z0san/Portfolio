import React, { useState } from "react"

interface ExperienceProps {
	theme: "dark" | "light"
}

const experienceData = [
	{
		id: 0,
		name: "CreativesApp",
		title: "Chief Technology Officer",
		url: "https://www.creativesapp.com/",
		location: "London, UK",
		dateRange: "September 2023 - Present",
		description:
			"Led technical development of a project management and fintech platform for the creative industry. Managed a cross-functional team of 4, establishing engineering best practices. Developed analytics tracking system to measure user engagement and platform performance.",
		image: "/experience/creativesapp.jpg",
	},
	{
		id: 1,
		name: "Pelicargo",
		title: "Software Engineer Intern",
		url: "https://www.pelicargo.com/",
		location: "Boston, MA",
		dateRange: "June 2022 - September 2022",
		description:
			"Designed and developed internal tools to reduce client response times by 50%. Created APIs using IATA One Record protocoll. Implemented front-end and back-end solutions using TypeScript, React.js, and Google Apps Script.",
		image: "/experience/pelicargo.jpg",
	},
	{
		id: 2,
		name: "Amazon Looking For Metrics (AWS)",
		title: "Software Development Engineer Intern",
		url: "https://aws.amazon.com/lookout-for-metrics/",
		location: "Seattle WA",
		dateRange: "June 2021 - August 2021",
		description:
			"Built scalable features for AWS - Lookout for Metrics. Implemented back inference for AI inference on specified past data. Collaborated with cross-functional teams and gained experience with various AWS services.",
		image: "/experience/amazon.jpg",
	},
]

const Experience = ({ theme }: ExperienceProps) => {
	const [hover, setHover] = useState(null as null | number)

	return (
		<section id="experience" className="">
			<div className="">
				<div className="space-y-4 md:space-y-8">
					<h2
						className={`text-lg md:text-3xl font-bold mb-4 md:mb-8 text-left sticky top-0 z-10 p-3 md:p-5 rounded-lg ${
							theme === "dark"
								? "bg-gray-700 text-gray-300"
								: "bg-gray-100 text-gray-700"
						}`}
					>
						Experience
					</h2>
					{experienceData.map((data) => (
						<a
							href={data.url}
							target="_blank"
							rel="noopener noreferrer"
							className={`flex flex-col md:flex-row items-start justify-center p-4 md:p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
								theme === "dark"
									? "text-gray-300 bg-gray-700"
									: "text-gray-700 bg-gray-100"
							} ${hover !== data.id && hover !== null && "opacity-50"}`}
							onMouseEnter={() => setHover(data.id)}
							onMouseLeave={() => setHover(null)}
						>
							<div className="hidden md:block rounded-lg relative overflow-hidden mb-4 min-w-52 min-h-52 2xl:min-w-64 2xl:min-h-64 md:mt-4">
								<img
									src={data.image}
									alt="CreativesApp home page"
									className="absolute w-full h-full object-left-top "
								/>
							</div>
							<div className="flex flex-col items-start justify-center md:px-6 pt-0 rounded-lg">
								<p
									className={`${
										theme === "dark" ? "text-gray-300" : "text-gray-700"
									} mb-1 w-full md:text-right text-sm md:text-base`}
								>
									{data.dateRange}
								</p>
								<h3 className="text-lg md:text-2xl font-bold mb-2">
									{data.title} - <br></br>
									{data.name}
								</h3>
								<div className="md:hidden rounded-lg relative overflow-hidden mb-4 min-w-52 min-h-52 ">
									<img
										src="/experience/creativesapp.jpg"
										alt="CreativesApp home page"
										className="absolute w-full h-full object-left-top "
									/>
								</div>
								<p
									className={`${
										theme === "dark" ? "text-gray-300" : "text-gray-700"
									} mb-2`}
								>
									{data.location}
								</p>
								<p
									className={`${
										theme === "dark" ? "text-gray-300" : "text-gray-700"
									} mb-4 text-sm md:text-base`}
								>
									{data.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{["PHP", "Laravel", "MySQL", "HTML/CSS", "JavaScript"].map(
										(skill) => (
											<div
												key={skill}
												className={`p-2 rounded-lg text-sm md:text-base ${
													theme === "dark"
														? "bg-gray-200 text-gray-700"
														: "bg-gray-700 text-gray-300"
												}`}
											>
												<p className="mb-1">{skill}</p>
											</div>
										)
									)}
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
