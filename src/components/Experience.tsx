import React, { useState } from "react"

const aClass =
	"flex items-start justify-center p-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"

interface ExperienceProps {
	theme: "dark" | "light"
}

const Experience = ({ theme }: ExperienceProps) => {
	const [hover, setHover] = useState(
		null as null | "creativesapp" | "amazon" | "pelicargo"
	)

	return (
		<section id="experience" className="">
			<div className="">
				<div className="space-y-8">
					<h2
						className={`text-3xl font-bold mb-8 text-left sticky top-0 z-10 p-5 rounded-lg ${
							theme === "dark"
								? "bg-gray-700 text-gray-300"
								: "bg-gray-200 text-gray-700"
						}`}
					>
						Experience
					</h2>
					<a
						href="https://www.creativesapp.com/"
						target="_blank"
						rel="noopener noreferrer"
						className={`${aClass} ${
							theme === "dark"
								? "text-gray-300 bg-gray-700"
								: "text-gray-700 bg-gray-200"
						} ${hover !== "creativesapp" && hover !== null && "opacity-50"}`}
						onMouseEnter={() => setHover("creativesapp")}
						onMouseLeave={() => setHover(null)}
					>
						<div className="rounded-lg relative overflow-hidden mb-4 min-w-64 min-h-64">
							<img
								src="/experience/creativesapp.jpg"
								alt="CreativesApp home page"
								className="absolute w-full h-full object-left-top "
							/>
						</div>
						<div className="flex flex-col items-start justify-center p-6 pt-0 rounded-lg">
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-1 w-full text-right`}
							>
								September 2023 - Present
							</p>
							<h3 className="text-2xl font-bold mb-2">
								Chief Technology Officer - <br></br>Creativesapp
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-2`}
							>
								London, UK
							</p>
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-4`}
							>
								Led technical development of a project management and fintech
								platform for the creative industry. Architected and implemented
								core platform features using PHP, Laravel, and MySQL. Managed a
								cross-functional team of 4, establishing engineering best
								practices. Developed analytics tracking system to measure user
								engagement and platform performance.
							</p>
							<div className="flex flex-wrap gap-2">
								{["PHP", "Laravel", "MySQL", "HTML/CSS", "JavaScript"].map(
									(skill) => (
										<div
											key={skill}
											className={`p-2 rounded-lg ${
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
					<a
						href="https://www.pelicargo.com/"
						target="_blank"
						rel="noopener noreferrer"
						className={`${aClass} ${
							theme === "dark"
								? "text-gray-300 bg-gray-700"
								: "text-gray-700 bg-gray-200"
						} ${hover !== "pelicargo" && hover !== null && "opacity-50"}`}
						onMouseEnter={() => setHover("pelicargo")}
						onMouseLeave={() => setHover(null)}
					>
						<div className="rounded-lg relative overflow-hidden mb-4 min-w-64 min-h-64">
							<img
								src="/experience/pelicargo.jpg"
								alt="Pelicargo home page"
								className="absolute w-full h-full object-left-top "
							/>
						</div>
						<div className="flex flex-col items-start justify-center p-6 pt-0 rounded-lg">
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-1 w-full text-right`}
							>
								June 2022 - September 2022
							</p>
							<h3 className="text-2xl font-bold mb-2">
								Software Engineer Intern - <br></br>Pelicargo
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-2`}
							>
								Boston, MA
							</p>
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-4`}
							>
								Designed and developed internal tools to reduce client response
								times by 50%. Created APIs using IATA One Record protocoll.
								Implemented front-end and back-end solutions using TypeScript,
								React.js, and Google Apps Script.
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									"React.js",
									"Node.js",
									"TypeScript",
									"Google Apps Script",
								].map((skill) => (
									<div
										key={skill}
										className={`p-2 rounded-lg ${
											theme === "dark"
												? "bg-gray-200 text-gray-700"
												: "bg-gray-700 text-gray-300"
										}`}
									>
										<p className="mb-1">{skill}</p>
									</div>
								))}
							</div>
						</div>
					</a>
					<a
						href="https://aws.amazon.com/lookout-for-metrics/"
						target="_blank"
						rel="noopener noreferrer"
						className={`${aClass} ${
							theme === "dark"
								? "text-gray-300 bg-gray-700"
								: "text-gray-700 bg-gray-200"
						} ${hover !== "amazon" && hover !== null && "opacity-50"}`}
						onMouseEnter={() => setHover("amazon")}
						onMouseLeave={() => setHover(null)}
					>
						<div className="rounded-lg relative overflow-hidden mb-4 min-w-64 min-h-64">
							<img
								src="/experience/amazon.jpg"
								alt="CreativesApp home page"
								className="absolute w-full h-full object-left-top "
							/>
						</div>
						<div className="flex flex-col items-start justify-center p-6 pt-0 rounded-lg">
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-1 w-full text-right`}
							>
								June 2021 - August 2021
							</p>
							<h3 className="text-2xl font-bold mb-2">
								Software Development Engineer Intern - Amazon Looking For
								Metrics (AWS)
							</h3>
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-2`}
							>
								Seattle WA
							</p>
							<p
								className={`${
									theme === "dark" ? "text-gray-300" : "text-gray-700"
								} mb-4`}
							>
								Built scalable features for AWS - Lookout for Metrics.
								Implemented back inference for AI inference on specified past
								data. Collaborated with cross-functional teams and gained
								experience with various AWS services.
							</p>
							<div className="flex flex-wrap gap-2">
								{["AWS", "Java", "Kotlin", "React.js"].map((skill) => (
									<div
										key={skill}
										className={`p-2 rounded-lg ${
											theme === "dark"
												? "bg-gray-200 text-gray-700"
												: "bg-gray-700 text-gray-300"
										}`}
									>
										<p className="mb-1">{skill}</p>
									</div>
								))}
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Experience
